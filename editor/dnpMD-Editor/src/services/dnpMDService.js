app.service('dnpMDService', function($rootScope) {
    this.text = "";
    this.errors = [];
    this.documentOutline = {};

    this.listings = [];
    this.labels = {};

    var fs = require("fs");
    //ar LineByLineReader = require("line-by-line");

    var antlr4 = require('antlr4/index');
    var dnpMDLexer = require('./app/model/dnpMD/dnpMDLexer.js');
    var dnpMDParser = require('./app/model/dnpMD/dnpMDParser.js');

    var dnpMDTreeListener = require('./app/model/dnpMDTreeListener.js');
    var treeListener = new dnpMDTreeListener.dnpMDTreeListener();

    var dnpMDErrorListener = require('./app/model/dnpMDErrorListener.js');
    this.errorListener = new dnpMDErrorListener.dnpMDErrorListener();

    var self = this;
    treeListener.processCompleted = function (documentElements) {
        self.documentOutline = documentElements;
        self.errors = self.errorListener.errors;

        self.processListingsAndImages();

        $rootScope.$broadcast('outlineCompleted');
        self.documentErrors();
    };

    this.documentErrors = function() {};

    this.parseDocument = function (text) {
        this.text = text;

        var chars = new antlr4.InputStream(text);
        var lexer = new dnpMDLexer.dnpMDLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new dnpMDParser.dnpMDParser(tokens);
        parser.buildParseTrees = true;

        this.errorListener.resetErrors();

        parser.removeErrorListeners();
        parser.addErrorListener(this.errorListener);

        var tree = parser.dnpMD();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);
    };

    // Maybe move to a dedicated file?
    this.processListingsAndImages = function () {
        this.listings = [];
        this.labels.listings = {};
        this.labels.images = {};

        var listingCount = 0;

        var self = this;
        this.documentOutline.bodyElements.forEach(function (element) {
            if (element.type == "listing") {
                listingCount++;

                if (element.elements.label != undefined) {
                    self.labels.listings[element.elements.label.content]
                        = {id: element.id, number: listingCount, label: element.elements.label.content};
                }

                if (element.external) {
                    var data = fs.readFileSync(element.elements.path.content);
                    var lines = data.toString().split('\n');

                    if (lines.length > 5) {
                        lines = lines.slice(0,5);

                        lines.push("");
                        lines.push("...");
                    }

                    element.elements.source.content =  lines.join("\n").toString();
                }

                self.listings.push(element);
            }
        });
    };
});
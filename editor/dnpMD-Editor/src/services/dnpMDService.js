app.service('dnpMDService', function() {
    this.text = "";
    this.errors = [];
    this.renderedDocument = {};

    var antlr4 = require('antlr4/index');
    var dnpMDLexer = require('./app/model/dnpMD/dnpMDLexer.js');
    var dnpMDParser = require('./app/model/dnpMD/dnpMDParser.js');

    var dnpMDTreeListener = require('./app/model/dnpMDTreeListener.js');
    var treeListener = new dnpMDTreeListener.dnpMDTreeListener();

    var dnpMDErrorListener = require('./app/model/dnpMDErrorListener.js');
    this.errorListener = new dnpMDErrorListener.dnpMDErrorListener();

    var self = this;
    treeListener.documentCompleted = function (documentElements) {
        self.renderedDocument = documentElements;
        self.errors = self.errorListener.errors;

        self.parsingCompleted();
        self.documentErrors();
    };

    this.parsingCompleted = function() {};
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
});
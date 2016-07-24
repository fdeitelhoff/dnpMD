app.service('dnpMDService', function() {
    this.text = "";
    this.errors = [];
    this.render = {};

    var antlr4 = require('antlr4/index');
    var dnpMDLexer = require('./app/model/dnpMD/dnpMDLexer.js');
    var dnpMDParser = require('./app/model/dnpMD/dnpMDParser.js');

    var dnpMDTreeListener = require('./app/model/dnpMDTreeListener.js');
    var treeListener = new dnpMDTreeListener.dnpMDTreeListener();

    var dnpMDErrorListener = require('./app/model/dnpMDErrorListener.js');
    var errorListener = new dnpMDErrorListener.dnpMDErrorListener(this.errors);

    var self = this;
    treeListener.documentCompleted = function (documentElements) {
        self.render = documentElements;
        self.parsingCompleted(documentElements);
    };

    this.parsingCompleted = function (document) {};

    this.parseDocument = function (text) {
        this.text = text;

        var chars = new antlr4.InputStream(this.text);
        var lexer = new dnpMDLexer.dnpMDLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new dnpMDParser.dnpMDParser(tokens);
        parser.buildParseTrees = true;

        parser.removeErrorListeners();

        parser.addErrorListener(errorListener);

        var tree = parser.dnpMD();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);
    };
});
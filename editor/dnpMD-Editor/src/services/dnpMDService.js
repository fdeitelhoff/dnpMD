app.service('dnpMDService', function() {
    this.test = "";
    this.errors = [];
    this.render = {};

    var antlr4 = require('antlr4/index');
    var dnpMDLexer = require('./app/model/dnpMD/dnpMDLexer.js');
    var dnpMDParser = require('./app/model/dnpMD/dnpMDParser.js');

    var dnpMDTreeListener = require('./app/model/dnpMDTreeListener.js');
    var treeListener = new dnpMDTreeListener.dnpMDTreeListener();

    var dnpMDErrorListener = require('./app/model/dnpMDErrorListener.js');
    var errorListener = new dnpMDErrorListener.dnpMDErrorListener(this.errors);

    /*dnpMDTreeListener.exitSubheadline = function(ctx) {
        console.log("Subheadline2: " + ctx.getText());
        this.render.subheadline = "<div>" + ctx.getText() + "</div>";
    }*/

    this.setTest = function (test) {
        this.test = test;
        //this.errors = [];
        //this.documentChanged();
        this.parseDocument();
    };

    this.getTest = function () {
        return this.test;
    };

    this.documentChanged = function () {
    }

    this.parseDocument = function () {

        var chars = new antlr4.InputStream(this.test);
        var lexer = new dnpMDLexer.dnpMDLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new dnpMDParser.dnpMDParser(tokens);
        parser.buildParseTrees = true;

        parser.removeErrorListeners();


        parser.addErrorListener(errorListener);

        var tree = parser.dnpMD();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);
        //printer.visitHeadline(tree);
        this.render = treeListener.render;
        this.documentChanged();

    }
});
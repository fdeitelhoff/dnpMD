app.service('documentService', function() {
    this.test = "";

    var antlr4 = require('antlr4/index');
    var dnpMDLexer = require('./lib/dnpMD/dnpMDLexer.js');
    var dnpMDParser = require('./lib/dnpMD/dnpMDParser.js');
    var dnpMDParserListener = require('./lib/dnpMD/dnpMDParserListener.js').dnpMDParserListener;
    //var dnpMDParserVisitor = require('./lib/dnpMD/dnpMDParserVisitor').dnpMDParserVisitor;

    var DnpMDListener = function() {
        dnpMDParserListener.call(this);
        return this;
    };

    DnpMDListener.prototype = Object.create(dnpMDParserListener.prototype);
    DnpMDListener.prototype.constructor = DnpMDListener;

    DnpMDListener.prototype.enterDnpMD = function(ctx) {
        console.log("dnp: " + ctx);
    }

    DnpMDListener.prototype.enterHead = function(ctx) {
        console.log("Head: " + ctx);
    }

    DnpMDListener.prototype.enterHeadline = function(ctx) {
        console.log("Headline: " + ctx);
    }




    // Ab hier ein rudimentärer Error-Handler.
    var ErrorListener = function(errors) {
        antlr4.error.ErrorListener.call(this);
        this.errors = errors;
        return this;
    };

    ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
    ErrorListener.prototype.constructor = ErrorListener;
    ErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
        this.errors.push(msg);
        console.log("Fehler: " + msg);
    };





    this.setTest = function(test) {
        this.test = test;
        this.documentChanged();
        this.parseDocument();
    };

    this.getTest = function() {
        return this.test;
    };

    this.documentChanged = function() {}

    // Könnte in einen eigenen Service ausgelagert werden!?!?
    this.parseDocument = function() {

        var chars = new antlr4.InputStream(this.test);
        var lexer = new dnpMDLexer.dnpMDLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new dnpMDParser.dnpMDParser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        var errors = [];
        var errorListener = new ErrorListener(errors);
        parser.addErrorListener(errorListener);

        var tree = parser.dnpMD();
        var listener = new DnpMDListener();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        //printer.visitHeadline(tree);

    }
});
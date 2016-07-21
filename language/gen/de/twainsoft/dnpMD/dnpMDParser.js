// Generated from E:/Git/dnpMD/language/src/de/twainsoft/dnpMD/grammar\dnpMDParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var dnpMDParserVisitor = require('./dnpMDParserVisitor').dnpMDParserVisitor;

var grammarFileName = "dnpMDParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0015\u00bd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00022\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004",
    ":\n\u0004\r\u0004\u000e\u0004;\u0003\u0005\u0003\u0005\u0006\u0005@",
    "\n\u0005\r\u0005\u000e\u0005A\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005\tM\n\t\u0003\t",
    "\u0003\t\u0005\tQ\n\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0005\nY\n\n\u0003\n\u0003\n\u0005\n]\n\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0005\u0010j\n\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010n\n\u0010\u0003\u0010\u0005\u0010q\n\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010u\n\u0010\u0003\u0010\u0005\u0010x\n\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010|\n\u0010\u0003\u0010\u0005\u0010\u007f\n\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u0083\n\u0010\u0003\u0010\u0005",
    "\u0010\u0086\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u008a\n\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u008e\n\u0010\u0003\u0011\u0006",
    "\u0011\u0091\n\u0011\r\u0011\u000e\u0011\u0092\u0003\u0012\u0006\u0012",
    "\u0096\n\u0012\r\u0012\u000e\u0012\u0097\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u009f\n\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u00a4\n\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u00a8\n\u0014\f\u0014\u000e\u0014\u00ab\u000b\u0014",
    "\u0005\u0014\u00ad\n\u0014\u0003\u0015\u0003\u0015\u0006\u0015\u00b1",
    "\n\u0015\r\u0015\u000e\u0015\u00b2\u0003\u0015\u0005\u0015\u00b6\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0002\u0002\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,\u0002\u0002\u00c8\u0002.\u0003\u0002",
    "\u0002\u0002\u00043\u0003\u0002\u0002\u0002\u00067\u0003\u0002\u0002",
    "\u0002\b=\u0003\u0002\u0002\u0002\nC\u0003\u0002\u0002\u0002\fE\u0003",
    "\u0002\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010I\u0003\u0002",
    "\u0002\u0002\u0012U\u0003\u0002\u0002\u0002\u0014^\u0003\u0002\u0002",
    "\u0002\u0016`\u0003\u0002\u0002\u0002\u0018b\u0003\u0002\u0002\u0002",
    "\u001ad\u0003\u0002\u0002\u0002\u001cf\u0003\u0002\u0002\u0002\u001e",
    "\u008d\u0003\u0002\u0002\u0002 \u0090\u0003\u0002\u0002\u0002\"\u0095",
    "\u0003\u0002\u0002\u0002$\u009e\u0003\u0002\u0002\u0002&\u00a0\u0003",
    "\u0002\u0002\u0002(\u00ae\u0003\u0002\u0002\u0002*\u00b7\u0003\u0002",
    "\u0002\u0002,\u00b9\u0003\u0002\u0002\u0002./\u0005\u0004\u0003\u0002",
    "/1\u0005\"\u0012\u000202\u0005&\u0014\u000210\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u00022\u0003\u0003\u0002\u0002\u000234\u0005\u0006",
    "\u0004\u000245\u0005\b\u0005\u000256\u0005\n\u0006\u00026\u0005\u0003",
    "\u0002\u0002\u000279\u0007\u0004\u0002\u00028:\u0007\u0003\u0002\u0002",
    "98\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<\u0007\u0003\u0002\u0002\u0002=?\u0007",
    "\u0005\u0002\u0002>@\u0007\u0003\u0002\u0002?>\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002B\t\u0003\u0002\u0002\u0002CD\u0007\u0006\u0002\u0002D\u000b\u0003",
    "\u0002\u0002\u0002EF\u0007\u0007\u0002\u0002F\r\u0003\u0002\u0002\u0002",
    "GH\u0007\b\u0002\u0002H\u000f\u0003\u0002\u0002\u0002IL\u0007\n\u0002",
    "\u0002JK\u0007\u0003\u0002\u0002KM\u0005\u0014\u000b\u0002LJ\u0003\u0002",
    "\u0002\u0002LM\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NO\u0007",
    "\u0003\u0002\u0002OQ\u0005\u001a\u000e\u0002PN\u0003\u0002\u0002\u0002",
    "PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0007\u0003\u0002",
    "\u0002ST\u0005\u000e\b\u0002T\u0011\u0003\u0002\u0002\u0002UX\u0005",
    "\u000e\b\u0002VW\u0007\u0003\u0002\u0002WY\u0005\u001a\u000e\u0002X",
    "V\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002",
    "\u0002Z[\u0007\u0003\u0002\u0002[]\u0005\u0016\f\u0002\\Z\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]\u0013\u0003\u0002\u0002\u0002",
    "^_\u0007\u000b\u0002\u0002_\u0015\u0003\u0002\u0002\u0002`a\u0007\u000b",
    "\u0002\u0002a\u0017\u0003\u0002\u0002\u0002bc\u0007\f\u0002\u0002c\u0019",
    "\u0003\u0002\u0002\u0002de\u0007\r\u0002\u0002e\u001b\u0003\u0002\u0002",
    "\u0002fg\u0007\u0010\u0002\u0002g\u001d\u0003\u0002\u0002\u0002hj\u0007",
    "\u0015\u0002\u0002ih\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002",
    "jk\u0003\u0002\u0002\u0002km\u0005\u001c\u000f\u0002ln\u0007\u0015\u0002",
    "\u0002ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002n\u008e\u0003",
    "\u0002\u0002\u0002oq\u0007\u0015\u0002\u0002po\u0003\u0002\u0002\u0002",
    "pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rt\u0007\u0013\u0002",
    "\u0002su\u0007\u0015\u0002\u0002ts\u0003\u0002\u0002\u0002tu\u0003\u0002",
    "\u0002\u0002u\u008e\u0003\u0002\u0002\u0002vx\u0007\u0015\u0002\u0002",
    "wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002",
    "\u0002y{\u0005\u0018\r\u0002z|\u0007\u0015\u0002\u0002{z\u0003\u0002",
    "\u0002\u0002{|\u0003\u0002\u0002\u0002|\u008e\u0003\u0002\u0002\u0002",
    "}\u007f\u0007\u0015\u0002\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u0007",
    "\u0014\u0002\u0002\u0081\u0083\u0007\u0015\u0002\u0002\u0082\u0081\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u008e\u0003",
    "\u0002\u0002\u0002\u0084\u0086\u0007\u0015\u0002\u0002\u0085\u0084\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0089\u0007\r\u0002\u0002\u0088\u008a\u0007",
    "\u0015\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u008e\u0003\u0002\u0002\u0002\u008b\u008e\u0007",
    "\u000b\u0002\u0002\u008c\u008e\u0007\u0015\u0002\u0002\u008di\u0003",
    "\u0002\u0002\u0002\u008dp\u0003\u0002\u0002\u0002\u008dw\u0003\u0002",
    "\u0002\u0002\u008d~\u0003\u0002\u0002\u0002\u008d\u0085\u0003\u0002",
    "\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003\u0002",
    "\u0002\u0002\u008e\u001f\u0003\u0002\u0002\u0002\u008f\u0091\u0007\u0003",
    "\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002",
    "\u0002\u0002\u0093!\u0003\u0002\u0002\u0002\u0094\u0096\u0005$\u0013",
    "\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098#\u0003\u0002\u0002\u0002\u0099\u009f\u0005\u001e\u0010",
    "\u0002\u009a\u009f\u0005\f\u0007\u0002\u009b\u009f\u0005\u0010\t\u0002",
    "\u009c\u009f\u0005\u0012\n\u0002\u009d\u009f\u0005 \u0011\u0002\u009e",
    "\u0099\u0003\u0002\u0002\u0002\u009e\u009a\u0003\u0002\u0002\u0002\u009e",
    "\u009b\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e",
    "\u009d\u0003\u0002\u0002\u0002\u009f%\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007\t\u0002\u0002\u00a1\u00a3\u0005 \u0011\u0002\u00a2\u00a4",
    "\u0005*\u0016\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0003\u0002\u0002\u0002\u00a4\u00ac\u0003\u0002\u0002\u0002\u00a5\u00a9",
    "\u0005 \u0011\u0002\u00a6\u00a8\u0005(\u0015\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003",
    "\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ad\u0003",
    "\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00a5\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\'\u0003",
    "\u0002\u0002\u0002\u00ae\u00b5\u0005,\u0017\u0002\u00af\u00b1\u0007",
    "\u0003\u0002\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003",
    "\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003",
    "\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b6\u0007",
    "\u0002\u0002\u0003\u00b5\u00b0\u0003\u0002\u0002\u0002\u00b5\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6)\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007",
    "\u000f\u0002\u0002\u00b8+\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007",
    "\r\u0002\u0002\u00ba\u00bb\u0007\u000e\u0002\u0002\u00bb-\u0003\u0002",
    "\u0002\u0002\u001c1;ALPX\\imptw{~\u0082\u0085\u0089\u008d\u0092\u0097",
    "\u009e\u00a3\u00a9\u00ac\u00b2\u00b5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, "'{=== ===}'", 
                     null, null, null, null, null, null, null, null, null, 
                     "'*'", "'{'" ];

var symbolicNames = [ null, "NL", "SUBHEADLINE", "HEADLINE", "LEAD", "SUBHEADING", 
                      "CAPTION", "TAIL", "LISTING", "ELEMENTPATH", "LABELREF", 
                      "LABEL", "LITERATURE_CONTENT", "AUTHOR_BIO", "ITALIC", 
                      "SINGLE_COMMENT", "MULTI_COMMENT", "STAR", "BRACE_OPEN", 
                      "TEXT" ];

var ruleNames =  [ "dnpMD", "head", "subheadline", "headline", "lead", "subheading", 
                   "caption", "listing", "image", "listingPath", "imagePath", 
                   "labelRef", "label", "italic", "paragraph", "newlines", 
                   "body", "bodyElements", "tail", "literatureEntries", 
                   "authorBio", "literatureEntry" ];

function dnpMDParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

dnpMDParser.prototype = Object.create(antlr4.Parser.prototype);
dnpMDParser.prototype.constructor = dnpMDParser;

Object.defineProperty(dnpMDParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

dnpMDParser.EOF = antlr4.Token.EOF;
dnpMDParser.NL = 1;
dnpMDParser.SUBHEADLINE = 2;
dnpMDParser.HEADLINE = 3;
dnpMDParser.LEAD = 4;
dnpMDParser.SUBHEADING = 5;
dnpMDParser.CAPTION = 6;
dnpMDParser.TAIL = 7;
dnpMDParser.LISTING = 8;
dnpMDParser.ELEMENTPATH = 9;
dnpMDParser.LABELREF = 10;
dnpMDParser.LABEL = 11;
dnpMDParser.LITERATURE_CONTENT = 12;
dnpMDParser.AUTHOR_BIO = 13;
dnpMDParser.ITALIC = 14;
dnpMDParser.SINGLE_COMMENT = 15;
dnpMDParser.MULTI_COMMENT = 16;
dnpMDParser.STAR = 17;
dnpMDParser.BRACE_OPEN = 18;
dnpMDParser.TEXT = 19;

dnpMDParser.RULE_dnpMD = 0;
dnpMDParser.RULE_head = 1;
dnpMDParser.RULE_subheadline = 2;
dnpMDParser.RULE_headline = 3;
dnpMDParser.RULE_lead = 4;
dnpMDParser.RULE_subheading = 5;
dnpMDParser.RULE_caption = 6;
dnpMDParser.RULE_listing = 7;
dnpMDParser.RULE_image = 8;
dnpMDParser.RULE_listingPath = 9;
dnpMDParser.RULE_imagePath = 10;
dnpMDParser.RULE_labelRef = 11;
dnpMDParser.RULE_label = 12;
dnpMDParser.RULE_italic = 13;
dnpMDParser.RULE_paragraph = 14;
dnpMDParser.RULE_newlines = 15;
dnpMDParser.RULE_body = 16;
dnpMDParser.RULE_bodyElements = 17;
dnpMDParser.RULE_tail = 18;
dnpMDParser.RULE_literatureEntries = 19;
dnpMDParser.RULE_authorBio = 20;
dnpMDParser.RULE_literatureEntry = 21;

function DnpMDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_dnpMD;
    return this;
}

DnpMDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DnpMDContext.prototype.constructor = DnpMDContext;

DnpMDContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

DnpMDContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

DnpMDContext.prototype.tail = function() {
    return this.getTypedRuleContext(TailContext,0);
};

DnpMDContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitDnpMD(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.DnpMDContext = DnpMDContext;

dnpMDParser.prototype.dnpMD = function() {

    var localctx = new DnpMDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, dnpMDParser.RULE_dnpMD);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.head();
        this.state = 45;
        this.body();
        this.state = 47;
        _la = this._input.LA(1);
        if(_la===dnpMDParser.TAIL) {
            this.state = 46;
            this.tail();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.subheadline = function() {
    return this.getTypedRuleContext(SubheadlineContext,0);
};

HeadContext.prototype.headline = function() {
    return this.getTypedRuleContext(HeadlineContext,0);
};

HeadContext.prototype.lead = function() {
    return this.getTypedRuleContext(LeadContext,0);
};

HeadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitHead(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.HeadContext = HeadContext;

dnpMDParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, dnpMDParser.RULE_head);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.subheadline();
        this.state = 50;
        this.headline();
        this.state = 51;
        this.lead();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubheadlineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_subheadline;
    return this;
}

SubheadlineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubheadlineContext.prototype.constructor = SubheadlineContext;

SubheadlineContext.prototype.SUBHEADLINE = function() {
    return this.getToken(dnpMDParser.SUBHEADLINE, 0);
};

SubheadlineContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


SubheadlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitSubheadline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.SubheadlineContext = SubheadlineContext;

dnpMDParser.prototype.subheadline = function() {

    var localctx = new SubheadlineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, dnpMDParser.RULE_subheadline);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(dnpMDParser.SUBHEADLINE);
        this.state = 55; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 54;
            this.match(dnpMDParser.NL);
            this.state = 57; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===dnpMDParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadlineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_headline;
    return this;
}

HeadlineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadlineContext.prototype.constructor = HeadlineContext;

HeadlineContext.prototype.HEADLINE = function() {
    return this.getToken(dnpMDParser.HEADLINE, 0);
};

HeadlineContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


HeadlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitHeadline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.HeadlineContext = HeadlineContext;

dnpMDParser.prototype.headline = function() {

    var localctx = new HeadlineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, dnpMDParser.RULE_headline);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(dnpMDParser.HEADLINE);
        this.state = 61; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this.match(dnpMDParser.NL);
            this.state = 63; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===dnpMDParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_lead;
    return this;
}

LeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeadContext.prototype.constructor = LeadContext;

LeadContext.prototype.LEAD = function() {
    return this.getToken(dnpMDParser.LEAD, 0);
};

LeadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitLead(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.LeadContext = LeadContext;

dnpMDParser.prototype.lead = function() {

    var localctx = new LeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, dnpMDParser.RULE_lead);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(dnpMDParser.LEAD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubheadingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_subheading;
    return this;
}

SubheadingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubheadingContext.prototype.constructor = SubheadingContext;

SubheadingContext.prototype.SUBHEADING = function() {
    return this.getToken(dnpMDParser.SUBHEADING, 0);
};

SubheadingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitSubheading(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.SubheadingContext = SubheadingContext;

dnpMDParser.prototype.subheading = function() {

    var localctx = new SubheadingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, dnpMDParser.RULE_subheading);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(dnpMDParser.SUBHEADING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CaptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_caption;
    return this;
}

CaptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaptionContext.prototype.constructor = CaptionContext;

CaptionContext.prototype.CAPTION = function() {
    return this.getToken(dnpMDParser.CAPTION, 0);
};

CaptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitCaption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.CaptionContext = CaptionContext;

dnpMDParser.prototype.caption = function() {

    var localctx = new CaptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, dnpMDParser.RULE_caption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(dnpMDParser.CAPTION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_listing;
    return this;
}

ListingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListingContext.prototype.constructor = ListingContext;

ListingContext.prototype.LISTING = function() {
    return this.getToken(dnpMDParser.LISTING, 0);
};

ListingContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


ListingContext.prototype.caption = function() {
    return this.getTypedRuleContext(CaptionContext,0);
};

ListingContext.prototype.listingPath = function() {
    return this.getTypedRuleContext(ListingPathContext,0);
};

ListingContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ListingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitListing(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ListingContext = ListingContext;

dnpMDParser.prototype.listing = function() {

    var localctx = new ListingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, dnpMDParser.RULE_listing);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(dnpMDParser.LISTING);
        this.state = 74;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 72;
            this.match(dnpMDParser.NL);
            this.state = 73;
            this.listingPath();

        }
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 76;
            this.match(dnpMDParser.NL);
            this.state = 77;
            this.label();

        }
        this.state = 80;
        this.match(dnpMDParser.NL);
        this.state = 81;
        this.caption();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_image;
    return this;
}

ImageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImageContext.prototype.constructor = ImageContext;

ImageContext.prototype.caption = function() {
    return this.getTypedRuleContext(CaptionContext,0);
};

ImageContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


ImageContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ImageContext.prototype.imagePath = function() {
    return this.getTypedRuleContext(ImagePathContext,0);
};

ImageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitImage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ImageContext = ImageContext;

dnpMDParser.prototype.image = function() {

    var localctx = new ImageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, dnpMDParser.RULE_image);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.caption();
        this.state = 86;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 84;
            this.match(dnpMDParser.NL);
            this.state = 85;
            this.label();

        }
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 88;
            this.match(dnpMDParser.NL);
            this.state = 89;
            this.imagePath();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListingPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_listingPath;
    return this;
}

ListingPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListingPathContext.prototype.constructor = ListingPathContext;

ListingPathContext.prototype.ELEMENTPATH = function() {
    return this.getToken(dnpMDParser.ELEMENTPATH, 0);
};

ListingPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitListingPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ListingPathContext = ListingPathContext;

dnpMDParser.prototype.listingPath = function() {

    var localctx = new ListingPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, dnpMDParser.RULE_listingPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(dnpMDParser.ELEMENTPATH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImagePathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_imagePath;
    return this;
}

ImagePathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImagePathContext.prototype.constructor = ImagePathContext;

ImagePathContext.prototype.ELEMENTPATH = function() {
    return this.getToken(dnpMDParser.ELEMENTPATH, 0);
};

ImagePathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitImagePath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ImagePathContext = ImagePathContext;

dnpMDParser.prototype.imagePath = function() {

    var localctx = new ImagePathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, dnpMDParser.RULE_imagePath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(dnpMDParser.ELEMENTPATH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_labelRef;
    return this;
}

LabelRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelRefContext.prototype.constructor = LabelRefContext;

LabelRefContext.prototype.LABELREF = function() {
    return this.getToken(dnpMDParser.LABELREF, 0);
};

LabelRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitLabelRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.LabelRefContext = LabelRefContext;

dnpMDParser.prototype.labelRef = function() {

    var localctx = new LabelRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, dnpMDParser.RULE_labelRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(dnpMDParser.LABELREF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.LABEL = function() {
    return this.getToken(dnpMDParser.LABEL, 0);
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.LabelContext = LabelContext;

dnpMDParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, dnpMDParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(dnpMDParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ItalicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_italic;
    return this;
}

ItalicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItalicContext.prototype.constructor = ItalicContext;

ItalicContext.prototype.ITALIC = function() {
    return this.getToken(dnpMDParser.ITALIC, 0);
};

ItalicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitItalic(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ItalicContext = ItalicContext;

dnpMDParser.prototype.italic = function() {

    var localctx = new ItalicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, dnpMDParser.RULE_italic);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(dnpMDParser.ITALIC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParagraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_paragraph;
    return this;
}

ParagraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParagraphContext.prototype.constructor = ParagraphContext;

ParagraphContext.prototype.italic = function() {
    return this.getTypedRuleContext(ItalicContext,0);
};

ParagraphContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.TEXT);
    } else {
        return this.getToken(dnpMDParser.TEXT, i);
    }
};


ParagraphContext.prototype.STAR = function() {
    return this.getToken(dnpMDParser.STAR, 0);
};

ParagraphContext.prototype.labelRef = function() {
    return this.getTypedRuleContext(LabelRefContext,0);
};

ParagraphContext.prototype.BRACE_OPEN = function() {
    return this.getToken(dnpMDParser.BRACE_OPEN, 0);
};

ParagraphContext.prototype.LABEL = function() {
    return this.getToken(dnpMDParser.LABEL, 0);
};

ParagraphContext.prototype.ELEMENTPATH = function() {
    return this.getToken(dnpMDParser.ELEMENTPATH, 0);
};

ParagraphContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitParagraph(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.ParagraphContext = ParagraphContext;

dnpMDParser.prototype.paragraph = function() {

    var localctx = new ParagraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, dnpMDParser.RULE_paragraph);
    var _la = 0; // Token type
    try {
        this.state = 139;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            _la = this._input.LA(1);
            if(_la===dnpMDParser.TEXT) {
                this.state = 102;
                this.match(dnpMDParser.TEXT);
            }

            this.state = 105;
            this.italic();
            this.state = 107;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 106;
                this.match(dnpMDParser.TEXT);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            _la = this._input.LA(1);
            if(_la===dnpMDParser.TEXT) {
                this.state = 109;
                this.match(dnpMDParser.TEXT);
            }

            this.state = 112;
            this.match(dnpMDParser.STAR);
            this.state = 114;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 113;
                this.match(dnpMDParser.TEXT);

            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            _la = this._input.LA(1);
            if(_la===dnpMDParser.TEXT) {
                this.state = 116;
                this.match(dnpMDParser.TEXT);
            }

            this.state = 119;
            this.labelRef();
            this.state = 121;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
            if(la_===1) {
                this.state = 120;
                this.match(dnpMDParser.TEXT);

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 124;
            _la = this._input.LA(1);
            if(_la===dnpMDParser.TEXT) {
                this.state = 123;
                this.match(dnpMDParser.TEXT);
            }

            this.state = 126;
            this.match(dnpMDParser.BRACE_OPEN);
            this.state = 128;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 127;
                this.match(dnpMDParser.TEXT);

            }
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 131;
            _la = this._input.LA(1);
            if(_la===dnpMDParser.TEXT) {
                this.state = 130;
                this.match(dnpMDParser.TEXT);
            }

            this.state = 133;
            this.match(dnpMDParser.LABEL);
            this.state = 135;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
            if(la_===1) {
                this.state = 134;
                this.match(dnpMDParser.TEXT);

            }
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 137;
            this.match(dnpMDParser.ELEMENTPATH);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 138;
            this.match(dnpMDParser.TEXT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NewlinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_newlines;
    return this;
}

NewlinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewlinesContext.prototype.constructor = NewlinesContext;

NewlinesContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


NewlinesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitNewlines(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.NewlinesContext = NewlinesContext;

dnpMDParser.prototype.newlines = function() {

    var localctx = new NewlinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, dnpMDParser.RULE_newlines);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 141;
        		this.match(dnpMDParser.NL);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 144; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.bodyElements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyElementsContext);
    } else {
        return this.getTypedRuleContext(BodyElementsContext,i);
    }
};

BodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.BodyContext = BodyContext;

dnpMDParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, dnpMDParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 146;
            this.bodyElements();
            this.state = 149; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << dnpMDParser.NL) | (1 << dnpMDParser.SUBHEADING) | (1 << dnpMDParser.CAPTION) | (1 << dnpMDParser.LISTING) | (1 << dnpMDParser.ELEMENTPATH) | (1 << dnpMDParser.LABELREF) | (1 << dnpMDParser.LABEL) | (1 << dnpMDParser.ITALIC) | (1 << dnpMDParser.STAR) | (1 << dnpMDParser.BRACE_OPEN) | (1 << dnpMDParser.TEXT))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BodyElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_bodyElements;
    return this;
}

BodyElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyElementsContext.prototype.constructor = BodyElementsContext;

BodyElementsContext.prototype.paragraph = function() {
    return this.getTypedRuleContext(ParagraphContext,0);
};

BodyElementsContext.prototype.subheading = function() {
    return this.getTypedRuleContext(SubheadingContext,0);
};

BodyElementsContext.prototype.listing = function() {
    return this.getTypedRuleContext(ListingContext,0);
};

BodyElementsContext.prototype.image = function() {
    return this.getTypedRuleContext(ImageContext,0);
};

BodyElementsContext.prototype.newlines = function() {
    return this.getTypedRuleContext(NewlinesContext,0);
};

BodyElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitBodyElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.BodyElementsContext = BodyElementsContext;

dnpMDParser.prototype.bodyElements = function() {

    var localctx = new BodyElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, dnpMDParser.RULE_bodyElements);
    try {
        this.state = 156;
        switch(this._input.LA(1)) {
        case dnpMDParser.ELEMENTPATH:
        case dnpMDParser.LABELREF:
        case dnpMDParser.LABEL:
        case dnpMDParser.ITALIC:
        case dnpMDParser.STAR:
        case dnpMDParser.BRACE_OPEN:
        case dnpMDParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.paragraph();
            break;
        case dnpMDParser.SUBHEADING:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.subheading();
            break;
        case dnpMDParser.LISTING:
            this.enterOuterAlt(localctx, 3);
            this.state = 153;
            this.listing();
            break;
        case dnpMDParser.CAPTION:
            this.enterOuterAlt(localctx, 4);
            this.state = 154;
            this.image();
            break;
        case dnpMDParser.NL:
            this.enterOuterAlt(localctx, 5);
            this.state = 155;
            this.newlines();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_tail;
    return this;
}

TailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TailContext.prototype.constructor = TailContext;

TailContext.prototype.TAIL = function() {
    return this.getToken(dnpMDParser.TAIL, 0);
};

TailContext.prototype.newlines = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NewlinesContext);
    } else {
        return this.getTypedRuleContext(NewlinesContext,i);
    }
};

TailContext.prototype.authorBio = function() {
    return this.getTypedRuleContext(AuthorBioContext,0);
};

TailContext.prototype.literatureEntries = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteratureEntriesContext);
    } else {
        return this.getTypedRuleContext(LiteratureEntriesContext,i);
    }
};

TailContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitTail(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.TailContext = TailContext;

dnpMDParser.prototype.tail = function() {

    var localctx = new TailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, dnpMDParser.RULE_tail);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(dnpMDParser.TAIL);
        this.state = 159;
        this.newlines();
        this.state = 161;
        _la = this._input.LA(1);
        if(_la===dnpMDParser.AUTHOR_BIO) {
            this.state = 160;
            this.authorBio();
        }

        this.state = 170;
        _la = this._input.LA(1);
        if(_la===dnpMDParser.NL) {
            this.state = 163;
            this.newlines();
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===dnpMDParser.LABEL) {
                this.state = 164;
                this.literatureEntries();
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteratureEntriesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_literatureEntries;
    return this;
}

LiteratureEntriesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteratureEntriesContext.prototype.constructor = LiteratureEntriesContext;

LiteratureEntriesContext.prototype.literatureEntry = function() {
    return this.getTypedRuleContext(LiteratureEntryContext,0);
};

LiteratureEntriesContext.prototype.EOF = function() {
    return this.getToken(dnpMDParser.EOF, 0);
};

LiteratureEntriesContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(dnpMDParser.NL);
    } else {
        return this.getToken(dnpMDParser.NL, i);
    }
};


LiteratureEntriesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitLiteratureEntries(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.LiteratureEntriesContext = LiteratureEntriesContext;

dnpMDParser.prototype.literatureEntries = function() {

    var localctx = new LiteratureEntriesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, dnpMDParser.RULE_literatureEntries);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.literatureEntry();
        this.state = 179;
        switch(this._input.LA(1)) {
        case dnpMDParser.NL:
            this.state = 174; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 173;
                this.match(dnpMDParser.NL);
                this.state = 176; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===dnpMDParser.NL);
            break;
        case dnpMDParser.EOF:
            this.state = 178;
            this.match(dnpMDParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AuthorBioContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_authorBio;
    return this;
}

AuthorBioContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuthorBioContext.prototype.constructor = AuthorBioContext;

AuthorBioContext.prototype.AUTHOR_BIO = function() {
    return this.getToken(dnpMDParser.AUTHOR_BIO, 0);
};

AuthorBioContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitAuthorBio(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.AuthorBioContext = AuthorBioContext;

dnpMDParser.prototype.authorBio = function() {

    var localctx = new AuthorBioContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, dnpMDParser.RULE_authorBio);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(dnpMDParser.AUTHOR_BIO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteratureEntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = dnpMDParser.RULE_literatureEntry;
    return this;
}

LiteratureEntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteratureEntryContext.prototype.constructor = LiteratureEntryContext;

LiteratureEntryContext.prototype.LABEL = function() {
    return this.getToken(dnpMDParser.LABEL, 0);
};

LiteratureEntryContext.prototype.LITERATURE_CONTENT = function() {
    return this.getToken(dnpMDParser.LITERATURE_CONTENT, 0);
};

LiteratureEntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof dnpMDParserVisitor ) {
        return visitor.visitLiteratureEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




dnpMDParser.LiteratureEntryContext = LiteratureEntryContext;

dnpMDParser.prototype.literatureEntry = function() {

    var localctx = new LiteratureEntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, dnpMDParser.RULE_literatureEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(dnpMDParser.LABEL);
        this.state = 184;
        this.match(dnpMDParser.LITERATURE_CONTENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.dnpMDParser = dnpMDParser;

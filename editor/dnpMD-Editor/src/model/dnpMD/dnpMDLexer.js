// Generated from E:/Git/dnpMD/language/dnpMD-Language/src/de/twainsoft/dnpMD/grammar\dnpMDLexer.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./../../../lib/antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0015\u0109\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0005\u0002+\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u00033",
    "\n\u0003\r\u0003\u000e\u00034\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004>\n\u0004\r\u0004",
    "\u000e\u0004?\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0006\u0005I\n\u0005\r\u0005\u000e\u0005",
    "J\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006W",
    "\n\u0006\r\u0006\u000e\u0006X\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0006\u0007g\n\u0007\r\u0007\u000e\u0007",
    "h\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0006\t\u0082\n\t\r\t\u000e\t\u0083\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0006\n\u0093\n\n\r\n\u000e\n\u0094\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0006\u000b\u00a2\n\u000b\r\u000b\u000e\u000b\u00a3\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0006\f\u00ae\n\f\r\f\u000e\f\u00af\u0003\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0006\r\u00b7\n\r\r\r\u000e\r\u00b8\u0003\r\u0003\r\u0006\r",
    "\u00bd\n\r\r\r\u000e\r\u00be\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00d0\n\u000e\f\u000e\u000e\u000e\u00d3\u000b\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0006\u000f\u00e3\n\u000f\r\u000f\u000e\u000f\u00e4\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0006\u0010",
    "\u00ed\n\u0010\r\u0010\u000e\u0010\u00ee\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00f7\n\u0011",
    "\f\u0011\u000e\u0011\u00fa\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0006\u0014\u0106\n\u0014\r\u0014\u000e\u0014\u0107",
    "\u00104?JXh\u0083\u0094\u00a3\u00af\u00b8\u00be\u00d1\u00e4\u00f8\u0002",
    "\u0015\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015\u0003\u0002\u0004\u0004",
    "\u0002\f\f\u000f\u000f\u0006\u0002\f\f\u000f\u000f,,}}\u011a\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0003*\u0003\u0002\u0002\u0002\u0005.\u0003\u0002\u0002",
    "\u0002\u00079\u0003\u0002\u0002\u0002\tC\u0003\u0002\u0002\u0002\u000b",
    "P\u0003\u0002\u0002\u0002\r_\u0003\u0002\u0002\u0002\u000fp\u0003\u0002",
    "\u0002\u0002\u0011z\u0003\u0002\u0002\u0002\u0013\u008b\u0003\u0002",
    "\u0002\u0002\u0015\u009c\u0003\u0002\u0002\u0002\u0017\u00a9\u0003\u0002",
    "\u0002\u0002\u0019\u00b4\u0003\u0002\u0002\u0002\u001b\u00c2\u0003\u0002",
    "\u0002\u0002\u001d\u00e0\u0003\u0002\u0002\u0002\u001f\u00e8\u0003\u0002",
    "\u0002\u0002!\u00f2\u0003\u0002\u0002\u0002#\u0100\u0003\u0002\u0002",
    "\u0002%\u0102\u0003\u0002\u0002\u0002\'\u0105\u0003\u0002\u0002\u0002",
    ")+\u0007\u000f\u0002\u0002*)\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0003\u0002\u0002\u0002,-\u0007\f\u0002\u0002-\u0004\u0003",
    "\u0002\u0002\u0002./\u0007%\u0002\u0002/0\u0007%\u0002\u000202\u0003",
    "\u0002\u0002\u000213\n\u0002\u0002\u000221\u0003\u0002\u0002\u00023",
    "4\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000267\u0007%\u0002\u000278\u0007%\u0002",
    "\u00028\u0006\u0003\u0002\u0002\u00029=\u0007%\u0002\u0002:;\u0007^",
    "\u0002\u0002;>\u0007%\u0002\u0002<>\n\u0002\u0002\u0002=:\u0003\u0002",
    "\u0002\u0002=<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002",
    "AB\u0007%\u0002\u0002B\b\u0003\u0002\u0002\u0002CD\u0007%\u0002\u0002",
    "DE\u0007%\u0002\u0002EF\u0007%\u0002\u0002FH\u0003\u0002\u0002\u0002",
    "GI\n\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002KL\u0003\u0002",
    "\u0002\u0002LM\u0007%\u0002\u0002MN\u0007%\u0002\u0002NO\u0007%\u0002",
    "\u0002O\n\u0003\u0002\u0002\u0002PQ\u0007%\u0002\u0002QR\u0007%\u0002",
    "\u0002RS\u0007%\u0002\u0002ST\u0007%\u0002\u0002TV\u0003\u0002\u0002",
    "\u0002UW\n\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002WX\u0003\u0002",
    "\u0002\u0002XY\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\u0003",
    "\u0002\u0002\u0002Z[\u0007%\u0002\u0002[\\\u0007%\u0002\u0002\\]\u0007",
    "%\u0002\u0002]^\u0007%\u0002\u0002^\f\u0003\u0002\u0002\u0002_`\u0007",
    "%\u0002\u0002`a\u0007%\u0002\u0002ab\u0007%\u0002\u0002bc\u0007%\u0002",
    "\u0002cd\u0007%\u0002\u0002df\u0003\u0002\u0002\u0002eg\n\u0002\u0002",
    "\u0002fe\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002hf\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0007",
    "%\u0002\u0002kl\u0007%\u0002\u0002lm\u0007%\u0002\u0002mn\u0007%\u0002",
    "\u0002no\u0007%\u0002\u0002o\u000e\u0003\u0002\u0002\u0002pq\u0007}",
    "\u0002\u0002qr\u0007?\u0002\u0002rs\u0007?\u0002\u0002st\u0007?\u0002",
    "\u0002tu\u0007\"\u0002\u0002uv\u0007?\u0002\u0002vw\u0007?\u0002\u0002",
    "wx\u0007?\u0002\u0002xy\u0007\u007f\u0002\u0002y\u0010\u0003\u0002\u0002",
    "\u0002z{\u0007\u0080\u0002\u0002{|\u0007\u0080\u0002\u0002|}\u0007\u0080",
    "\u0002\u0002}~\u0007\u0080\u0002\u0002~\u007f\u0007\u0080\u0002\u0002",
    "\u007f\u0081\u0003\u0002\u0002\u0002\u0080\u0082\u000b\u0002\u0002\u0002",
    "\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0080\u0002\u0002",
    "\u0086\u0087\u0007\u0080\u0002\u0002\u0087\u0088\u0007\u0080\u0002\u0002",
    "\u0088\u0089\u0007\u0080\u0002\u0002\u0089\u008a\u0007\u0080\u0002\u0002",
    "\u008a\u0012\u0003\u0002\u0002\u0002\u008b\u008c\u0007]\u0002\u0002",
    "\u008c\u008d\u0007]\u0002\u0002\u008d\u008e\u0007]\u0002\u0002\u008e",
    "\u008f\u0007]\u0002\u0002\u008f\u0090\u0007]\u0002\u0002\u0090\u0092",
    "\u0003\u0002\u0002\u0002\u0091\u0093\n\u0002\u0002\u0002\u0092\u0091",
    "\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0007_\u0002\u0002\u0097\u0098",
    "\u0007_\u0002\u0002\u0098\u0099\u0007_\u0002\u0002\u0099\u009a\u0007",
    "_\u0002\u0002\u009a\u009b\u0007_\u0002\u0002\u009b\u0014\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007}\u0002\u0002\u009d\u009e\u0007%\u0002",
    "\u0002\u009e\u009f\u0007%\u0002\u0002\u009f\u00a1\u0003\u0002\u0002",
    "\u0002\u00a0\u00a2\n\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a6\u0007%\u0002\u0002\u00a6\u00a7\u0007%\u0002\u0002",
    "\u00a7\u00a8\u0007\u007f\u0002\u0002\u00a8\u0016\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0007}\u0002\u0002\u00aa\u00ab\u0007%\u0002\u0002\u00ab",
    "\u00ad\u0003\u0002\u0002\u0002\u00ac\u00ae\n\u0002\u0002\u0002\u00ad",
    "\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007%\u0002\u0002\u00b2",
    "\u00b3\u0007\u007f\u0002\u0002\u00b3\u0018\u0003\u0002\u0002\u0002\u00b4",
    "\u00b6\u0007]\u0002\u0002\u00b5\u00b7\n\u0002\u0002\u0002\u00b6\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bc\u0007~\u0002\u0002\u00bb\u00bd",
    "\n\u0002\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00be\u00bc",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0007_\u0002\u0002\u00c1\u001a\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0007%\u0002\u0002\u00c3\u00c4\u0007\"\u0002\u0002\u00c4\u00c5\u0007",
    "M\u0002\u0002\u00c5\u00c6\u0007w\u0002\u0002\u00c6\u00c7\u0007t\u0002",
    "\u0002\u00c7\u00c8\u0007|\u0002\u0002\u00c8\u00c9\u0007d\u0002\u0002",
    "\u00c9\u00ca\u0007k\u0002\u0002\u00ca\u00cb\u0007q\u0002\u0002\u00cb",
    "\u00cc\u0007\"\u0002\u0002\u00cc\u00cd\u0007%\u0002\u0002\u00cd\u00d1",
    "\u0003\u0002\u0002\u0002\u00ce\u00d0\u000b\u0002\u0002\u0002\u00cf\u00ce",
    "\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d4",
    "\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0007%\u0002\u0002\u00d5\u00d6\u0007\"\u0002\u0002\u00d6\u00d7\u0007",
    "M\u0002\u0002\u00d7\u00d8\u0007w\u0002\u0002\u00d8\u00d9\u0007t\u0002",
    "\u0002\u00d9\u00da\u0007|\u0002\u0002\u00da\u00db\u0007d\u0002\u0002",
    "\u00db\u00dc\u0007k\u0002\u0002\u00dc\u00dd\u0007q\u0002\u0002\u00dd",
    "\u00de\u0007\"\u0002\u0002\u00de\u00df\u0007%\u0002\u0002\u00df\u001c",
    "\u0003\u0002\u0002\u0002\u00e0\u00e2\u0007,\u0002\u0002\u00e1\u00e3",
    "\n\u0002\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e4\u00e2",
    "\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7",
    "\u0007,\u0002\u0002\u00e7\u001e\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u00071\u0002\u0002\u00e9\u00ea\u00071\u0002\u0002\u00ea\u00ec\u0003",
    "\u0002\u0002\u0002\u00eb\u00ed\n\u0002\u0002\u0002\u00ec\u00eb\u0003",
    "\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003",
    "\u0002\u0002\u0002\u00f0\u00f1\b\u0010\u0002\u0002\u00f1 \u0003\u0002",
    "\u0002\u0002\u00f2\u00f3\u00071\u0002\u0002\u00f3\u00f4\u0007,\u0002",
    "\u0002\u00f4\u00f8\u0003\u0002\u0002\u0002\u00f5\u00f7\u000b\u0002\u0002",
    "\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f7\u00fa\u0003\u0002\u0002",
    "\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002",
    "\u0002\u00f9\u00fb\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002",
    "\u0002\u00fb\u00fc\u0007,\u0002\u0002\u00fc\u00fd\u00071\u0002\u0002",
    "\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\b\u0011\u0002\u0002",
    "\u00ff\"\u0003\u0002\u0002\u0002\u0100\u0101\u0007,\u0002\u0002\u0101",
    "$\u0003\u0002\u0002\u0002\u0102\u0103\u0007}\u0002\u0002\u0103&\u0003",
    "\u0002\u0002\u0002\u0104\u0106\n\u0003\u0002\u0002\u0105\u0104\u0003",
    "\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0105\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108(\u0003",
    "\u0002\u0002\u0002\u0015\u0002*4=?JXh\u0083\u0094\u00a3\u00af\u00b8",
    "\u00be\u00d1\u00e4\u00ee\u00f8\u0107\u0003\u0002\u0004\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function dnpMDLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

dnpMDLexer.prototype = Object.create(antlr4.Lexer.prototype);
dnpMDLexer.prototype.constructor = dnpMDLexer;

dnpMDLexer.EOF = antlr4.Token.EOF;
dnpMDLexer.NL = 1;
dnpMDLexer.SUBHEADLINE = 2;
dnpMDLexer.HEADLINE = 3;
dnpMDLexer.LEAD = 4;
dnpMDLexer.SUBHEADING = 5;
dnpMDLexer.CAPTION = 6;
dnpMDLexer.TAIL = 7;
dnpMDLexer.LISTING = 8;
dnpMDLexer.ELEMENTPATH = 9;
dnpMDLexer.LABELREF = 10;
dnpMDLexer.LABEL = 11;
dnpMDLexer.LITERATURE_CONTENT = 12;
dnpMDLexer.AUTHOR_BIO = 13;
dnpMDLexer.ITALIC = 14;
dnpMDLexer.SINGLE_COMMENT = 15;
dnpMDLexer.MULTI_COMMENT = 16;
dnpMDLexer.STAR = 17;
dnpMDLexer.BRACE_OPEN = 18;
dnpMDLexer.TEXT = 19;


dnpMDLexer.modeNames = [ "DEFAULT_MODE" ];

dnpMDLexer.literalNames = [ null, null, null, null, null, null, null, "'{=== ===}'", 
                            null, null, null, null, null, null, null, null, 
                            null, "'*'", "'{'" ];

dnpMDLexer.symbolicNames = [ null, "NL", "SUBHEADLINE", "HEADLINE", "LEAD", 
                             "SUBHEADING", "CAPTION", "TAIL", "LISTING", 
                             "ELEMENTPATH", "LABELREF", "LABEL", "LITERATURE_CONTENT", 
                             "AUTHOR_BIO", "ITALIC", "SINGLE_COMMENT", "MULTI_COMMENT", 
                             "STAR", "BRACE_OPEN", "TEXT" ];

dnpMDLexer.ruleNames = [ "NL", "SUBHEADLINE", "HEADLINE", "LEAD", "SUBHEADING", 
                         "CAPTION", "TAIL", "LISTING", "ELEMENTPATH", "LABELREF", 
                         "LABEL", "LITERATURE_CONTENT", "AUTHOR_BIO", "ITALIC", 
                         "SINGLE_COMMENT", "MULTI_COMMENT", "STAR", "BRACE_OPEN", 
                         "TEXT" ];

dnpMDLexer.grammarFileName = "dnpMDLexer.g4";



exports.dnpMDLexer = dnpMDLexer;


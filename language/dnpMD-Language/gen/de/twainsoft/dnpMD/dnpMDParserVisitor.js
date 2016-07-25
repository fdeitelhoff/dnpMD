// Generated from E:/Git/dnpMD/language/dnpMD-Language/src/de/twainsoft/dnpMD/grammar\dnpMDParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by dnpMDParser.

function dnpMDParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

dnpMDParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
dnpMDParserVisitor.prototype.constructor = dnpMDParserVisitor;

// Visit a parse tree produced by dnpMDParser#dnpMD.
dnpMDParserVisitor.prototype.visitDnpMD = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#head.
dnpMDParserVisitor.prototype.visitHead = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#subheadline.
dnpMDParserVisitor.prototype.visitSubheadline = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#headline.
dnpMDParserVisitor.prototype.visitHeadline = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#lead.
dnpMDParserVisitor.prototype.visitLead = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#subheading.
dnpMDParserVisitor.prototype.visitSubheading = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#caption.
dnpMDParserVisitor.prototype.visitCaption = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#listing.
dnpMDParserVisitor.prototype.visitListing = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#image.
dnpMDParserVisitor.prototype.visitImage = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#listingPath.
dnpMDParserVisitor.prototype.visitListingPath = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#imagePath.
dnpMDParserVisitor.prototype.visitImagePath = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#labelRef.
dnpMDParserVisitor.prototype.visitLabelRef = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#label.
dnpMDParserVisitor.prototype.visitLabel = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#italic.
dnpMDParserVisitor.prototype.visitItalic = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#paragraph.
dnpMDParserVisitor.prototype.visitParagraph = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#body.
dnpMDParserVisitor.prototype.visitBody = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#bodyElements.
dnpMDParserVisitor.prototype.visitBodyElements = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#tail.
dnpMDParserVisitor.prototype.visitTail = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#literatureEntries.
dnpMDParserVisitor.prototype.visitLiteratureEntries = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#authorBio.
dnpMDParserVisitor.prototype.visitAuthorBio = function(ctx) {
};


// Visit a parse tree produced by dnpMDParser#literatureEntry.
dnpMDParserVisitor.prototype.visitLiteratureEntry = function(ctx) {
};



exports.dnpMDParserVisitor = dnpMDParserVisitor;
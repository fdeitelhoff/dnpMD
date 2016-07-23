var dnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;

var dnpMDTreeListener = function() {
    dnpMDParserListener.call(this);
    this.render = {};
    return this;
};

dnpMDTreeListener.prototype = Object.create(dnpMDParserListener.prototype);
dnpMDTreeListener.prototype.constructor = dnpMDTreeListener;

dnpMDTreeListener.prototype.exitDnpMD = function(ctx) {
    //console.log("dnp: " + ctx);

}

dnpMDTreeListener.prototype.exitHead = function(ctx) {
    //console.log("Head: " + ctx.getText());
}

dnpMDTreeListener.prototype.exitSubheadline = function(ctx) {
    console.log("Subheadline: " + ctx.getText());
    this.render.subheadline = "<div>" + ctx.getText() + "</div>";
}

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    //console.log("Headline: " + ctx.getText());
}

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    //console.log("Lead: " + ctx.getText());
}

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    //console.log("Para: " + ctx.getText());
}

module.exports.dnpMDTreeListener = dnpMDTreeListener;
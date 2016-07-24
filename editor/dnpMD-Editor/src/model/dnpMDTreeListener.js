var dnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;

var dnpMDTreeListener = function() {
    dnpMDParserListener.call(this);

    this.documentCompleted = function() {};

    this.getText = function(ctx) {
        var text = ctx.getText().trim();

        if (text != "" && text != "<missing null>") {
            return text;
        }

        return "";
    };

    return this;
};

dnpMDTreeListener.prototype = Object.create(dnpMDParserListener.prototype);
dnpMDTreeListener.prototype.constructor = dnpMDTreeListener;

dnpMDTreeListener.prototype.enterDnpMD = function() {
    this.documentElements = {};
    this.documentElements.paragraphs = [];
};

dnpMDTreeListener.prototype.exitDnpMD = function() {
    //console.log("dnp: " + ctx);
    this.documentCompleted(this.documentElements);
};

dnpMDTreeListener.prototype.enterHead = function() {
    this.documentElements.headElements = [];
}

dnpMDTreeListener.prototype.exitHead = function(ctx) {
    //console.log("Head: " + ctx.getText());
}

dnpMDTreeListener.prototype.exitSubheadline = function(ctx) {
    //console.log("Subheadline: " + ctx.getText());
    //if (ctx.getText() !== "")
    this.documentElements.headElements.push({ content: this.getText(ctx), cssClass: "subheadline" });

        //this.documentElements.subheadline = ctx.getText().replace("#", '').trim();
}

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    //console.log("Headline: " + ctx.getText());,
    /*if (ctx.getText() !== "")
        this.documentElements.headline = ctx.getText().replace("#", '').trim();*/
    this.documentElements.headElements.push({ content: this.getText(ctx), cssClass: "headline" });
}

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    //console.log("Lead: " + ctx.getText());
    /*if (ctx.getText() !== "")
        this.documentElements.lead = ctx.getText().replace("#", '').trim();*/
    this.documentElements.headElements.push({ content: this.getText(ctx), cssClass: "lead" });
}

dnpMDTreeListener.prototype.enterParagraph = function() {
    //console.log("Para: " + ctx.getText());
    /*if (ctx.getText() !== "")
     this.documentElements.lead = ctx.getText().replace("#", '').trim();*/
    //this.documentElements

}

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    //console.log("Para: " + ctx.getText());
    /*if (ctx.getText() !== "")
        this.documentElements.lead = ctx.getText().replace("#", '').trim();*/
    this.documentElements.paragraphs.push({ content: this.getText(ctx), cssClass: "paragraph" });
}

module.exports.dnpMDTreeListener = dnpMDTreeListener;
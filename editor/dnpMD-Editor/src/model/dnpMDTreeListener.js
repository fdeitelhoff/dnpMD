var dnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;

var dnpMDTreeListener = function() {
    dnpMDParserListener.call(this);

    this.lastParagraph = {content: "", cssClass: "paragraph", added: true};

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
    this.lastParagraph = {content: "", cssClass: "paragraph", added: true};
};

dnpMDTreeListener.prototype.exitDnpMD = function() {
    this.documentCompleted(this.documentElements);
};

dnpMDTreeListener.prototype.enterHead = function() {
    this.documentElements.headElements = [];
}

dnpMDTreeListener.prototype.exitSubheadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, cssClass: "subheadline"});
    }
}

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, cssClass: "headline"});
    }
}

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, cssClass: "lead"});
    }
}

dnpMDTreeListener.prototype.enterBody = function() {
    this.documentElements.bodyElements = [];
};

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    var text = ctx.getText();
    var content = "";

    if (text != "" && text != "<missing null>") {
        content = text;
    }

    if (content != "") {
        if (this.lastParagraph.content != "") {
            this.lastParagraph.content += content;
        } else {
            this.lastParagraph = {content: content, cssClass: "paragraph", added: true};
            this.documentElements.bodyElements.push(this.lastParagraph);
        }
    }
};

dnpMDTreeListener.prototype.exitNewlines = function() {
    this.lastParagraph = {content: "", cssClass: "paragraph", added: true};
};

dnpMDTreeListener.prototype.exitSubheading = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.bodyElements.push({content: content, cssClass: "subheading"});
    }
};

dnpMDTreeListener.prototype.exitListing = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.bodyElements.push({content: content, cssClass: "subheading"});
    }
};

module.exports.dnpMDTreeListener = dnpMDTreeListener;
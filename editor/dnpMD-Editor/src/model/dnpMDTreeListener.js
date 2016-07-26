var dnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;

var dnpMDTreeListener = function() {
    dnpMDParserListener.call(this);

    this.lastParagraph = {content: "", children: 0, type: "paragraph"};

    this.processCompleted = function() {};

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
    this.lastParagraph = {children: 0, type: "paragraph"};
};

dnpMDTreeListener.prototype.exitDnpMD = function() {
    this.processCompleted(this.documentElements);
};

dnpMDTreeListener.prototype.enterHead = function() {
    this.documentElements.headElements = [];
}

dnpMDTreeListener.prototype.exitSubheadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, children: 0, type: "subheadline"});
    }
}

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, children: 0, type: "headline"});
    }
}

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({content: content, children: 0, type: "lead"});
    }
}

dnpMDTreeListener.prototype.enterBody = function() {
    this.documentElements.bodyElements = [];
};

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    var children = [];

    ctx.children.forEach(function(child) {
        if (child.ITALIC != undefined) {
            // Uhm, yes... that needs an update (or better: a fix within the language dnpMD).
            var text = child.ITALIC().getText().replace('*', '');
            text = text.split('').reverse().join('').replace('*', '').split('').reverse().join('');
            var content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content, type: "italic"});
        } else if (child.LABELREF != undefined) {
            var text = child.LABELREF().getText();
            var content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content, type: "labelRef"});
        } else {
            var text = child.getText();
            var content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content, type: "text"});
        }
    });

    if (children.length > 0) {
        if (this.lastParagraph.children.length > 0) {
            this.lastParagraph.children = this.lastParagraph.children.concat(children);
        } else {
            this.lastParagraph = {children: children, type: "paragraph"};
            this.documentElements.bodyElements.push(this.lastParagraph);
        }
    }
};

dnpMDTreeListener.prototype.exitNewlines = function() {
    this.lastParagraph = {children: 0, type: "paragraph"};
};

dnpMDTreeListener.prototype.exitSubheading = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.bodyElements.push({content: content, children: 0, type: "subheading"})
    }
};

dnpMDTreeListener.prototype.exitListing = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.bodyElements.push({content: content, children: 0, type: "listing"})
    }
};

module.exports.dnpMDTreeListener = dnpMDTreeListener;
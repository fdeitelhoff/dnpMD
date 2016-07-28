var dnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;
var uuid = require('node-uuid');
var fs = require("fs");

var dnpMDTreeListener = function() {
    dnpMDParserListener.call(this);

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

    this.listings = [];
    this.images = [];

    this.listingCount = 0;
    this.imageCount = 0;

    this.labels = {};
    this.labels.listings = {};
    this.labels.images = {};
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
        this.documentElements.headElements.push({id: uuid.v4(), content: content, children: 0, type: "subheadline"});
    }
}

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({id: uuid.v4(), content: content, children: 0, type: "headline"});
    }
}

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({id: uuid.v4(), content: content, children: 0, type: "lead"});
    }
}

dnpMDTreeListener.prototype.enterBody = function() {
    this.documentElements.bodyElements = [];
};

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    var children = [];

    ctx.children.forEach(function(child) {
        if (child.ITALIC != undefined) {
            // Uhm, yes... this needs an update (or better: a fix within the language dnpMD).
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

            children.push({content: content.replace(/{##/g,'').replace(/##}/g,''), type: "labelRef"});
        } else {
            var text = child.getText();
            var content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content, type: "text"});
        }
    });

    this.documentElements.bodyElements.push({id: uuid.v4(), children: children, type: "paragraph"});
};

dnpMDTreeListener.prototype.exitSubheading = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.bodyElements.push({id: uuid.v4(), content: content, children: 0, type: "subheading"})
    }
};

dnpMDTreeListener.prototype.exitListing = function(ctx) {
    var elements = {};
    var externalListing = false;

    ctx.children.forEach(function(child) {
        if (child.LABEL != undefined) {
            elements.label = {id: uuid.v4(), content: child.getText().replace(/{#/g,'').replace(/#}/g,''), type: "label"};

        } else if (child.CAPTION != undefined) {
            elements.caption = {id: uuid.v4(), content: child.getText().replace(/#####/g,''), type: "caption"};

        } else if (child.ELEMENTPATH != undefined) {
            externalListing = true;

            elements.path = {id: uuid.v4(),
                content: child.getText().replace(/\[\[\[\[\[/g,'').replace(/]]]]]/g,''), type: "path"};

        } else if (child.LABEL == undefined && child.CAPTION == undefined && child.ELEMENTPATH == undefined
            && child.NL == undefined) {
            var text = child.getText().replace(/~~~~~/g,'').trim();

            elements.source = {id: uuid.v4(), content: text, type: "source"};
        }
    });

    this.listingCount++;

    var listing = {id: uuid.v4(), elements: elements, external: externalListing, number: this.listingCount,
        type: "listing"};

    if (listing.elements.label != undefined) {
        this.labels.listings[listing.elements.label.content]
            = {id: listing.id, number: this.listingCount, label: listing.elements.label.content};
    }

    if (listing.external) {
        var data = fs.readFileSync(listing.elements.path.content);
        var lines = data.toString().split('\n');

        if (lines.length > 5) {
            lines = lines.slice(0,5);

            lines.push("");
            lines.push("...");
        }

        listing.elements.source.content = lines.join("\n").toString();
    }

    this.listings.push(listing);

    this.documentElements.bodyElements.push(listing);
};

dnpMDTreeListener.prototype.exitImage = function(ctx) {
    var elements = {};

    ctx.children.forEach(function(child) {
        if (child.LABEL != undefined) {
            elements.label = {id: uuid.v4(), content: child.getText().replace(/{#/g,'').replace(/#}/g,''), type: "label"};

        } else if (child.ELEMENTPATH != undefined) {
            elements.path = {id: uuid.v4(),
                content: child.getText().replace(/\[\[\[\[\[/g,'').replace(/]]]]]/g,''), type: "path"};

        } else if (child.CAPTION != undefined) {
            elements.caption = {id: uuid.v4(), content: child.getText().replace(/#####/g,''), type: "caption"};

        }
    });

    this.imageCount++;

    var image = {id: uuid.v4(), elements: elements, number: this.imageCount, type: "image"};

    if (image.elements.label != undefined) {
        this.labels.images[image.elements.label.content]
            = {id: image.id, number: this.imageCount, label: image.elements.label.content};
    }

    this.images.push(image);

    this.documentElements.bodyElements.push(image);
};

module.exports.dnpMDTreeListener = dnpMDTreeListener;
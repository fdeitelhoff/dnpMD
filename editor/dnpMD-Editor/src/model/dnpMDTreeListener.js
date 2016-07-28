var DnpMDParserListener = require('./dnpMD/dnpMDParserListener.js').dnpMDParserListener;
var uuid = require('node-uuid');
var fs = require("fs");

var dnpMDTreeListener = function() {
    DnpMDParserListener.call(this);

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

dnpMDTreeListener.prototype = Object.create(DnpMDParserListener.prototype);
dnpMDTreeListener.prototype.constructor = dnpMDTreeListener;

dnpMDTreeListener.prototype.enterDnpMD = function() {
    this.documentElements = {};
    this.documentElements.headElements = [];
    this.documentElements.bodyElements = [];
    this.documentElements.tailElements = [];

    this.listings = [];
    this.images = [];
    this.literature = [];

    this.listingCount = 0;
    this.imageCount = 0;
    this.literatureCount = 0;

    this.labels = {};
    this.labels.listings = {};
    this.labels.images = {};
    this.labels.literature = {};
};

dnpMDTreeListener.prototype.exitDnpMD = function() {
    this.processCompleted(this.documentElements);
};

dnpMDTreeListener.prototype.exitSubheadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({id: uuid.v4(), content: content.replace(/##/g,''),
            children: {}, type: "subheadline"});
    }
};

dnpMDTreeListener.prototype.exitHeadline = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({id: uuid.v4(),
            content: content.replace(/\\#/g,'~~~~~').replace(/#/g,'').replace(/~~~~~/g,'#'),
            children: {}, type: "headline"});
    }
};

dnpMDTreeListener.prototype.exitLead = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.headElements.push({id: uuid.v4(), content: content.replace(/###/g,''),
            children: {}, type: "lead"});
    }
};

dnpMDTreeListener.prototype.exitParagraph = function(ctx) {
    var children = [];

    ctx.children.forEach(function(child) {
        var content = "";
        var text = "";

        if (child.ITALIC != undefined) {
            // Uhm, yes... this needs an update (or better: a fix within the language dnpMD).
            text = child.ITALIC().getText().replace('*', '');
            text = text.split('').reverse().join('').replace('*', '').split('').reverse().join('');
            content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content, type: "italic"});
        } else if (child.LABELREF != undefined) {
            text = child.LABELREF().getText();
            content = "";

            if (text != "" && text != "<missing null>") {
                content = text;
            }

            children.push({content: content.replace(/{##/g,'').replace(/##}/g,''), type: "labelRef"});
        } else {
            text = child.getText();
            content = "";

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
        this.documentElements.bodyElements.push({id: uuid.v4(), content: content.replace(/####/g,''),
            children: {}, type: "subheading"})
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

dnpMDTreeListener.prototype.exitAuthorBio = function(ctx) {
    var content = this.getText(ctx);

    if (content != "") {
        this.documentElements.tailElements.push({id: uuid.v4(), content: content.replace(/# Kurzbio #/g,'').trim(),
            children: {}, type: "authorBio"})
    }
};

dnpMDTreeListener.prototype.exitLiteratureEntry = function(ctx) {
    var labelContent = ctx.children[0].getText();
    var literatureContent = ctx.children[1].getText();

    labelContent = labelContent.replace(/{#/g,'').replace(/#}/g,'');
    literatureContent = literatureContent.replace(/\[/g,'').replace(/]/g,'')

    var literatureContents = literatureContent.split("|");

    this.literatureCount++;

    var elements = {};
    elements.label = {id: uuid.v4(), number: this.literatureCount, label: labelContent};

    this.labels.literature[labelContent] = elements.label;

    elements.content = {id: uuid.v4(), description: literatureContents[0], source: literatureContents[1]};

    var literature = {id: uuid.v4(), number: this.literatureCount, elements: elements, type: "literature"};

    this.literature.push(literature);

    this.documentElements.tailElements.push(literature);
};

module.exports.dnpMDTreeListener = dnpMDTreeListener;
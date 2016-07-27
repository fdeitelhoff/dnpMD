var dnpMDToHTML = function() {

    this.labels = {};

    this.renderedDocument = [];

    return this;
};

dnpMDToHTML.prototype.constructor = dnpMDToHTML;

dnpMDToHTML.prototype.transform = function(documentOutline, labels) {
    this.labels = labels;

    var self = this;

    this.renderedDocument.headElements = [];
    this.renderedDocument.bodyElements = [];
    this.renderedDocument.tailElements = [];

    documentOutline.headElements.forEach(function(element) {
        var html = "";

        if (element.type == "subheadline") {
            html = "<h3 class='subheadline'>" + element.content + "</h3>";
        } else if (element.type == "headline") {
            html = "<h1 class='headline'>" + element.content + "</h1>";
        } else if (element.type == "lead") {
            html = "<h2 class='lead'>" + element.content + "</h2>";
        }

        self.renderedDocument.headElements.push({id: element.id, content: html});
    });

    documentOutline.bodyElements.forEach(function(element) {
        var html = "";

        if (element.type == "subheading") {
            html = "<h4 class='subheading'>" + element.content + "</h4>";

        } else if (element.type == "paragraph") {
            html = "<p class='paragraph'>";

            element.children.forEach(function (child) {
                if (child.type == "text") {
                    html += child.content;

                } else if (child.type == "italic") {
                    html += "<i>" + child.content + "</i>";

                } else if (child.type == "labelRef") {
                    var listingRef = self.labels.listings[child.content];
                    var imageRef = self.labels.images[child.content];

                    if (listingRef != undefined) {
                        html += "<span class='listing-ref'>" + listingRef.number + "</span>";

                    } else if (imageRef != undefined) {
                        html += "<span class='image-ref'>" + imageRef.number + "</span>";

                    } else {
                        html += "<span class='missing-ref'>[? " + child.content + " ?]</span>";
                    }
                }
            });

            html += "</p>";

        } else if (element.type == "listing") {
            var number = "";

            if (element.elements.label != undefined) {
                var label = self.labels.listings[element.elements.label.content];
                number = "Listing: " + label.number;
            }

            html = "<div class='listing'>";

            html += "<pre class='listing-content'>";

            html += element.elements.source.content;

            html += "</pre>";

            if (element.elements.caption != undefined) {
                html += "<h5 class='listing-caption'>" + number + element.elements.caption.content + "</h5>";
            }

            html += "</div>";

        } else if (element.type == "image") {
            var number = "";

            if (element.elements.label != undefined) {
                var label = self.labels.images[element.elements.label.content];
                number = "Abbildung: " + label.number;
            }

            html = "<div class='image'>";

            if (element.elements.path != undefined) {
                html += "<img src=" + element.elements.path.content + " />";
            }

            if (element.elements.caption != undefined) {
                html += "<h5 class='image-caption'>" + number + element.elements.caption.content + "</h5>";
            }

            html += "</div>";
        }

        self.renderedDocument.bodyElements.push({id: element.id, content: html});
    });
};

module.exports.dnpMDToHTML = dnpMDToHTML;
var dnpMDToHTML = function() {

    this.renderedDocument = [];

    return this;
};

dnpMDToHTML.prototype.constructor = dnpMDToHTML;

dnpMDToHTML.prototype.transform = function(documentOutline) {

    var self = this;

    this.renderedDocument.headElements = [];
    this.renderedDocument.bodyElements = [];
    this.renderedDocument.tailElements = [];

    documentOutline.headElements.forEach(function(element) {
        var html = "";

        if (element.type == "subheadline") {
            html = "<h3 class=\"subheadline\">" + element.content + "</h3>";
        } else if (element.type == "headline") {
            html = "<h1 class=\"headline\">" + element.content + "</h1>";
        } else if (element.type == "lead") {
            html = "<h3 class=\"lead\">" + element.content + "</h3>";
        }

        self.renderedDocument.headElements.push(html);
    });

    documentOutline.bodyElements.forEach(function(element) {
        var html = "";

        if (element.type == "subheading") {
            html = "<h4 class=\"subheading\">" + element.content + "</h4>";
        } else if (element.type == "paragraph") {
            var html = "<p>";

            element.children.forEach(function (child) {
                if (child.type == "text") {
                    html += child.content;
                } else if (child.type == "italic") {
                    html += "<i>" + child.content + "</i>";
                }
            });

            html += "</p>";
        }

        self.renderedDocument.bodyElements.push(html);
    });
};

module.exports.dnpMDToHTML = dnpMDToHTML;
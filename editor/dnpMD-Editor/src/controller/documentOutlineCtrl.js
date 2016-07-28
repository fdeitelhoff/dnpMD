app.controller('DocumentOutlineCtrl', function($scope, dnpMDService) {

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function () {
        var outline = [];

        outline  = outline.concat(dnpMDService.documentOutline.headElements);

        dnpMDService.documentOutline.bodyElements.forEach(function(element) {
            var content = "";

            if (element.type == "paragraph") {
                element.children.forEach(function (child) {
                    content += child.content;
                });

                outline.push({id: element.id, content: content, type: element.type});

            } else if (element.type == "listing") {
                if (element.elements.caption != undefined) {
                    content = element.elements.caption.content;
                }

                outline.push({id: element.id, content: content, type: element.type});

            } else {
                outline.push({id: element.id, content: element.content, type: element.type});

            }
        });

        $scope.documentOutline = outline;
    });
});
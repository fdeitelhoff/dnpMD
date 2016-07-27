app.controller('ListingsOutlineCtrl', function($scope, dnpMDService) {

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function () {
        /*$outline = [];

        // Maybe into another js file?
        // Maybe those arrays are mergable?
        dnpMDService.documentOutline.headElements.forEach(function(element) {
            $outline.push({id: element.id, content: element.content, type: element.type});
        });

        dnpMDService.documentOutline.bodyElements.forEach(function(element) {
            if (element.type == "paragraph") {
                var content = "";

                element.children.forEach(function (child) {
                    content += child.content;
                });

                $outline.push({id: element.id, content: (content.length > 20) ? content.substr(0,20-1)+'&hellip;' : content, type: element.type});
            } else if (element.type == "listing") {
                $outline.push({id: element.id, content: element.elements.caption.content, type: element.type});
            } else {
                $outline.push({id: element.id, content: element.content, type: element.type});
            }
        });*/

        $scope.listingsOutline = dnpMDService.listings;
    });
});
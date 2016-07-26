app.controller('DocumentOutlineCtrl', function($scope, dnpMDService) {

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function (event) {
        $outline = [];

        // Maybe into another js file?
        // Maybe those arrays are mergable?
        dnpMDService.documentOutline.headElements.forEach(function(element) {
            $outline.push({content: element.content, type: element.type});
        });

        dnpMDService.documentOutline.bodyElements.forEach(function(element) {
            if (element.type == "paragraph") {
                var content = "";

                element.children.forEach(function (child) {
                    content += child.content;
                });

                $outline.push({content: (content.length > 20) ? content.substr(0,20-1)+'&hellip;' : content, type: element.type});
            } else {
                $outline.push({content: element.content, type: element.type});
            }
        });

        $scope.documentOutline = $outline;
    });

    $scope.searchOutline = function(element) {
        return element.content.indexOf($scope.search) != -1 || element.type.indexOf($scope.search) != -1;
    };
});
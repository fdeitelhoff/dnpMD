app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {

    $scope.documentRenderTemplate = "app/data/templates/document-render-template.html";

    dnpMDService.parsingCompleted = function() {
        $scope.documentRendered = dnpMDService.renderedDocument;
    }
});
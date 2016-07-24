app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {
    $scope.documentRenderTemplate = "app/data/templates/document-render-template.html";

    //var documentRendered = {};

    dnpMDService.parsingCompleted = function(document) {
        //console.log("Aus render ctrl: " + document); //dnpMDService.render);
        //documentRendered = document;

        $scope.documentRendered = document;
    }
});
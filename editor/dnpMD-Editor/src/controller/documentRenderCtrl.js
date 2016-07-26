app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {

    var dnpMDToHTML = require('./app/model/dnpMDToHTML.js');
    var transformToHTML = new dnpMDToHTML.dnpMDToHTML();

    $scope.documentRenderTemplate = "app/data/templates/document-render-template.html";

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function (event) {
        transformToHTML.transform(dnpMDService.documentOutline);

        $scope.documentRendered = transformToHTML.renderedDocument;
    });
});
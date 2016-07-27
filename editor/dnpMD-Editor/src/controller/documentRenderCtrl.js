app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {

    // Maybe move to the dnpMDService?
    var dnpMDToHTML = require('./app/model/dnpMDToHTML.js');
    var transformToHTML = new dnpMDToHTML.dnpMDToHTML();

    $scope.documentRenderTemplate = "app/data/templates/document-render-template.html";

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function (event) {
        transformToHTML.transform(dnpMDService.documentOutline, dnpMDService.labels);

        $scope.documentRendered = transformToHTML.renderedDocument;
    });
});
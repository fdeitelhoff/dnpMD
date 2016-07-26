app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {

    var dnpMDToHTML = require('./app/model/dnpMDToHTML.js');
    var transformToHTML = new dnpMDToHTML.dnpMDToHTML();

    $scope.documentRenderTemplate = "app/data/templates/document-render-template.html";

    dnpMDService.outlineCompleted = function() {
        transformToHTML.transform(dnpMDService.documentOutline);

        $scope.documentRendered = transformToHTML.renderedDocument;
    }
});
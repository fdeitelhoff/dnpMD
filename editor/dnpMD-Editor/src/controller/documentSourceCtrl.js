app.controller('DocumentSourceCtrl', function($scope, documentService) {

    $scope.documentChanged = function () {
        documentService.setTest($scope.documentSource);
    };

});
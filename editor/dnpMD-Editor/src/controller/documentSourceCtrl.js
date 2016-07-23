app.controller('DocumentSourceCtrl', function($scope, dnpMDService) {

    $scope.documentChanged = function () {
        dnpMDService.setTest($scope.documentSource);
    };

});
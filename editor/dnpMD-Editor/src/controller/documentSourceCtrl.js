app.controller('DocumentSourceCtrl', function($scope, dnpMDService) {

    // Every time when the document input is changed. Maybe on save/after some seconds?
    $scope.documentChanged = function () {
        dnpMDService.parseDocument($scope.documentSource);
    };

});
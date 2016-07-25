app.controller('ErrorCtrl', function($scope, dnpMDService) {

    dnpMDService.documentErrors = function() {
        $scope.errors = dnpMDService.errors;
    }
});
app.controller('ListingsOutlineCtrl', function($scope, dnpMDService) {

    // Just a test. Not sure if this is a valid way...
    $scope.$on('outlineCompleted', function () {
        $scope.listingsOutline = dnpMDService.listings;
    });
});
app.controller('DocumentRenderCtrl', function($scope, dnpMDService) {
    dnpMDService.documentChanged = function() {
        $scope.test = dnpMDService.render.subheadline;
        console.log("Aus render ctrl: " + dnpMDService.render);
    }
});
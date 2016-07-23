app.controller('DocumentRenderCtrl', function($scope, documentService) {
    documentService.documentChanged = function() {
        $scope.test = documentService.test;
        console.log("Aus render ctrl: " + documentService.test);
    }
});
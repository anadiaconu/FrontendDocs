var hrApp = angular.module('hrApp');
hrApp.controller('DescriptionController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.title = "Two Way Binding Demo";
    $scope.childtemplate = 'templates/childscope.html';
    //$scope.descriptionShow = true;
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function () {
        if ($scope.descriptionShow === true)
            $scope.descriptionShow = false;
        else $scope.descriptionShow = true;

    };
}]);

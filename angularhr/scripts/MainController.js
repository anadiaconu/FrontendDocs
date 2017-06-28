var hrApp = angular.module('hrApp');
hrApp.controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.name="Teamnet";
    console.log($scope.name);
}]);

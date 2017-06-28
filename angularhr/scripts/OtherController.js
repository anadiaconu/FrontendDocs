var hrApp = angular.module('hrApp');
hrApp.controller('OtherController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.setTitle = function(){
        $scope.title="Titlu";
    };


}]);
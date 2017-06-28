var hrApp = angular.module('hrApp');
hrApp.controller('CalcController', ['$rootScope', '$scope', function($rootScope, $scope) {
       $scope.calculate = function(){
        $scope.add=$scope.a+$scope.b;
        $scope.sub=$scope.a-$scope.b;
        $scope.mult=$scope.a*$scope.b;
        $scope.div=$scope.a/$scope.b;
    };


}]);
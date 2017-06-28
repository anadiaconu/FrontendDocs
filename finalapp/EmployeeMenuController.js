var hrApp = angular.module('hrApp',[]);
hrApp.controller('EmployeeMenuController', ['$scope', function($scope){
    $scope.demoActionList=[
        {
            label: "Adam",
            url: " "
        },
        {
            label: "Eva",
            url: " "
        },
        {
            label: "Abel",
            url: " "
        },
        {
            label: "Caim",
            url: " "
        }
    ];


}]);
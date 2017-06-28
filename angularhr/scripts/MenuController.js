hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList=[
        {
            label: "Calculator",
            url: "demomath.html"
        },
        {
            label: "Shopping!",
            url: "shoppingcart.html"
        }
    ];


}]);
var hrApp = angular.module('hrApp');
hrApp.controller('ShoppingController', ['$scope', function($scope){
    $scope.imagesShopping=[
        {
            label: "pizza",
            url: "imgs/food1.jpg",
            price: "23 lei"
        },
        {
            label: "chicken",
            url: "imgs/food2.jpg",
            price: "30 lei"
        },
        {
            label: "frigarui",
            url: "imgs/food3.jpg",
            price: "45 lei"
        },
        {
            label: "hamburger",
            url: "imgs/food4.jpg",
            price: "38 lei"
        }
    ];


}]);
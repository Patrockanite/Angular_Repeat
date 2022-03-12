(function(){
'use strict';
var shoppingListe1 = ['Milk','Donuts','Cookies','Chocolate','Peanut Butter','Pepto Bismol','Pepto Bismol (Chocolate flavor)','Pepto Bismol (Cookie flavor)'];
var shoppingListe2 = [
    {name:"Milk",quantity:"2"},
    {name:"Donuts",quantity:"200"},
    {name:"Cookies",quantity:"300"},
    {name:"Chocolate",quantity:"5"}
];
    angular.module('RepeatModule',[])
        .controller('RepeatController',RepeatController);
    RepeatController.$inject=['$scope'];
   
    function RepeatController($scope){
        $scope.shoppingListe1 = shoppingListe1;
        $scope.shoppingListe2 = shoppingListe2;
        $scope.addToList = function(){
            var newItem={
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };
            $scope.shoppingListe2.push(newItem);
        };









    }




})();
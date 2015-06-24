

var mainApp = angular.module("mainApp", []); 
      mainApp.factory('MathService', function() {      
         var factory = {};   
         factory.multiply = function(a, b) { 
            return a * b;
         }
      return factory; 
   });
      
mainApp.controller ('MainController', function($scope, MathService){
	$scope.name="GUILLERMO";
	console.log(MathService.multiply(3, 6));
})






(function (){
  'use strict';
  var x = "hello";

angular.module('miprimerapp',[])


.controller('miprimercontrolador', function($scope){
  $scope.name = "John Bayron";
  $scope.dihola = function (){
    return "Hola Coursera!";
  }
});

})();

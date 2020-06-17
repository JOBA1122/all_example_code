//Se crea una IIFE que se autoejecuta
(function () {
  'use strict'


// se declara el modula de la aplicacion
  angular.module('CalculadorDeNombre',[])
// Se declara el controlador de esa aplicacion
  .controller('ControladorCalNombre', function ($scope) {
    $scope.nombre = "";
    $scope.valortotal = 0;

    $scope.MostrarNumero = function() {
      var valortotal_dentro = CalcularNumeroAString($scope.nombre); // toma el valor valototalnombre

      $scope.valortotal = valortotal_dentro;
      };

    function CalcularNumeroAString(string) {
      var totalstringvalue = 0;
      for (var i = 0; i < string.length; i++) {
        totalstringvalue += string.charCodeAt(i);
      }
      return totalstringvalue;
    }

});

})();

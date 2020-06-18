(function () {

  'use strict'

  angular.module('DI_App',[])

  .controller('DI_controlador', DI_controlador);

  function DI_controlador ($scope,
                           $filter,
                           $injector){//scope y filter son servicion de angular
    $scope.nombre = "John Bayron";
    $scope.convertir_mayus = function () {
      var mayuscula = $filter('uppercase');
      $scope.nombre = mayuscula($scope.nombre);
    }

    console.log($injector.annotate(DI_controlador));

  }


})();

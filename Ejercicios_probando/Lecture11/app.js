(function () {

  'used strict'

  angular.module('msgApp',[])

  .controller('controladorMensaje', controladorMensaje);

  controladorMensaje.$inject = ['$scope'];
  function controladorMensaje($scope){

    $scope.nombre = "JoBa";
    $scope.estadodehambre = "hambriento";
    $scope.diElMensaje = function (){
      return "Al instructor le gusta comer";
    };
    $scope.alimentaInstructor = function (){
      $scope.estadodehambre = "satisfecho";
    };
    $scope.enojado = function (){
      $scope.estadodehambre = "hambriento";
    }
  }
})();

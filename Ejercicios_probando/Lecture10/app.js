(function () {

  'used strict'

  angular.module('msgApp',[])

  .controller('controladorMensaje', controladorMensaje);

  controladorMensaje.$inject = ['$scope'];
  function controladorMensaje($scope){

    $scope.nombre = "JoBa";
    $scope.diElMensaje = function (){
      return "Joba le gusta programar";
    };
  }
})();

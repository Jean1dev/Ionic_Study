angular.module('app.controllers', [])
  
.controller('listaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $rootScope) {
        $scope.listObj = ["teste", "teste2"];
}])
   
    .controller('CadastroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $rootScope, $ionicPopup, $timeout) {
        $scope.obj = {};

        showAlert("teste", "erroMsg");

        function criaObj(){
            console.log(this.$scoope.obj);
            $rootScope.itens = $scope.obj;
        }

        function showAlert(titulo, erroMsg) {
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: erroMsg
            });
            alertPopup.then(function (res) {
                console.log('Err');
            });
        };
}])
   
.controller('semUtilidadeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('listDetalheCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


}]) 
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.lista', {
    url: '/lista',
    views: {
      'tab1': {
        templateUrl: 'templates/lista.html',
        controller: 'listaCtrl'
      }
    }
  })

  .state('tabsController.semUtildade', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/semUtildade.html',
        controller: 'semUtildadeCtrl'
      }
    }
  })

  .state('tabsController.semUtilidade', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/semUtilidade.html',
        controller: 'semUtilidadeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

.state('listaDetalhe', {
          url: '/listaDetalhe.html',
          templateUrl: 'templates/listaDetalhe.html',
          controller: 'listDetalheCtrl'
  })
$urlRouterProvider.otherwise('/page1/lista')


});
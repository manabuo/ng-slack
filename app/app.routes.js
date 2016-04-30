config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         template: '<home></home>'
      });
   $urlRouterProvider.otherwise('/');
}

export default config;
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         template: '<home></home>'
      })
      .state('login', {
         url: '/login',
         templateUrl: 'components/auth/login.html'
      })
      .state('register', {
         url: '/register',
         templateUrl: 'components/auth/register.html'
      });

   $urlRouterProvider.otherwise('/');
}

export default config;
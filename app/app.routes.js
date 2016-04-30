config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'home/home.html'
      })
      .state('login', {
         url: '/login',
         templateUrl: 'auth/login.html'
      })
      .state('register', {
         url: '/register',
         templateUrl: 'auth/register.html'
      });

   $urlRouterProvider.otherwise('/');
}

export default config;
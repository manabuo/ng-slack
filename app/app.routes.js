config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'components/home/home.html'
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
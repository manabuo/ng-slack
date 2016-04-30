config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         template: '<home></home>'
      })
      .state('login', {
         url: '/login',
         template: `<login></login>`
      })
      .state('register', {
         url: '/register',
         templateUrl: 'components/login/register.html'
      });

   $urlRouterProvider.otherwise('/');
}

export default config;
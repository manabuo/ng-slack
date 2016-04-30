config.$inject = ['$stateProvider'];

function config($stateProvider) {
   $stateProvider
      .state('login', {
         url: '/login',
         template: `<login></login>`,
         resolve: {
            currentAuth: ['LoginService', '$state', (LoginService, $state) => {
               // if the user is logged in, redirect to 'home'
               return LoginService.$requireAuth().then(auth => {
                  $state.go('home');
               }, error => error);
            }]
         }
      })
      .state('register', {
         url: '/register',
         template: `<register></register>`,
         resolve: {
            currentAuth: ['LoginService', '$state', (LoginService, $state) => {
               // if the user is logged in, redirect to 'home'
               return LoginService.$requireAuth().then(auth => {
                  $state.go('home');
               }, error => error);
            }]
         }
      });

}

export default config;
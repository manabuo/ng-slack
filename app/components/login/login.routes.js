config.$inject = ['$stateProvider'];

function config($stateProvider) {
   $stateProvider
      .state('login', {
         url: '/login',
         template: `<login></login>`
      })
      .state('register', {
         url: '/register',
         template: `<register></register>`
      });

}

export default config;
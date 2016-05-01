profileRoutes.$inject = ['$stateProvider'];

function profileRoutes($stateProvider) {

   $stateProvider
      .state('profile', {
         url: '/profile',
         controller: ['auth', 'profile', function (auth, profile) {
            let self = this;
            self.auth = auth;
            self.profile = profile;
         }],
         controllerAs: '$ctrl',
         template: '<profile auth="$ctrl.auth" profile="$ctrl.profile"></profile>',
         resolve: {
            auth: ['LoginService', '$state', (LoginService, $state) => {
               return LoginService.$requireAuth().catch((error) => $state.go('home')) ;
            }],
            profile: ['LoginService', 'ProfileService', (LoginService, ProfileService) => {
               return LoginService.$requireAuth().then(auth => {
                  console.log('auth');
                  console.log(auth);
                 return ProfileService.getProfile(auth.uid).$loaded();
               }, error => error);
            }]
         }
      });

}

export default profileRoutes;
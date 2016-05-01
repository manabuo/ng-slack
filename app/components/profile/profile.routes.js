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
            auth: ['AuthService', '$state', (AuthService, $state) => {
               return AuthService.$requireAuth().catch((error) => $state.go('home')) ;
            }],
            profile: ['AuthService', 'ProfileService', (AuthService, ProfileService) => {
               return AuthService.$requireAuth().then(auth => {
                 return ProfileService.getProfile(auth.uid).$loaded();
               }, error => error);
            }]
         }
      });

}

export default profileRoutes;
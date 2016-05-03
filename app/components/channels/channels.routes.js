channelsRoutes.$inject = ['$stateProvider'];

function channelsRoutes($stateProvider) {

   $stateProvider
      .state('channels', {
         url: '/channels',
         template: '<channels></channels>',
         resolve: {
           /* channels: ['Channels', function (Channels) {
               return Channels.$loaded();
            }],*/
            profile: ['$state', 'AuthService', 'ProfileService', ($state, AuthService, ProfileService) => {
               return AuthService.$requireAuth().then((auth) => {
                  return ProfileService.getProfile(auth.uid).$loaded().then((profile) => {
                     if (profile.displayName) {
                        return profile;
                     } else {
                        $state.go('profile');
                     }
                  });
               }, (error) => {
                  $state.go('home');
               });
            }]
         }
      });

}

export default channelsRoutes;
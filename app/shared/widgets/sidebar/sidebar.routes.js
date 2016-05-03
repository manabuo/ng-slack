sidebarRoutes.$inject = ['$stateProvider'];

function sidebarRoutes($stateProvider) {

   $stateProvider
      .state('sidebar', {
         url: '/sidebar',
         template: '<sidebar></sidebar>'
      });

}

export default sidebarRoutes;
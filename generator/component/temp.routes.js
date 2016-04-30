<%= name %>Routes.$inject = ['$stateProvider'];

function <%= name %>Routes($stateProvider) {

   $stateProvider
      .state('<%= name %>', {
         url: '/<%= name %>',
         template: '<<%= name %>></<%= name %>>'
      });

}

export default <%= name %>Routes;
import angular from 'angular';
import <%= name %>Routes from './<%= name %>.routes';
import <%= name %>Component from './<%= name %>.component';
import <%= upCaseName %>Controller from './<%= name %>.controller';

let <%= name %>Module = angular.module('<%= name %>', [])
   .config(<%= name %>Routes)
   .component('<%= name %>', <%= name %>Component)
   .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller);

export default <%= name %>Module;

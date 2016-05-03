import angular from 'angular';
import controllers from './controllers/controllers';
import services from './services/services';

let sharedModule = angular.module('app.shared', [
   controllers.name,
   services.name
]);


export default sharedModule;
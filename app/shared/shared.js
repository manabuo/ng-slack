import angular from 'angular';
import controllers from './controllers/controllers';
import services from './services/services';
import widgets from './widgets/widgets';

let sharedModule = angular.module('app.shared', [
   controllers.name,
   services.name,
   widgets.name
]);


export default sharedModule;
import angular from 'angular';
import services from './services/services';

let sharedModule = angular.module('app.shared', [
   services.name
]);


export default sharedModule;
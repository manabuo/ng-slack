import angular from 'angular';
import home from './home/home';

let componentModule = angular.module('app.components', [
   home.name
]);

export default componentModule;
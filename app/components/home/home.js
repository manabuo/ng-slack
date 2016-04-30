import angular from 'angular';
import homeComponent from './home.component';
import HomeController from './home.controller';

let homeModule = angular.module('app.home', [])
   .component('home', homeComponent)
   .controller('HomeController', HomeController);

export default homeModule;
import angular from 'angular';
import sidebarRoutes from './sidebar.routes.js';
import sidebarComponent from './sidebar.component.js';
import SidebarController from './sidebar.controller.js';

let sidebarModule = angular.module('sidebar', [])
   .config(sidebarRoutes)
   .component('sidebar', sidebarComponent)
   .controller('SidebarController', SidebarController);

export default sidebarModule;

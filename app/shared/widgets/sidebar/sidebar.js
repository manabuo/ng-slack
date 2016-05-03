import angular from 'angular';
import sidebarComponent from './sidebar.component.js';
import SidebarController from './sidebar.controller.js';

let sidebarModule = angular.module('app.shared.widgets.sidebar', [])
   .component('sidebar', sidebarComponent)
   .controller('SidebarController', SidebarController);

export default sidebarModule;

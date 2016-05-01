import angular from 'angular';
import profileRoutes from './profile.routes';
import profileComponent from './profile.component';
import ProfileController from './profile.controller';
import ProfileService from './profile.service';

let profileModule = angular.module('app.components.profile', [])
   .config(profileRoutes)
   .component('profile', profileComponent)
   .controller('ProfileController', ProfileController)
   .service('ProfileService', ProfileService);

export default profileModule;

import angular from 'angular';
import login from './login/login';
import home from './home/home';
import profile from './profile/profile';

let componentModule = angular.module('app.components', [
   login.name,
   home.name,
   profile.name
]);

export default componentModule;
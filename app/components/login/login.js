import angular from 'angular';
import loginComponent from './login.component';
import LoginController from './login.controller';
import LoginService from './login.service';

let loginModule = angular.module('app.login', [])
   .component('login', loginComponent)
   .controller('LoginController', LoginController)
   .service('LoginService', LoginService);

export default loginModule;
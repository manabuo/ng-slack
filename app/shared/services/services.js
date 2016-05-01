import angular from 'angular';

import AuthService from './auth/auth.service';

let servicesModule = angular.module('app.shared.services', [])
   .service('AuthService', AuthService);

export default servicesModule;
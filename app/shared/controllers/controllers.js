import angular from 'angular';

import BaseController from './base/base.controller';

let controllersModule = angular.module('app.shared.controller', [])
   .controller('BaseController', BaseController);

export default controllersModule;
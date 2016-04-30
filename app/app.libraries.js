import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularfire from 'angularfire';
import angularMD5 from 'angular-md5';

let appLibraries = angular.module('app.libraries', [
   ngAnimate,
   uiRouter,
   uiBootstrap,
   angularfire,
   angularMD5
]);

export default appLibraries;
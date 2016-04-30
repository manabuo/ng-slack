'use strict';

import angular from 'angular';
import appRoutes from './app.routes';
import appLibraries from './app.libraries';

angular.module('app', [
      appLibraries.name
   ])
   .config(appRoutes)
   .constant('FIREBASE_URL', 'https://slack.firebaseio.com/');

angular.bootstrap(document, ['app'], {
   strictDi: true
});

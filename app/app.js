import angular from 'angular';
import appRoutes from './app.routes';
import appLibraries from './app.libraries';
import components from './components/components';
import shared from './shared/shared';

angular.module('app', [
      appLibraries.name,
      components.name,
      shared.name
   ])
   .config(appRoutes)
   .constant('FIREBASE_URL', 'https://slack.firebaseio.com/');

angular.bootstrap(document, ['app'], {
   strictDi: true
});

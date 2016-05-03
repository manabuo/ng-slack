import angular from 'angular';

import sidebar from './sidebar/sidebar';

let widgetsModule = angular.module('app.shared.widgets', [
      sidebar.name
   ]);

export default widgetsModule;
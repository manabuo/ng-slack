import <%= name %>Module from './../<%= name %>'
import uiRouter from 'angular-ui-router';

describe('<%= upCaseName %>Controller', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(<%= name %>Module.name));

   let <%= name %>Ctrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      <%= name %>Ctrl = $controller('<%= upCaseName %>Controller', {$scope});
   }));

   it('should have name defined', () => {
      expect(<%= name %>Ctrl.name).toBeDefined();
   });

});


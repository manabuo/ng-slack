import sidebarModule from './../sidebar'
import uiRouter from 'angular-ui-router';

describe('SidebarController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(sidebarModule.name));

   let sidebarCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      sidebarCtrl = $controller('SidebarController', {$scope});
   }));

   it('should have name defined', () => {
      expect(sidebarCtrl.name).toBeDefined();
   });

});


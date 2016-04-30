import loginModule from './home';
import uiRouter from 'angular-ui-router';

describe('Home component', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(loginModule.name));

   let component, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      component = $controller('HomeController', {$scope});
   }));

   it('should have name defined', () => {
      expect(component.name).toBeDefined();
   });

});
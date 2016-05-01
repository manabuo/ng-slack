import profileModule from './../profile'
import uiRouter from 'angular-ui-router';

describe('ProfileController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(profileModule.name));

   let profileCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      profileCtrl = $controller('ProfileController', {$scope});
   }));

   it('should have name defined', () => {
      expect(profileCtrl.name).toBeDefined();
   });

});


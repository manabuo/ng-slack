import channelsModule from './../channels'
import uiRouter from 'angular-ui-router';

describe('ChannelsController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(channelsModule.name));

   let channelsCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      channelsCtrl = $controller('ChannelsController', {$scope});
   }));

   it('should have name defined', () => {
      expect(channelsCtrl.name).toBeDefined();
   });

});


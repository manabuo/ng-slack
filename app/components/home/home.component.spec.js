import homeModule from './home';
import uiRouter from 'angular-ui-router';

describe('Home component', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(homeModule.name));

   let component, $rootScope, $scope, $componentController;

   beforeEach(inject((_$componentController_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $componentController = _$componentController_;
      $scope = $rootScope.$new();
      component = $componentController('home', null);
   }));

   it('should have home component be defined', () => {
      expect(component).toBeDefined();
   });

});
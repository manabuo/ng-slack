let _baseCtrl   = new WeakMap(),
   _AuthService = new WeakMap(),
   _ProfileService = new WeakMap();

class ChannelsController {

   constructor(AuthService, ProfileService, $scope, $controller) {

      let baseCtrl = $controller('BaseController', {$scope});
      _AuthService.set(this, AuthService);
      _ProfileService.set(this, ProfileService);
      _baseCtrl.set(this, baseCtrl);

      console.log('this');
      console.log(this);

   }

   logout() {

      let baseCtrl    = _baseCtrl.get(this),
          AuthService = _AuthService.get(this);

      AuthService.$unauth();
      baseCtrl.goBack('home');

   }

   getGravatar(uid) {
      let ProfileService = _ProfileService.get(this);
      return ProfileService.getGravatar(uid);
   }

}

ChannelsController.$inject = ['AuthService', 'ProfileService', '$scope', '$controller'];

export default ChannelsController;
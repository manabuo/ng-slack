let _baseCtrl    = new WeakMap(),
    _AuthService = new WeakMap();

class LoginController {

   constructor(AuthService, $scope, $controller) {

      let baseCtrl = $controller('BaseController', {$scope});
      _AuthService.set(this, AuthService);
      _baseCtrl.set(this, baseCtrl);

      this.user = {
         email: '',
         password: ''
      };

   }

   login() {

      let baseCtrl    = _baseCtrl.get(this),
          AuthService = _AuthService.get(this);

      AuthService.$authWithPassword(this.user).then(login => {
         baseCtrl.goBack('home');
      }, error => this.error = error);

   }

   register() {

      let AuthService = _AuthService.get(this);

      AuthService.$createUser(this.user).then(user => {
         console.log('user');
         console.log(user);
         this.login();
      }, error => this.error = error);

   }

   goBack() {
      let baseCtrl = _baseCtrl.get(this);
      baseCtrl.goBack('home');
   }

}

LoginController.$inject = ['AuthService', '$scope', '$controller'];

export default LoginController;
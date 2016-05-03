let _baseCtrl    = new WeakMap();

class LoginController {

   constructor(AuthService, $scope, $controller) {
      let baseCtrl = $controller('BaseController', {$scope});
      this.AuthService = AuthService;
      _baseCtrl.set(this, baseCtrl);

      this.user = {
         email: '',
         password: ''
      };

   }

   login() {
      let baseCtrl = _baseCtrl.get(this);
      this.AuthService.$authWithPassword(this.user).then(login => {
         baseCtrl.goBack('home');
      }, error => this.error = error);
   }

   register() {
      this.AuthService.$createUser(this.user).then(user => {
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
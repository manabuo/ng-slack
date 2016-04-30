class LoginController {

   constructor(LoginService, $state) {

      this.LoginService = LoginService;
      this.$state = $state;

      this.user = {
         email: '',
         password: ''
      };

   }

   login() {
      this.LoginService.$loginWithPassword(this.user).then(login => {
         this.$state.go('home');
      }, error => this.error = error);
   }

   register() {
      this.LoginService.$createUser(this.user).then(user => {
         this.login();
      }, error => this.error = error);
   }

}

LoginController.$inject = ['LoginService', '$state'];

export default LoginController;


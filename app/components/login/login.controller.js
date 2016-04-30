class LoginController {

   constructor(LoginService, $state) {
      console.log('LoginService');
      console.dir(LoginService);
      this.LoginService = LoginService;
      this.$state = $state;

      this.user = {
         email: '',
         password: ''
      };

   }

   login() {
      this.LoginService.$authWithPassword(this.user).then(login => {
         this.$state.go('home');
      }, error => this.error = error);
   }

   register() {
      this.LoginService.$createUser(this.user).then(user => {
         console.log('user');
         console.log(user);
         this.login();
      }, error => this.error = error);
   }

}

LoginController.$inject = ['LoginService', '$state'];

export default LoginController;


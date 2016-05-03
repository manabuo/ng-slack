class LoginController {

   constructor(AuthService, $state) {
      console.log('AuthService');
      console.dir(AuthService);
      this.AuthService = AuthService;
      this.$state = $state;

      this.user = {
         email: '',
         password: ''
      };

   }

   login() {
      this.AuthService.$authWithPassword(this.user).then(login => {
         this.$state.go('home');
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
      this.$state.go('home');
   }

}

LoginController.$inject = ['AuthService', '$state'];

export default LoginController;


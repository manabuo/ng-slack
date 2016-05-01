class ProfileController {

   constructor(ProfileService, $state, md5) {
      this.name = 'profile';
      this.md5 = md5;
      console.log('this');
      console.log(this);
   }

   updateProfile() {
      this.profile.emailHash = this.md5.createHash(this.auth.password.email);
      this.profile.$save();
   }

}

ProfileController.$inject = ['ProfileService', '$state', 'md5'];

export default ProfileController;
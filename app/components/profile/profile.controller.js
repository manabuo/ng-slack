class ProfileController {

   constructor(ProfileService, $state, md5) {
      this.name = 'profile';


   }

   updateProfile() {

   }

}

ProfileController.$inject = ['ProfileService', '$state', 'md5'];

export default ProfileController;
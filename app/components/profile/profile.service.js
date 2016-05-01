import Firebase from 'firebase';

let _$firebaseObject = new WeakMap();

class ProfileService {

   constructor($q, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL) {

      _$firebaseObject.set(this, $firebaseObject);
      this.usersRef = new Firebase(FIREBASE_URL + 'users');
      this.users    = $firebaseArray(this.usersRef);

   }

   getProfile(uid) {
      let $firebaseObject = _$firebaseObject.get(this);
      return $firebaseObject(this.usersRef.child(uid));
   }

   getDisplayName(uid) {
      return this.users.$getRecord(uid).displayName;
   }

   getGravatar(uid) {
      return 'http://www.gravatar.com/avatar' + this.users.$getRecord(uid).emailHash;
   }

   users() {
      return this.users;
   }

}

ProfileService.$inject = ['$q', '$firebaseAuth', '$firebaseArray', '$firebaseObject', 'FIREBASE_URL'];

export default ProfileService;
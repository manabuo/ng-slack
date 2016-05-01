import Firebase from 'firebase';

let _$firebaseObject = new WeakMap();
let _usersRef = new WeakMap();

class ProfileService {

   constructor($q, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL) {

      _$firebaseObject.set(this, $firebaseObject);
      _usersRef.set(this, new Firebase(FIREBASE_URL + 'users'));
      this.users    = $firebaseArray(_usersRef.get(this));

   }

   getProfile(uid) {
      let $firebaseObject = _$firebaseObject.get(this);
      let usersRef = _usersRef.get(this);
      return $firebaseObject(usersRef.child(uid));
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
class AuthService {

   constructor($q, $firebaseAuth, FIREBASE_URL) {

      let ref = new Firebase(FIREBASE_URL);

      return $firebaseAuth(ref);

   }

}

AuthService.$inject = ['$q', '$firebaseAuth', 'FIREBASE_URL'];

export default AuthService;
import Firebase from 'firebase';

class LoginService {

   constructor($q, $firebaseAuth, FIREBASE_URL) {

      let ref = new Firebase(FIREBASE_URL);

      return $firebaseAuth(ref);

   }

}

LoginService.$inject = ['$q', '$firebaseAuth', 'FIREBASE_URL'];

export default LoginService;
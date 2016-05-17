import Firebase from 'firebase';

class ChannelsService {

   constructor($firebaseArray, FIREBASE_URL) {
      let ref = new Firebase(`${FIREBASE_URL}/channels`);
      return $firebaseArray(ref);
   }

}

ChannelsService.$inject = ['$firebaseArray', 'FIREBASE_URL'];
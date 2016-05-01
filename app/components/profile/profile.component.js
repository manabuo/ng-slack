import template from './profile.html';
import './profile.styl';

let profileComponent =  {
   template,
   controller: 'ProfileController',
   bindings: {
      auth: '<',
      profile: '<'
   }
};

export default profileComponent;

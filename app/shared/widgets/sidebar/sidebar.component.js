import template from './sidebar.html';
import './sidebar.styl';

let sidebarComponent =  {
   template,
   controller: 'SidebarController',
   bindings: {
      displayName: '<',
      logout: '&',
      editProfile: '&'
   }
};

export default sidebarComponent;

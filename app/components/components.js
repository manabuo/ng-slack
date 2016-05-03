import angular from 'angular';
import login from './login/login';
import home from './home/home';
import profile from './profile/profile';
import channels from './channels/channels';

let componentModule = angular.module('app.components', [
   login.name,
   home.name,
   profile.name,
   channels.name
]);

export default componentModule;
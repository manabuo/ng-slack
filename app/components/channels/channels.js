import angular from 'angular';
import channelsRoutes from './channels.routes';
import channelsComponent from './channels.component';
import ChannelsController from './channels.controller';

let channelsModule = angular.module('channels', [])
   .config(channelsRoutes)
   .component('channels', channelsComponent)
   .controller('ChannelsController', ChannelsController);

export default channelsModule;

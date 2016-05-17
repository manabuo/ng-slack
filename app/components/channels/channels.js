import angular from 'angular';
import channelsRoutes from './channels.routes';
import channelsComponent from './channels.component';
import ChannelsController from './channels.controller';
import ChannelsService from './channels.service';

let channelsModule = angular.module('channels', [])
   .config(channelsRoutes)
   .component('channels', channelsComponent)
   .controller('ChannelsController', ChannelsController)
   .service('ChannelsService', ChannelsService);

export default channelsModule;

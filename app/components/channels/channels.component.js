import template from './channels.html';
import './channels.styl';

let channelsComponent =  {
   template,
   controller: 'ChannelsController',
   bindings: {
      profile: '<'
   }
};

export default channelsComponent;

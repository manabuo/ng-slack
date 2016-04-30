import template from './<%= name %>.html';
import './<%= name %>.styl';

let <%= name %>Component =  {
   template,
   controller: '<%= upCaseName %>Controller',
   bindings: {}
};

export default <%= name %>Component;

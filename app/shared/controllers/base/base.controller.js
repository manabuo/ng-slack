let _$state = new WeakMap();

class BaseController {

   constructor($state) {
      _$state.set(this, $state);
   }

   goBack(state = '^') {
      let $state = _$state.get(this);
      $state.go(state);
   }

}

BaseController.$inject = ['$state'];

export default BaseController;
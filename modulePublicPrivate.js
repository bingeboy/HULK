"use strict"; // TODO wrap properly.
var functionUtils = (function(){
  /* private `slice` method */
  function slice(arrayLike, index) {
    return Array.prototype.slice.call(arrayLike, index || 0);
  }
  return {
    /* exposed, public `bind` method */
    bind: function(fn, thisArg) {
       var args = slice(arguments, 2);
       return function() {
         return fn.apply(thisArg, args.concat(slice(arguments)));
       };
    }
  };
})();

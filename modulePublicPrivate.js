(function(){
	"use strict";
	var functionUtils = (function(){
	  //Private
	  function _slice(arrayLike, index) {
	    return Array.prototype.slice.call(arrayLike, index || 0);
	  }

	  return {
	    //Public
	    bind: function(fn, thisArg) {
	       var args = _slice(arguments, 2);
	       return function() {
	          return fn.apply(thisArg, args.concat(slice(arguments)));
	       };
	    }
	  };
	})();	
})();


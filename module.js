(function () {
    "use strict";

	var module = (function () {
	    // private variables and functions
	    var foo = 'bar';

	    // constructor
	    var module = function () {
	    };

	    // prototype
	    module.prototype = {
	        constructor: module,
	        something: function () {
	        }
	    };

	    // return module
	    return module;
	})();
	
	var use_module = new module();
	// type 2

    var widgetHandler,
    widget = {

        settings: {
            item: "module setting called"
        },

        init: function() {
            widgetHandler = this.settings;
            this.bindUIActions();
        },

        bindUIActions: function() {
            widgetHandler.addEventListener("click", widget.action1, false);
        },

        action1: function(itemToGet) {
            // $.ajax or something
            // using settings item
            console.log(itemToGet);
        }

    };

}());

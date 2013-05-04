/**
 * User: pizza
 * Date: 5/4/13
 * Time: 12:28 AM
 */

( function () {
    "use strict";
    var Core = ( function() {
        var moduleData = {}, // all modules will be stored
            to_string = function (anything){ //turn anything into a string
                return Object.prototype.toString(anything);
            },
            // keep in debug mode until prod push
            debug = true;
        };
    //public this should only pass to sandbox.js
    return {
        debug : function(on) {
            debug = on ? true : false;
        },
        createModule : function (moduleID, creator){ //ID and function
          if(typeof moduleID === "string" && typeof creator === "function"){
              //verify everything is set for a module
                  temp = null;
                  moduleData[moduleID]
          }
        },
    }
}());
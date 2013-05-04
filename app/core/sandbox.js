/**
 * User: pizza
 * Date: 5/3/13
 * Time: 11:55 PM
 */

(function () {
    "use strict";

    var sandbox = (function () {
        create: function(core, moduleSelector) {
            var CONTAINER  = core.dom.query("#" + moduleSelector); //looks or the module name which in turn looks for the id of the view.
        }
        //all methods that are used between sandbox and modules.
        return{
            query : function(selector) {
                return CONTAINER.query(selector);
            },
            addEvent : function (scope, eventType, callback){
                 core.dom.bind();
            },
            removeEvent : function (scope, eventType, callback){
                core.dom.unbind();
            },
            notify : function() {
                if(core.is_obj(event)){
                    core.triggerEvent(event, moduleSelector);
                }
            },
            listen : function() {
                if(cor.is_arr)
                 core.registerEvents(event, moduleSelector)
            }
        }
    }());

}());

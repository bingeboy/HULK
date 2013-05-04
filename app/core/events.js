(function(){
    "use strict";
    var doc = document, //faster
    var eventHandler = function(event){
        var target = eventUtility.getTarget(event),
            classData  = target.getAttribute("data-attr-class");

        if(classData) {
            eventUtility.preventDefault();

            // these should be part of the object passed in and more abstracted for modules and their events.
            if(event.type === "click"){
                //do click
            }else if(event.type === "mouseover"){
                //etc
            }else{
                console.log("event.type: ", event.type);
            }

        }

    };

    //event delegators
    eventUtility.getTarget(document, "click", eventHandler); //scope, event.type, callback
    eventUtility.getTarget(document, "mouseover", eventHandler); //scope, event.type, callback


})();
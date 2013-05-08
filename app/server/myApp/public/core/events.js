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

// Cherry picked from kernelJS

if (e) {

    eventData = {
        type: type,
        data: data,
        time: new Date(),
        listeners: listenerData,
        broadcastCount: broadcastCount[type],
        callbackCount: callbackCount[type],
        elapseTime: elapseTime,
        totalElapseTime: totalElapseTime[type],
        all: {
            broadcastCount: broadcastCount.event,
            callbackCount: callbackCount.event,
            totalElapseTime: totalElapseTime.event
        }
    };

    for (i=0,size=e.length; i<size; i+=1) {
        listeners.event[i].callback(eventData);
    }
}

// Handle callback if provided
if (callback) callback();
};
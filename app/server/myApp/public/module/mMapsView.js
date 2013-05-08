(function () {
    "use strict";
    Core.createModule("mapPage", function(sandbox) {
        var mapCanvas;

        return {
            //required
            init : function () {
                mapCanvas = sandbox.query("#map-canvas")[0]; //keeping google ID name per all v3 api docs.
                console.log(mapCanvas);
                sandbox.addEvent(mapCanvas, "click", this.callMap);
            },
            //required
            destroy : function () {
                sandbox.removeEvent(mapCanvas, "click", this.killMap);
                mapCanvas = null;
            },
            callMap : function () {
                sandbox.notify({
                   type : 'map-click',
                   data : event.currentTarget.innerHTML
                });
            },
            killMap : function () {
                alert("event killed");
            }
        };
    });
    //TODO this should only start this module. Also should be sandbox driven. Breaking routing rules for architecture.
    Core.start_all();

}());

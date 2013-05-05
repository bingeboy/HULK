(function () {
    "use strict";
    Core.createModule("mapPage", function(sandbox) {
        var mapCanvas;

        return {
            //required
            init : function () {
                mapCanvas = sandbox.query("#map-canvas2")[0]; //keeping google ID name per all v3 api docs.
                console.log(mapCanvas);
                sandbox.listen({
                    'map-click' : this.startGmap // executes if module hears type: 'map-click'
                });
            },
            //required
            destroy : function () {
                sandbox.removeEvent(mapCanvas, "click", this.killMap);
                mapCanvas = null;
            },
            startGmap : function () {
                alert("message from sandbox worked!");
            },
            killMap : function () {
                alert("event killed");
            }
        };
    });
    //TODO this should only start this module. Also should be sandbox driven. Breaking routing rules for architecture.
    Core.start_all();

}());

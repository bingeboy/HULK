//TODO take the code at the bottom and port into this framework. Also clean current module of unneeded methods
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



//MODULE ECAPSULATION HERE parts of a service from different approach.
//
//this.setValues(opt_options);
//
//
//
//    return {
//        /*
//         @Description: mapView loads the google map and will center based on the data that is present in the mappingObj.
//         */
//        mapView: function(mappingObjParam) {
//
//                //show america ... TODO make this at least get country of user as a start.
//                mappingObjParam.mapCenter = new google.maps.LatLng(42, -100);
//                mappingObjParam.zoomLevel = 3;
//
//
//            this.showMap(mappingObj, mappingObjParam);
//
//            //this for the info window
//            infoBox = new LocatorInfoBox({content: "loading..."});
//
//            if(mappingObj.storeData != null){
//                var mapping = VS.getService("mappingObj"),
//                    mappingObj = mapping.getValue();
//
//                this.showMarkers(mappingObj);
//
//                //  Create a new viewpoint bound TODO update this to work properly with the next method.
//                if (mappingObj.gmapMarker.length !== 1){ //this is needed so bounds are ignored on store detail page. - JPM
//                    this.fitMap(mappingObj);
//                };
//            }
//
//        },
//
//        fitMap: function(mappingObj){
//            var bounds = new google.maps.LatLngBounds();
//
//            //Get the position of every marker in the mapping object and make sure the bounds are set to include them
//            for ( var i = 0; i < mappingObj.gmapMarker.length; i++) {
//                bounds.extend(mappingObj.gmapMarker[i].position);
//            }
//
//            //  Fit these bounds to the map. If there's only one store in the list, set zoom.
//            if(mappingObj.broadcastMessage !== "destinationMapLoaded"){
//                mappingObj.theMap.fitBounds(bounds);
//            }
//
//            //This allows us to default zoom in on a single store OR set the zoom level (only really used for directions page)
//            if (mappingObj.gmapMarker.length === 1){
//                mappingObj.theMap.setZoom(mappingObj.zoomLevel ? mappingObj.zoomLevel : 15);
//            }
//        },
//
//
//        showMap: function(mappingObj, mappingObjParam){
//            var mapOptions = {
//                center: mappingObjParam.mapCenter,
//                zoom: mappingObjParam.zoomLevel,
//                mapTypeId: google.maps.MapTypeId.ROADMAP
//            };
//
//            //create map:
//            mappingObj.theMap = new google.maps.Map(mapCanvas,mapOptions);
//
//        },
//
//        //Description: Uses the mappingObj and gets coords to display the markers on the map.
//        showMarkers: function(markers){
//            var mapping = VS.getService("mappingObj"),
//                mappingObj = mapping.getValue(),
//                broadcastMessage = mappingObj.broadcastMessage,
//                templates = VS.getService("templates");
//
//            //Empty any markers that might be there already
//            markers.gmapMarker = [];
//
//            for (var i in markers.templateData) {
//
//                 //TODO make this a setup object and brin it in here.
//                var latlngset = new google.maps.LatLng(markers.templateData[i].locationData.lat, markers.templateData[i].locationData.lon),
//                    marker = new google.maps.Marker({
//                    markerID: markers.templateData[i].locationData.storeNumber,
//                    map: mappingObj.theMap,
//                    position: latlngset,
//                    title: null,
//                    labelContent: " ",
//                    streetViewControl: false,
//                    overviewMapControl : false,
//                    disableDefaultUI: true,
//                    disableDoubleClickZoom: false,
//                    mapTypeControl: false,
//                    mapTypeControlOptions: {
//                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//                    },
//                    zoomControl: false,
//                    zoomControlOptions: {
//                        style: google.maps.ZoomControlStyle.SMALL
//                    },
//                    zIndex: parseInt(i),
//                    html: templates.getMarkup("gmapsInfoWindow", mappingObj.templateData[(markers.templateData[i].locationData.storeNumber - 1)].locationData),
//                    icon: new google.maps.MarkerImage(
//                        '/resources/img/store-locator/'+ markerImage,
//                        new google.maps.Size(19, 29),	// desired size
//                        new google.maps.Point(0,0),	    // offset within the scaled sprite
//                        new google.maps.Point(10, 15),	// anchor point is half of the desired size
//                        new google.maps.Size(19, 29)	// scaled size of the entire sprite
//                    )
//                });
//
//                mappingObj.gmapMarker.push(marker);
//
//                var label = new Label({
//                                          map: mappingObj.theMap
//                                      });
//                label.set('zIndex', parseInt((i)+1));
//                label.bindTo('position', marker, 'position');
//
//                var labelText = String(marker.markerID);
//
//                if(broadcastMessage === "destinationMapLoaded"){
//                    labelText = "B";
//                }
//
//                label.set("text", labelText);
//                label.span_.setAttribute("id", "label" + marker.markerID);
//
//                infoBox = new LocatorInfoBox({
//                     map: mappingObj.theMap,
//                     markerID: marker.markerID,
//                     markerType: "store",
//                     latlng_: latlngset,
//                     div_: document.getElementById("infobox-wrap-" + marker.markerID)
//                 });
//
//                /*
//                 @Description: Handles the click event on map markers to display info windows.
//                 */
//                google.maps.event.addListener(marker, "click", function() {
//                    infoBox.draw();
//                });
//
//                google.maps.event.addListener(marker, "mouseover", function (){
//
//                });
//
//                google.maps.event.addListener(marker, "mouseout", function (){
//
//                });
//
//            };
//        }
//    };
//});

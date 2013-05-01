(function () {
    "use strict";

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

"use strict";

var id = sandbox.request ({name: "value" }, {
    success: function (response) {
        handleSuccess(response.data);
    },
    failure: function (response) {
        handleFailure();
    }
});
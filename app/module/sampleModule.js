/**
 * User: pizza
 * Date: 5/3/13
 * Time: 9:43 PM
 */

(function () {
    "use strict";
    Core.createModule("nameOfModule", function(sandbox){

        // private
        var = temp1, temp2;

        // public
        return{
            init : function() {
                temp1 = sandbox.query("selector");
                temp2 = sandbox.query("selector2");

                //todo make this a single line.
                sandbox.addEvent(temp1, "click", this.tempMethod);
                sandbox.addEvent(temp2, "click", this.tempMethod);
            },
            destroy : function () {
                //todo make this a single line.
                sandbox.removeEvent(temp1, "click", this.tempMethod);
                sandbox.removeEvent(temp2, "click", this.tempMethod);
            },
            tempMethod : function () {
                console.log("event fire from module");
                //method to notify core
                 sandbox.notify({
                    type: "notification name",
                    data: query // could also be "null, etc"
                 })
            },
            tempMethod2 : function () {
                console.log("event fire from module");

                //method to notify core
                sandbox.listen({
                    type: "notification name",
                    data: query // could also be "null, etc"
                 })
            }
        }
    });
}());
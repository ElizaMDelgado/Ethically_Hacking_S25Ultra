Java.perform(function () {
    var Context = Java.use("android.content.Context");

    Context.getSystemService.overload('java.lang.String').implementation = function(service) {
        console.log("Requested system service: " + service);
        return this.getSystemService(service);
    };
});

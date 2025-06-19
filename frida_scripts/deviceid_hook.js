Java.perform(function () {
    var TelephonyManager = Java.use("android.telephony.TelephonyManager");

    TelephonyManager.getDeviceId.implementation = function () {
        console.log("Hooked getDeviceId()");
        return "FAKE-DEVICE-ID-12345";
    };
});

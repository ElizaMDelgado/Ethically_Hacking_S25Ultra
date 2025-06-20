Java.perform(function () {
    var TelephonyManager = Java.use("android.telephony.TelephonyManager");

    TelephonyManager.getLine1Number.implementation = function () {
        console.log("Phone number accessed!");
        return "+1-999-999-9999";
    };
});

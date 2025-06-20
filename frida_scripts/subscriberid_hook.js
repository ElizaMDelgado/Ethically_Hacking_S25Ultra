Java.perform(function () {
    var TelephonyManager = Java.use("android.telephony.TelephonyManager");

    TelephonyManager.getSubscriberId.implementation = function () {
        console.log("IMSI accessed!");
        return "FAKE-IMSI-0000000000";
    };
});

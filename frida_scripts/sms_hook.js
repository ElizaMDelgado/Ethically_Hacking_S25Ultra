Java.perform(function () {
    var SmsManager = Java.use("android.telephony.SmsManager");

    SmsManager.sendTextMessage.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'android.app.PendingIntent', 'android.app.PendingIntent').implementation = function(destinationAddress, scAddress, text, sentIntent, deliveryIntent) {
        console.log("🚨 SMS attempt: To=" + destinationAddress + " Text=" + text);
        return null;  // Prevent actual SMS
    };
});

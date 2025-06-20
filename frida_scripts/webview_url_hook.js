Java.perform(function () {
    var WebView = Java.use("android.webkit.WebView");

    WebView.loadUrl.overload('java.lang.String').implementation = function(url) {
        console.log("🔍 WebView loading URL: " + url);
        this.loadUrl(url);
    };
});

cordova.define("cordova-plugin-android-update.AppUpdate", function(require, exports, module) { var exec = require('cordova/exec');

/**
 * Check if there is an update to the App.
 * 
 * This function can be called in two ways:
 * 1. checkAppUpdate(sucessCallback, errorCallback, updateUrlOrVersionInfo)
 * 2. checkAppUpdate(sucessCallback, errorCallback, updateUrlOrVersionInfo, options)
 * @param successOrUrl The success callback or the URL where the update data  is located
 * @param errorOrOptions The function called on error or the authentication options
 * @param updateUrlOrVersionInfo The URL where the update data is located or version info
 * @param options An object that may contain the authentication options
 */
exports.checkAppUpdate = function(successOrUrl, errorOrOptions, updateUrlOrVersionInfo, options) {
    var successCallback = successOrUrl;
    var errorCallback = errorOrOptions;
    var updateUrl = '';
    options = options ? options : {};
    if (updateUrlOrVersionInfo && typeof updateUrlOrVersionInfo === 'object') {
        // updateUrlOrVersionInfo is version info json object
        options['version'] = updateUrlOrVersionInfo['version'];
        options['name'] = updateUrlOrVersionInfo['name'];
        options['url'] = updateUrlOrVersionInfo['url'];
    } else {
        // updateUrlOrVersionInfo is remote update url string
        updateUrl = updateUrlOrVersionInfo;
    }
    exec(successCallback, errorCallback, "AppUpdate", "checkAppUpdate",  [updateUrl, options]);
};

});

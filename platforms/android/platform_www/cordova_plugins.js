cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "code-push.AcquisitionManager",
    "file": "plugins/code-push/script/acquisition-sdk.js",
    "pluginId": "code-push",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-shared.AppCenter",
    "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
    "pluginId": "cordova-plugin-appcenter-shared",
    "clobbers": [
      "AppCenter"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-analytics.Analytics",
    "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
    "pluginId": "cordova-plugin-appcenter-analytics",
    "clobbers": [
      "AppCenter.Analytics"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-crashes.Crashes",
    "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
    "pluginId": "cordova-plugin-appcenter-crashes",
    "clobbers": [
      "AppCenter.Crashes"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-code-push.codePush",
    "file": "plugins/cordova-plugin-code-push/bin/www/codePush.js",
    "pluginId": "cordova-plugin-code-push",
    "clobbers": [
      "codePush"
    ]
  },
  {
    "id": "cordova-plugin-code-push.localPackage",
    "file": "plugins/cordova-plugin-code-push/bin/www/localPackage.js",
    "pluginId": "cordova-plugin-code-push",
    "clobbers": [
      "LocalPackage"
    ]
  },
  {
    "id": "cordova-plugin-code-push.remotePackage",
    "file": "plugins/cordova-plugin-code-push/bin/www/remotePackage.js",
    "pluginId": "cordova-plugin-code-push",
    "clobbers": [
      "RemotePackage"
    ]
  },
  {
    "id": "cordova-plugin-code-push.syncStatus",
    "file": "plugins/cordova-plugin-code-push/bin/www/syncStatus.js",
    "pluginId": "cordova-plugin-code-push",
    "clobbers": [
      "SyncStatus"
    ]
  },
  {
    "id": "cordova-plugin-code-push.installMode",
    "file": "plugins/cordova-plugin-code-push/bin/www/installMode.js",
    "pluginId": "cordova-plugin-code-push",
    "clobbers": [
      "InstallMode"
    ]
  },
  {
    "id": "cordova-plugin-code-push.codePushUtil",
    "file": "plugins/cordova-plugin-code-push/bin/www/codePushUtil.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-code-push.fileUtil",
    "file": "plugins/cordova-plugin-code-push/bin/www/fileUtil.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-code-push.httpRequester",
    "file": "plugins/cordova-plugin-code-push/bin/www/httpRequester.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-code-push.nativeAppInfo",
    "file": "plugins/cordova-plugin-code-push/bin/www/nativeAppInfo.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-code-push.package",
    "file": "plugins/cordova-plugin-code-push/bin/www/package.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-code-push.sdk",
    "file": "plugins/cordova-plugin-code-push/bin/www/sdk.js",
    "pluginId": "cordova-plugin-code-push",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransferError",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransferError"
    ]
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransfer",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransfer"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-zip.Zip",
    "file": "plugins/cordova-plugin-zip/zip.js",
    "pluginId": "cordova-plugin-zip",
    "clobbers": [
      "zip"
    ]
  },
  {
    "id": "cordova-plugin-file-md5.md5chksum",
    "file": "plugins/cordova-plugin-file-md5/www/md5chksum.js",
    "pluginId": "cordova-plugin-file-md5",
    "clobbers": [
      "md5chksum"
    ]
  },
  {
    "id": "cordova-plugin-file-downloader.downloader",
    "file": "plugins/cordova-plugin-file-downloader/www/downloader.min.js",
    "pluginId": "cordova-plugin-file-downloader",
    "clobbers": [
      "downloader"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.mainHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
    "pluginId": "cordova-plugin-nativestorage",
    "clobbers": [
      "NativeStorage"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.LocalStorageHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-nativestorage.NativeStorageError",
    "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "code-push": "2.0.6",
  "cordova-plugin-appcenter-shared": "0.2.0",
  "cordova-plugin-appcenter-analytics": "0.2.0",
  "cordova-plugin-appcenter-crashes": "0.2.0",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-code-push": "1.11.14",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-file-transfer": "1.7.1",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-zip": "3.1.0",
  "cordova-plugin-file-md5": "0.3.3",
  "cordova-plugin-file-downloader": "0.4.0",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-nativestorage": "2.3.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-barcodescanner": "8.0.0"
};
// BOTTOM OF METADATA
});
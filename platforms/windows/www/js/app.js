// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.kerryexpress.kesmobile', // App bundle ID
  name: 'KesMobile', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//ready
var setUserInfoSuccess = function (obj) {
  //console.log(obj.name);
  NativeStorage.getItem("userInfo", getUserInfoSuccess, getUserInfoError);
};
var setUserInfoError = function (error) {
  console.log(error.code);
  if (error.exception !== "") console.log(error.exception);
};
var getUserInfoSuccess = function (obj) {
  //console.log(obj.name);
  //NativeStorage.remove("userInfo", removeSuccess, removeError);
  if(obj){
    $$("#user-name").text(obj.user);
    $$("#user-fullname").text(obj.fullname);
    $$("#last-login").text(obj.last);
    if(obj.sex){
      $$("#user-image").attr("src","img/sex/" + obj.sex+ ".png");
    }else{
      $$("#user-image").attr("src","img/sex/null.png");
    }
    
  }else{
    app.loginScreen.open("#my-login-screen")
  }
};
var getUserInfoError = function (error) {
  console.log(error);
  if (error.exception !== "") console.log(error.exception);
  if(error.code==2){
    app.loginScreen.open("#my-login-screen")
  }
};
var removeUserInfoSuccess = function () {
  console.log("Removed");
};
var removeUserInfoError = function (error) {
  console.log(error.code);
  if (error.exception !== "") console.log(error.exception);
};



///GEO///
var onGeoSuccess = function(position) {
  NativeStorage.setItem("location", position, function(data){}, function(error){});      
};

// onError Callback receives a PositionError object
//
function onGeoError(error) {
  
}


///END GEO





//////////////////////////////////////////
//////////////////////////////////////////
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  // be certain to make an unique reference String for each variable!
  NativeStorage.getItem("userInfo", getUserInfoSuccess, getUserInfoError);
  setInterval(function(){
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  },60000);
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
  var obj = {
    user: username, 
    fullname: "Nguyễn Văn Thịnh",
    key: password, 
    last: new Date(),
    sex: null,
    location: "S-HUB"
  };
  NativeStorage.setItem("userInfo", obj, setUserInfoSuccess, setUserInfoError);
});
// Logout
$$('#dang-xuat').on('click', function () {    
  NativeStorage.setItem("userInfo", null, setUserInfoSuccess, setUserInfoError);
  app.loginScreen.open("#my-login-screen")
});

// Scan click

$$('.scan-barcode').on('click', function () {    
  cordova.plugins.barcodeScanner.scan(
    function (result) {
        alert("We got a barcode\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled);
    },
    function (error) {
        alert("Scanning failed: " + error);
    },
    {
        preferFrontCamera : true, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    }
  );
  
});
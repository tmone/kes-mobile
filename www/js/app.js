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
var setSuccess = function (obj) {
  //console.log(obj.name);
  NativeStorage.getItem("userInfo", getSuccess, getError);
};
var setError = function (error) {
  console.log(error.code);
  if (error.exception !== "") console.log(error.exception);
};
var getSuccess = function (obj) {
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
var getError = function (error) {
  console.log(error);
  if (error.exception !== "") console.log(error.exception);
  if(error.code==2){
    app.loginScreen.open("#my-login-screen")
  }
};
var removeSuccess = function () {
  console.log("Removed");
};
var removeError = function (error) {
  console.log(error.code);
  if (error.exception !== "") console.log(error.exception);
};
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log("Device is ready!");
  var obj = {name: "NativeStorage", author: "KerryExpress"};

  // be certain to make an unique reference String for each variable!
  NativeStorage.getItem("userInfo", getSuccess, getError);
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
  NativeStorage.setItem("userInfo", obj, setSuccess, setError);
});
// Logout
$$('#dang-xuat').on('click', function () {    
  NativeStorage.setItem("userInfo", null, setSuccess, setError);
  app.loginScreen.open("#my-login-screen")
});

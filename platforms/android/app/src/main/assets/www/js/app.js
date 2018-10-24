// Dom7
var $$ = Dom7;
var serverUrl = "http://10.10.10.86:8080";
var url = serverUrl+"/api/";
// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.kerryexpress.kesmobile', // App bundle ID
  name: 'KesMobile', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: {
    user: {
      user_name: '53264',
      password: '1',
    },
    lastChoice:{},
  },
  store: null,
  gridComponent: null,
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
    app.data.user.user_name = obj.user;
    app.data.user.password = obj.key;
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

function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  //alert('Connection type: ' + states[networkState]);
  if(networkState==Connection.NONE){
    app.toast.create({
      text: "Không có tín hiệu mạng",        
      closeTimeout: 2000,
    }).open();
  }  
}



//////////////////////////////////////////
//////////////////////////////////////////
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  if(navigator.connection.type == connection.NONE){
    alert("Không có tín hiệu mạng!");
  }
  // be certain to make an unique reference String for each variable!
  setInterval(checkConnection,30000);
  NativeStorage.getItem("userInfo", getUserInfoSuccess, getUserInfoError);
  app.store = DevExpress.data.AspNet.createStore({
    key: "Consignment_No",
    loadUrl: url + "MPOD/"+app.data.user.user_name+"?u="+app.data.user.user_name+"&p="+app.data.user.password,
    //insertUrl: url + "/InsertOrder",
    //updateUrl: url + "/UpdateOrder",
    //deleteUrl: url + "/DeleteOrder",
    requireTotalCount: true,
    onBeforeSend: function(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
    },
  });
  setInterval(function(){
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  },60000);

  app.gridComponent = $("#grid-data").dxDataGrid({
    dataSource:app.store,
    filterRow: {
      visible: true
    },
    scrolling: {
      mode: "virtual"
    },
    selection: {
      mode: "single"
    },
    hoverStateEnabled: true,
    showBorders: true,
    showColumnLines:false,
    showRowLines:false,
    columns:[
      {
        dataField:"Id",
        visible:false,
        editOptions:{
          visible:false
        }
      },{
        dataField:"Consignment_No",
        caption:"Số VĐ",
        headerCellTemplate:function(head,info){
          var tmp=`<div class="item-content">
            <div class="item-inner">              
              <div class="item-before" style="float:left; margin-right:10px"><span id="totalCount" class="badge color-green">0</span></div>
              <strong>Số vận đơn</strong>
            </div>
          </div>`;
          head.append(tmp);
          app.store.totalCount().then(function(a){
            var div = $('#totalCount').text(a);
            if(a){
              $(div).addClass("not-sync");
            }else{
              $(div).addClass("synced");
            }
          });
        },
        cellTemplate:function(container, options){
          let tmp =`<div class="card">
            <div class="card-header">Card header</div>
            <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions.</div>
            <div class="card-footer">Card Footer</div>
          </div>`;
          $("<div class='card'>")
          .append(
            $("<div class='card-header'>").text(options.data.Consignment_No),
            $("<div class='card-content card-content-padding'>").append(
              $("<div>").text(options.data.Recipient_Name),
              $("<div>").text(options.data.Recipient_Address),
              $("<div>").text(options.data.Recipient_Phone_No),
              $("<div>").text(options.data.Remark),
            ),
            //$("<div class='card-footer'>").text(options.data.Est_Delivery_Date),
            // $("<img>", { "src": options.value })
          ).appendTo(container);
          $(container).css("padding","0px");
        }
      }
    ],
    remoteOperations: true,
    onSelectionChanged:function(e){
      var data = e.selectedRowsData;
      if(data.length>0){
        app.data.lastChoice = data[0];
        mainView.router.navigate('/bill/'+data[0].Consignment_No+'/');
      }
    }
  }).dxDataGrid("instance");

});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  $.get(url+"MPOD?u="+username+"&p="+password, function(data, status){    
    if(data && data.user.user_name && data.user.user_name.length>0){     
      // Alert username and password
      //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
      var obj = {
        user: data.user.user_name, 
        fullname: "Nhân viên Kerry",
        key: password, 
        last: new Date(),
        sex: null,
        location: "Not set"
      };
      NativeStorage.setItem("userInfo", obj, setUserInfoSuccess, setUserInfoError);
      // Close login screen
      app.loginScreen.close('#my-login-screen');
    }else{
      app.toast.create({
        text: "Thông tin đăng nhập không đúng",        
        closeTimeout: 2000,
      }).open();
    }
  });  
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
      let a = result.text;
        // alert("We got a barcode\n" +
        //       "Result: " + result.text + "\n" +
        //       "Format: " + result.format + "\n" +
        //       "Cancelled: " + result.cancelled);
        if(app.gridComponent){
          app.gridComponent.selectRows(a);

          if(app.gridComponent.getSelectedRowKeys().filter(x=>x==a).length>0){
            mainView.router.navigate("/bill/"+a+"/");
          }else{
            app.toast.create({
              text: "Không tìm thấy "+a,        
              closeTimeout: 2000,
            }).open();
          }
        }        
    },
    function (error) {
        alert("Lỗi: " + error);
    },
    {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Đưa mã vạch hiện ở khu vực này", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    }
  );
  
});



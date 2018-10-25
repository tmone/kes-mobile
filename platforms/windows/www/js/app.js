﻿// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'com.kerryexpress.kesmobile', // App bundle ID
  name: 'KesMobile', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: {
    user: {
      user_name: null,
      password: '****',
    },
    lastChoice: {},
    serverUrl: "http://210.211.121.146:30000",
    pushBill: true,
    geoLocation: {},
    SystemExceptionStore: [],
    version: 18,
    signal: true,
  },
  store: null,
  gridComponent: null,
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    goHome: function () {
      app.router.navigate('/', {
        reloadCurrent: true,
        ignoreCache: true,
      });
      app.methods.refreshGrid();
    },
    updateStore: function () {
      //debugger;
      app.store = DevExpress.data.AspNet.createStore({
        key: "Consignment_No",
        loadUrl: app.data.serverUrl + "/api/MPOD/" + app.data.user.user_name + "?u=" + app.data.user.user_name + "&p=" + app.data.user.password,
        //insertUrl: url + "/InsertOrder",
        //updateUrl: url + "/UpdateOrder",
        //deleteUrl: url + "/DeleteOrder",
        requireTotalCount: true,
        onBeforeSend: function (method, ajaxOptions) {
          ajaxOptions.xhrFields = { withCredentials: true };
        },
      });
    },
    refreshGrid: function () {
      //debugger;
      setTimeout(function () {
        app.gridComponent = $("#grid-data").dxDataGrid({
          dataSource: app.store,
          // filterRow: {
          //   visible: true
          // },
          scrolling: {
            mode: "virtual"
          },
          selection: {
            mode: "single"
          },
          // searchPanel: {
          //   visible: true,
          //   width: '100%',
          //   placeholder: "Tìm..."
          // },
          //hoverStateEnabled: true,
          showBorders: true,
          showColumnLines: false,
          showRowLines: false,
          columns: [
            {
              dataField: "Id",
              allowSearch: false,
              visible: false,
              editOptions: {
                visible: false
              }
            },
            {
              dataField: "PRO",
              allowSearch: false,
              visible: false,
              editOptions: {
                visible: false
              },
              sortOrder: "desc"
            },
            {
              dataField: "Consignment_No",
              allowSorting: false,
              caption: "Số VĐ",
              headerCellTemplate: function (head, info) {
                var tmp = `<div class="item-content">
                  <div class="item-inner">    
                    <div class="item-title"><strong>Số vận đơn</strong></div>         
                    <div class="item-after after-fix">
                      <span id="totalCountNOT" class="badge badge-fix">0</span>
                      <span id="totalCountDEL" class="badge color-red badge-fix">0</span>
                      <span id="totalCountPOD" class="badge color-green badge-fix">0</span>
                      <span id="totalCountRET" class="badge color-orange badge-fix">0</span>
                      <a id="search" href="#" >
                        <span class="badge color-blue badge-fix"><i class="f7-icons" style="font-size:12px">search</i></span>
                      </a>
                    </div>                  
                  </div>
                </div>`;
                head.append(tmp);
                setTimeout(function () {
                  if (app.store) {
                    app.store.load().done(function (a) {
                      var cPOD = 0;
                      var cRET = 0;
                      var cDEL = 0;
                      var cNOT = 0;
                      if (a) {
                        cPOD = a.filter(x => x.PRO == 1).length;
                        cRET = a.filter(x => x.PRO == 2).length;
                        cDEL = a.filter(x => x.PRO == 3).length;
                        cNOT = a.filter(x => x.PRO == 4).length;
                      }
                      $('#totalCountPOD').text(cPOD);
                      $('#totalCountRET').text(cRET);
                      $('#totalCountDEL').text(cDEL);
                      $('#totalCountNOT').text(cNOT);                      
                    });
                  }
                  $$('#search').on('click', function () {
                    app.dialog.prompt('Tìm? Bấm Ok để tải dữ liệu', function (name) {
                      app.gridComponent.searchByText(name);
                    })
                  });

                }, 500);

              },
              cellTemplate: function (container, options) {
                let co = "color-gray color-green color-p color-red color-gray".split(' ');
                let tmp = `<div class="card">
                  <div class="card-header `+ co[options.data.PRO] + `">Card header</div>
                  <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions.</div>
                  <div class="card-footer">Card Footer</div>
                </div>`;
                $("<div class='card'>").append(
                  $("<div class='card-header card-header-fix'>").append(
                    $("<span>").text(options.data.Consignment_No),
                    $("<a class='link link icon-only " + co[options.data.PRO] + " link-icon-fix'><i class='f7-icons size-32'>bookmark_fill</i></a>"),
                  ),
                  $("<div class='card-content card-content-padding card-content-fix'>").append(
                    $("<div>").text(options.data.Recipient_Name),
                    $("<div>").text(options.data.Recipient_Address),
                    $("<div>").append(
                      $("<span>").text(options.data.Recipient_Phone_No),
                      " ",
                      $("<span>").text(options.data.Recipient_Contact_Person),
                    ),
                    $("<div>").text(options.data.Remark),
                  ),
                  //$("<div class='card-footer'>").text(options.data.Est_Delivery_Date),
                  // $("<img>", { "src": options.value })
                ).appendTo(container);
                $(container).css("padding", "0px");
              }
            },
            {
              dataField: "Created_Date",
              visible: false,
              editOptions: {
                visible: false
              },
              sortOrder: "desc"
            },
            {
              dataField: "Recipient_Name",
              visible: false,
              editOptions: {
                visible: false
              },
            },
            {
              dataField: "Recipient_Contact_Person",
              visible: false,
              editOptions: {
                visible: false
              },
            },
            {
              dataField: "Recipient_Phone_No",
              visible: false,
              editOptions: {
                visible: false
              },
            },
            {
              dataField: "Recipient_Address",
              visible: false,
              editOptions: {
                visible: false
              },
            },
            {
              dataField: "Remark",
              visible: false,
              editOptions: {
                visible: false
              },
            },
            {
              dataField: "Special_Delivery_Remark",
              visible: false,
              editOptions: {
                visible: false
              },
            }
          ],
          remoteOperations: true,
          onSelectionChanged: function (e) {
            app.data.lastChoice = {};
            var data = e.selectedRowsData;
            if (data.length > 0) {
              if (data[0].PRO > 2) {
                app.data.lastChoice = data[0];
                mainView.router.navigate('/bill/' + data[0].Consignment_No + '/');
              }
            }
          }
        }).dxDataGrid("instance");
      }, 500);

    }
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
  if (obj && obj.user && obj.user.length > 4 && obj.key && obj.key != "****") {
    app.data.user.user_name = obj.user;
    app.data.user.password = obj.key;
    $$("#user-name").text(obj.user);
    $$("#user-fullname").text(obj.fullname);
    $$("#last-login").text(obj.last);
    if (obj.sex) {
      $$("#user-image").attr("src", "img/sex/" + obj.sex + ".png");
    } else {
      $$("#user-image").attr("src", "img/sex/null.png");
    }
    app.methods.updateStore();
  } else {
    app.loginScreen.open("#my-login-screen");
  }
};
var getUserInfoError = function (error) {
  console.log(error);
  if (error.exception !== "") console.log(error.exception);
  if (error.code == 2) {
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
var onGeoSuccess = function (position) {
  app.data.geoLocation = position;
  NativeStorage.setItem("location", position, function (data) { }, function (error) { });
};

// onError Callback receives a PositionError object
//
function onGeoError(error) {

}
///END GEO

function checkConnection() {

  var networkState = navigator.connection.type;
  console.log("Check network", networkState, new Date().toJSON());
  var states = {};
  states[Connection.UNKNOWN] = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI] = 'WiFi connection';
  states[Connection.CELL_2G] = 'Cell 2G connection';
  states[Connection.CELL_3G] = 'Cell 3G connection';
  states[Connection.CELL_4G] = 'Cell 4G connection';
  states[Connection.CELL] = 'Cell generic connection';
  states[Connection.NONE] = 'No network connection';

  //alert('Connection type: ' + states[networkState]);
  if (networkState == Connection.NONE) {
    app.data.signal = false;
    app.toast.create({
      text: "Không có tín hiệu mạng",
      closeTimeout: 2000,
    }).open();
    setTimeout(checkConnection, 10000);
  } else {
    if (app.data.signal) {

    } else {
      app.data.signal = true;
      app.gridComponent.refresh();
    }
    setTimeout(checkConnection, 30000);
  }
}



//////////////////////////////////////////
//////////////////////////////////////////
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  // if (navigator.connection.type == navigator.connection.NONE) {
  //   app.dialog.alert("Không có tín hiệu mạng!");
  // }
  // be certain to make an unique reference String for each variable!
  checkConnection();

  // window.AppUpdate.checkAppUpdate(function () {

  // }, function () {

  // }, serverUrl + "/version.xml");

  NativeStorage.getItem("config", function (result) {
    app.data.serverUrl = result.server || app.data.serverUrl;
    app.data.pushBill = result.push;
  }, function (error) {
    NativeStorage.setItem("config", {
      server: app.data.serverUrl,
      push: app.data.pushBill
    }, function (data) {

    }, function (error) {

    });
  });

  NativeStorage.getItem("userInfo", getUserInfoSuccess, getUserInfoError);

  DevExpress.data.AspNet.createStore({
    key: "ID",
    loadUrl: app.data.serverUrl + "/api/SystemException" + "?u=" + app.data.user.user_name + "&p=" + app.data.user.password,
    filter: ["Status_ID", "=", 20],
  }).load().done(function (data) {
    if (data) {
      app.data.SystemExceptionStore = data.filter(x => x.Status_ID == 20);
    }

  });
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  ////
  setInterval(function () {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  }, 60000);

  //app.methods.updateStore();
  setTimeout(app.methods.refreshGrid, 1000);
  //app.methods.refreshGrid();

});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  $.get(app.data.serverUrl + "/api/MPOD?u=" + username + "&p=" + password, function (data, status) {
    if (data && data.user_name && data.user_name.length > 0) {
      // Alert username and password
      //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
      var obj = {
        user: data.user_name,
        fullname: "Nhân viên Kerry",
        key: password,
        last: new Date(),
        sex: null,
        location: "Not set"
      };
      //debugger;
      NativeStorage.setItem("userInfo", obj, setUserInfoSuccess, setUserInfoError);
      location.reload(); 
    } else {
      app.toast.create({
        text: "Thông tin đăng nhập không đúng",
        closeTimeout: 2000,
      }).open();
    }
  });
});
// Logout
$$('#dang-xuat').on('click', function () {
  NativeStorage.setItem("userInfo", {}, setUserInfoSuccess, setUserInfoError);
  app.loginScreen.open("#my-login-screen");
  location.reload();
});

// route
$$('.route-map').on('click', function () {
  mainView.router.navigate("/route/");
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
      if (app.gridComponent) {
        app.gridComponent.selectRows(a);

        if (app.gridComponent.getSelectedRowKeys().filter(x => x == a).length > 0) {
          mainView.router.navigate("/bill/" + a + "/");
        } else {
          app.toast.create({
            text: "Không tìm thấy " + a,
            closeTimeout: 2000,
          }).open();
        }
      }
    },
    function (error) {
      alert("Lỗi: " + error);
    },
    {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt: "Đưa mã vạch hiện vào khu vực quét", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats: "QR_CODE,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
      orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  );

});



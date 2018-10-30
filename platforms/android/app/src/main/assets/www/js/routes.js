routes = [
  {
    path: '/',
    url: './index.html',
    on: {
      pageAfterIn: function (e, page) {
        // do something after page gets into the view
        var app = page.app;
        app.methods.refreshGrid();

      },
      pageInit: function (e, page) {
        // do something when page initialized
      },
    }
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/config/',
    componentUrl: './pages/config.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/bill/:billId/',
    componentUrl: './pages/bill.html',
  },
  {
    path: '/del/:billId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      //var userId = routeTo.params.userId;

      DevExpress.data.AspNet.createStore({
        key: "ID",
        loadUrl: app.data.serverUrl + "/api/SystemException" + "?u=" + app.data.user.user_name + "&p=" + app.data.user.password,
        filter: ["Status_ID", "=", 20],
      }).load().done(function (data) {
        var _reason = [];
        if (data) {
          _reason = data.filter(x => x.Status_ID == 20);
        }
        resolve(
          {
            componentUrl: './pages/del.html',
          },
          {
            context: {
              _reason: _reason,
            }
          }
        );
        // Hide Preloader
        app.preloader.hide();
      });
    },
  },
  {
    path: '/route/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      //var userId = routeTo.params.userId;

      app.store.load().done(function (data) {
        var _route = [];
        if (data) {
          _route = data.filter(x => x.PRO > 2);
        }
        resolve(
          {
            componentUrl: './pages/route.html',
          },
          {
            context: {
              _route: _route,
            }
          }
        );
        // Hide Preloader
        app.preloader.hide();
      });
    },
  },
  {
    path: '/update/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      //var userId = routeTo.params.userId;     
      // app.request.get(app.data.serverUrl + "/api/Version", function (data) {
      //   //debugger;
      //   var dat = JSON.parse(JSON.parse(data));
      //   if (dat.version > app.version ) {
      //     app.toast.create({
      //       text: "<strong>Có bản cập nhập mới... </strong><a class='link external' href='" + dat.url + "'><i class='f7-icons'>cloud_download_fill</i> Tải về</a>.<br>Phiên bản: " + dat.version + ". Ngày: "+dat.date_upload,
      //       position: 'top',
      //       closeButton: true,
      //       closeButtonText: '<i class="f7-icons">close_round_fill</i>',        
      //     }).open();
      //   }
      // }); 
      app.request.get(app.data.serverUrl + "/api/Version", function (data) {
        //console.log(data);
        //debugger;
        // var xmlDoc = $.parseXML(data);
        // var $xml = $(xmlDoc);
        // var $version = +$xml.find("version").text();
        // var $url = $xml.find("url").text();
        // var $name = $xml.find("name").text();   
        var dat = JSON.parse(JSON.parse(data));     
        resolve(
          {
            componentUrl: './pages/update.html',
          },
          {
            context: {
              _data: dat,
            }
          }
        );
        // Hide Preloader
        app.preloader.hide();
      },function(error){
        app.preloader.hide();
      });
    },
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

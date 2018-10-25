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
          _reason = data.filter(x => x.Status_ID == 20 );
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

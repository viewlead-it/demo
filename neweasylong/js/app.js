// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.tabs.style("standard");

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.homemenu', {
        url: "/homemenu",
        abstract: true,
        views: {
        'home-tab': {
          templateUrl: "templates/homemenu.html",
        }
      }
      })
    .state('tabs.homemenu.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.homemenu.todaySold', {
      url: "/todaySold",
      views: {
        'menuContent': {
          templateUrl: "templates/todaySold.html"
        }
      }
    })
    .state('tabs.homemenu.statis', {
      url: "/statis",
      views: {
        'menuContent': {
          templateUrl: "templates/statis.html"
        }
      }
    })
    .state('tabs.homemenu.todayOrder', {
      url: "/todayOrder",
      views: {
        'menuContent': {
          templateUrl: "templates/todayOrder.html",
          controller:"TodayOrderCtrl"
        }
      }
    })
    .state('tabs.homemenu.newCustomer', {
      url: "/newCustomer",
      views: {
        'menuContent': {
          templateUrl: "templates/newCustomer.html"
        }
      }
    })
    .state('tabs.homemenu.todayProduce', {
      url: "/todayProduce",
      views: {
        'menuContent': {
          templateUrl: "templates/todayProduce.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    })
    .state('tabs.message', {
      url: "/message",
      views: {
        'message-tab': {
          templateUrl: "templates/message.html",
          controller:"MessageCtrl"
        }
      }
    })
    ;


   $urlRouterProvider.otherwise("/tab/homemenu/home");

})
CONTROLLER = angular.module('starter.controllers', []);

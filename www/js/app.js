// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','toaster'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
	$state.go('tab.arm1');
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
	
	//enforce always bottom tabs
  $ionicConfigProvider.tabs.position('bottom'); // other values: top
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.arm1', {
    url: '/arm1',
    views: {
      'tab-arm1': {
        templateUrl: 'templates/tab-arm1.html',
        controller: 'Arm1Ctrl'
      }
    }
  })

  .state('tab.arm2', {
      url: '/arm2',
      views: {
        'tab-arm2': {
          templateUrl: 'templates/tab-arm2.html',
          controller: 'Arm2Ctrl'
        }
      }
    })
    
  .state('tab.arm3', {
    url: '/arm3',
    views: {
      'tab-arm3': {
        templateUrl: 'templates/tab-arm3.html',
        controller: 'Arm3Ctrl'
      }
    }
  })
  .state('tab.arm4', {
    url: '/arm4',
    views: {
      'tab-arm4': {
        templateUrl: 'templates/tab-arm4.html',
        controller: 'Arm4Ctrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/tab/arm1');

});

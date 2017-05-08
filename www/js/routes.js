angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.iSCAPHome', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iSCAPHome.html',
        controller: 'iSCAPHomeCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/schedule',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu.maps', {
    url: '/maps',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.messageBoard', {
    url: '/messageboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messageBoard.html',
        controller: 'messageBoardCtrl'
      }
    }
  })

  .state('menu.hotelInterior', {
    url: '/hotelinterior',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hotelInterior.html',
        controller: 'hotelInteriorCtrl'
      }
    }
  })

  .state('menu.event', {
    url: '/item',
	params: {
		eventTitle: "",
		paper: "",
		chair: "",
		date: "",
		startTime: "",
		endTime: "",
		mealType: "",
		room: "",
		subjectArea: "",
		note: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});
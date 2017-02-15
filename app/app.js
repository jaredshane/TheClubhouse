const app = angular.module('theClubhouse', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')


  firebase.initializeApp({
    apiKey: "AIzaSyCY8KnwE_caToFQDL2qEDH7JeB42SRCzGQ",
    authDomain: "the-clubhouse-1f0b3.firebaseapp.com",
    databaseURL: "https://the-clubhouse-1f0b3.firebaseio.com",
    storageBucket: "the-clubhouse-1f0b3.appspot.com",
    messagingSenderId: "598349649037"
  });

  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/teams', {
      controller: 'TeamsCtrl',
      templateUrl: 'partials/teams.html'
    })
    .when('/login', {
      controller: 'AuthCtrl',
      templateUrl: 'partials/auth.html'
    })
})

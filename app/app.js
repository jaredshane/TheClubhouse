const app = angular.module('theClubhouse', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/teams', {
      controller: 'TeamsCtrl',
      templateUrl: 'partials/teams.html'
    })
})

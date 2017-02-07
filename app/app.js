console.log('hey')

const app = angular.module('theClubhouse', ['ngRoute'])


app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: ,
      templateUrl: 
    })
})

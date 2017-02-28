app.controller('AuthCtrl', function ($scope, authFactory, $location, getFavoritesFactory) {


  $scope.registerButton = function (email, password) {

    authFactory.register(email, password)
      .then((user)=>{
        firebase.auth().onAuthStateChanged(function(user) {
        })//onAuthStateChanged
    //if user successfully registers, redirects to homepage

    $location.url("/teams")

    }) //.then

  } //registerButton

  $scope.loginButton = function (email, password) {
    authFactory.login(email, password)
      .then((user) => {
        firebase.auth().onAuthStateChanged(function(user) {
        })//onAuthStateChanged

        $location.url("/teams")
      }) //.then
  }//loginButton


}) //AuthCtrl

app.controller('WelcomeCtrl', function (getMLBFactory, $scope, $location, getFavoritesFactory) {

  $scope.gotoTeams = () => {
    $location.url('/teams')
  }

  // $scope.arrayofTeams = [];
  //
  // //sets the data to parse upon clicking the 'get team news' button
  // $scope.loopTeams = () => {
  //   getMLBFactory.setData($scope.arrayofTeams)
  //     .then(function (data) {
  //       $location.url("/news")
  //     })
  //
  // }
  //
  //
  // $scope.getFavorites = () => {
  //   getFavoritesFactory.getURL()
  //     .then((data) => {
  //       console.log("data", data.data)
  //       for (var i = 0; i < data.data.length; i++) {
  //         console.log("data.data[i]", data.data[i]);
  //         $scope.arrayofTeams.push(data.data[i]);
  //
  //       }
  //       console.log("$scope.arrayofTeams[0]", $scope.arrayofTeams);
  //
  //       // for (var i = 0; i < data.data.length; i++) {
  //       //   data.data[i]
  //       // }
  //     })
  //
  // }
  //
  // $scope.getFavorites()




})

app.controller('WelcomeCtrl', function (getMLBFactory, $scope, $location, getFavoritesFactory, getMLBTRFactory, getRedditFactory) {

  $scope.gotoTeams = () => {
    $location.url('/teams')
  }

  $scope.arrayofTeams = [];

  $scope.getFavorites = () => {
    getFavoritesFactory.getURL()
      .then((data) => {
        console.log("data", data);
        for (var i = 0; i < data.data.length; i++) {
          $scope.arrayofTeams.push(data.data[i]);

        }


      })

  }

  $scope.getFavorites()


  //sets the data to parse upon clicking the 'get team news' button
  $scope.loopTeams = () => {
    getMLBTRFactory.setData($scope.arrayofTeams)
      .then (function () {
        getMLBFactory.setData($scope.arrayofTeams)
        .then(function (data) {
          getRedditFactory.setData($scope.arrayofTeams)
            .then(function () {
              $location.url("/news")
            }) //then after Reddit Factory
        }) // then after MLB factory

      }) //then after MLBTR factory


  }



})

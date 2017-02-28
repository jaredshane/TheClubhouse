app.controller('TeamsCtrl', function ($scope, $http, $q, getTeamFactory, getMLBFactory, $location, getFavoritesFactory, getMLBTRFactory, getRedditFactory) {

$scope.savedTeams = [];

$scope.arrayofTeams = []

var teamListObj;

var objofTeams;



let listofTeams = []

//gets the favorites list of Firebase

$scope.getFavorites = () => {
  getFavoritesFactory.getURL()
    .then((data) => {
      $scope.arrayofTeams = [];
      $scope.savedTeams = [];
      $scope.isEqual();
      // console.log("data", data.data)
      for (var i = 0; i < data.data.length; i++) {
        // console.log("data.data[i]", data.data[i]);
        $scope.arrayofTeams.push(data.data[i]);
        $scope.savedTeams.push(data.data[i]);


      }



    })

}

$scope.getFavorites()


//save favorites on click of the save favorites button
$scope.favoriteSave = () => {
  getFavoritesFactory.setFavorites($scope.arrayofTeams)
    .then( () => {
        Materialize.toast('Favorites saved!', 2000)
      $scope.getFavorites()
    })

}


$scope.isEqual = (arr1, arr2) => {
  return _.isEqual(arr1, arr2);
}


//when checking a box of a team, it pushes it to an array
  $scope.checkboxModel = (key, team, urls) => {


    for (var i = 0; i < $scope.arrayofTeams.length; i++) {
      if ($scope.arrayofTeams[i].mlb === urls.mlb) {
        return $scope.arrayofTeams.splice(i, 1)
      }
    }
      if (team === "Chicago Cubs") {
        window.location='https://www.google.com/search?q=how+many+world+series+have+the+cardinals+own&oq=how+many+world+series+have+the+cardinals+own&aqs=chrome..69i57j0l2j5.5631j0j7&sourceid=chrome&ie=UTF-8#q=How+many+more+World+Series%27+have+the+Cardinals+won+than+the+Cubs'
      }
      $scope.arrayofTeams.push(teamListObj[key][team])




    };


    //gets the list of teams
  $scope.teamList = () => {
      getTeamFactory.getTeamList()
        .then(function (data) {
          $scope.leagues = data;
          teamListObj = data

          })


    }
    $scope.teamList()

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

    $scope.checkCheckBox = (urlObj) => {

      for (let i = 0; i < $scope.arrayofTeams.length; i++) {
        if ($scope.arrayofTeams[i].mlb === urlObj.mlb) {
          return true
        }
      }

    };







}) //end of controller

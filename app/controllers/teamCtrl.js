app.controller('TeamsCtrl', function ($scope, $http, $q, getTeamFactory, getMLBFactory, $location, getFavoritesFactory) {


$scope.arrayofTeams = []

var teamListObj;

var objofTeams;



let listofTeams = []

//gets the favorites list of Firebase

$scope.getFavorites = () => {
  getFavoritesFactory.getURL()
    .then((data) => {
      console.log("data", data.data)
      for (var i = 0; i < data.data.length; i++) {
        console.log("data.data[i]", data.data[i]);
        $scope.arrayofTeams.push(data.data[i]);

      }
      console.log("$scope.arrayofTeams[0]", $scope.arrayofTeams);

      // for (var i = 0; i < data.data.length; i++) {
      //   data.data[i]
      // }
    })

}

$scope.getFavorites()


//save favorites on click of the save favorites button
$scope.favoriteSave = () => {
  console.log("$scope.arrayofTeams", $scope.arrayofTeams);
  getFavoritesFactory.setFavorites($scope.arrayofTeams)
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
      console.log("teamListObj[key][team]", team);

      // $scope.arrayofTeams.push(team)
      console.log("$scope.arrayofTeams", $scope.arrayofTeams);



    };


    //gets the list of teams
  $scope.teamList = () => {
      getTeamFactory.getTeamList()
        .then(function (data) {
          console.log("data1", data);
          $scope.leagues = data;
          teamListObj = data

          })


    }
    $scope.teamList()

    //sets the data to parse upon clicking the 'get team news' button
    $scope.loopTeams = () => {
      getMLBFactory.setData($scope.arrayofTeams)
        .then(function (data) {
          $location.url("/news")
        })

    }

    $scope.checkCheckBox = (urlObj) => {

      for (let i = 0; i < $scope.arrayofTeams.length; i++) {
        if ($scope.arrayofTeams[i].mlb === urlObj.mlb) {
          return true
        }
      }

    };





})

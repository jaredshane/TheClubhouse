app.controller('TeamsCtrl', function ($scope, $http, $q, getTeamFactory, getMLBFactory, $location) {


var arrayofTeams = []

var teamListObj;

var objofTeams;

// var arrayofTeamsListed = []

let listofTeams = []


// let arrayofLeagues = []



// var newArray = []

//
// var arraytest = [$http.get('http://mlb.mlb.com/partnerxml/gen/news/rss/atl.xml'), $http.get('http://mlb.mlb.com/partnerxml/gen/news/rss/mia.xml'), $http.get('http://mlb.mlb.com/partnerxml/gen/news/rss/phi.xml')]
//
//
// function test1(array) {
//   return $q.all(array).then(function (value) {
//     return value
//     console.log("value", value);
//   })
//
// }
//
// test1(arraytest).then(function (val) {
//   console.log(val)
// })
//
// console.log("arraytest", arraytest);

  $scope.checkboxModel = (key, team) => {
    //gets the URL or MLB RSS feeds
    // arrayofTeams.push(team)
    //
    // console.log("arrayofTeams", arrayofTeams);

      arrayofTeams.push(teamListObj[key][team])

      // arrayofTeams.push(team)
      console.log("arrayofTeams", arrayofTeams);

      // URL for mlbtraderumors RSS feeds
      // arrayofTeams.push(teamListObj[key][team].mlbtr)

      // console.log("arrayofTeams", arrayofTeams);

      // console.log(teams)
      // console.log(teamListObj[teams].mlb);

    };

  // $scope.loopTeams = () => {
  //   for (var i = 0; i < arrayofTeams.length; i++) {
  //     // console.log("arrayofTeams[i]", arrayofTeams[i]);
  //       newArray.push($http.get(arrayofTeams[i]))
  //
  //   }
  //   // console.log("newArray", newArray);
  //   getMLBFactory.setData(newArray).then(function (data) {
  //     // console.log("data", data);
  //     $location.url("/")
  //   })
  // }


  // $scope.teamList = () => {
  //     getTeamFactory.getTeamList()
  //       .then(function (teamlists) {
  //         // console.log('teamlists', teamlists)
  //         let listOfTeams = Object.keys(teamlists)
  //         // console.log("listofTeams", listOfTeams);
  //         $scope.teamlists = listOfTeams
  //         teamListObj = teamlists
  //       })
  //
  //   }
  //   $scope.teamList()

  $scope.teamList = () => {
      getTeamFactory.getTeamList()
        .then(function (data) {
          // console.log("data", data);
          $scope.leagues = data;
          teamListObj = data
          })


    }
    $scope.teamList()


    $scope.loopTeams = () => {
      getMLBFactory.setData(arrayofTeams)
        .then(function (data) {
          $location.url("/")
        })

      // for (var i = 0; i < arrayofTeams.length; i++) {
      //   // console.log("arrayofTeams[i]", arrayofTeams[i]);
      //     newArray.push($http.get(arrayofTeams[i]))
      //
      // }
      // // console.log("newArray", newArray);
      // getMLBFactory.setData(newArray).then(function (data) {
      //   // console.log("data", data);
      //   $location.url("/")
      // })
    }




})

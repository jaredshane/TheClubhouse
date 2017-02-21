app.factory('getTeamFactory', function ($http) {
  return{
    getTeamList: () => {
      return $http
        .get('teamdatabase/teamdb.json')
        .then(function (teams) {
          // console.log('getTeamList', teams.data.teams)
          return teams.data.teams
        })
    } //getTeamList

  } //return

}) //getTeamFactory

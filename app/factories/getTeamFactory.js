app.factory('getTeamFactory', function ($http) {
  return{
    getTeam: () => {
      return $http
        .get('mockdb/teamdb.json')
        .then(function (data) {
          console.log('mockdb', data.data.teams.Atlanta)
          return data.data.teams.Atlanta
        })
    }

  }

})

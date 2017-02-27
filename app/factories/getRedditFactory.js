app.factory('getRedditFactory', function ($q, $http) {

  let parseData = {};
  let newArray = []
  var httpArray = []


  return {
    setData : (arrayofTeams) => {
      for (var i = 0; i < arrayofTeams.length; i++) {
        httpArray.push($http.get(arrayofTeams[i].reddit))
      }
      return $q.all(httpArray)
        .then(function (data) {
          console.log("reddit data", data);

          for (var i = 0; i < data.length; i++) {
            parseData[i] = data[i]
          }

          console.log("parseData", parseData);
          return parseData;

        })


    },//setData
    getData : () => {
      return parseData;
    },//getData
    clearData: () => {
      console.log("clear");
      parseData = {}
      newArray = []
      httpArray = []
      return
    }
  }
})

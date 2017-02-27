app.factory('getMLBTRFactory', function ($http, $q) {
  let parseData = {};
  let newArray = []
  var httpArray = []

  return {
    getData : () => {
      return parseData;
    },//getData

    setData : (arrayofTeams) => {
      for (var i = 0; i < arrayofTeams.length; i++) {
        httpArray.push($http.get(arrayofTeams[i].mlbtr))
      }
      return $q.all(httpArray)
        .then(function (data) {
          for (var i = 0; i < data.length; i++) {
            var teamXML = data[i].data
              var x2js = new X2JS();
              parseData[i] = x2js.xml_str2json(teamXML);


          }
          return parseData;


        })
    },//setDataTest
    clearData: () => {
      parseData = {}
      newArray = []
      httpArray = []
      return
    }
  } //return
})//factory

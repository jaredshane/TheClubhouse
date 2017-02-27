app.factory('getMLBFactory', function ($http, $q) {
  let parseData = {};
  let newArray = []
  var httpArray = []

  return {
    getData : () => {
      return parseData;
    },//getData
    setData : (arrayofTeams) => {
      for (var i = 0; i < arrayofTeams.length; i++) {
        httpArray.push($http.get(arrayofTeams[i].mlb))
      }
      return $q.all(httpArray)
        .then(function (data) {
          // console.log("data", data);
          for (var i = 0; i < data.length; i++) {
            // console.log("data[i]", data[i]);
            var teamXML = data[i].data
            // console.log("teamXML", teamXML);
              var x2js = new X2JS();
              parseData[i] = x2js.xml_str2json(teamXML);


          }
          // console.log("parseData", parseData);
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

app.factory('getMLBFactory', function ($http, $q) {
  let parseData = {};
  let newArray = []
  var httpArray = []

  return {
    getData : () => {
      return parseData;
    },//getData
    // setData : (arrayofTeams) => {
    //   console.log("arrayofTeams", arrayofTeams);
    //   for (var i = 0; i < arrayofTeams.length; i++) {
    //     var newObj = {}
    //     // newArray.push(arrayofTeams[i].teamname)
    //     newObj.teams = arrayofTeams[i].teamname
    //     newArray.push(newObj)
    //     // console.log("newObj", newObj);
    //
    //     httpArray.push($http.get(arrayofTeams[i].mlb))
    //
    //   }
    //   return $q.all(httpArray)
    //     .then(function(data) {
    //       // console.log("data", data);
    //       for (var i = 0; i < data.length; i++) {
    //         let text = data[i].data
    //         // console.log("text", text);
    //         let parser = new DOMParser();
    //         let xmlDoc = parser.parseFromString(text, 'text/xml');
    //         // console.log("xmlDoc", xmlDoc)
    //         parseData[i]= xmlDoc.getElementsByTagName("item")
    //         // console.log("parseData", parseData[i]);
    //       }
    //
    //     })
    // }//setData
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
    }//setDataTest
  } //return
})//factory

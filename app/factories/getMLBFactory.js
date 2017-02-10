app.factory('getMLBFactory', function ($http, $q) {
  let parseData = {};
  var newArray = []

  return {
    // setData : (newArray) => {
    //   return $q.all(newArray)
    //     .then(function(data) {
    //       console.log("data", data);
    //       for (var i = 0; i < data.length; i++) {
    //         let text = data[i].data
    //         let parser = new DOMParser();
    //         let xmlDoc = parser.parseFromString(text, 'text/xml');
    //         console.log("xmlDoc", xmlDoc)
    //         parseData[i]= xmlDoc.getElementsByTagName("item")
    //         console.log("parseData", parseData);
    //       }
    //
    //       return parseData
    //     })
    // },//setData
    getData : () => {
      return parseData;
    },//getData
    setData : (arrayofTeams) => {
      console.log("arrayofTeams", arrayofTeams);
      for (var i = 0; i < arrayofTeams.length; i++) {
        // newArray.push(arrayofTeams[i].teamname)
        newArray.push($http.get(arrayofTeams[i].mlb))
        console.log("arrayofTeams[i].teamname", newArray);
      }
      return $q.all(newArray)
        .then(function(data) {
          console.log("data", data);
          for (var i = 0; i < data.length; i++) {
            let text = data[i].data
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(text, 'text/xml');
            console.log("xmlDoc", xmlDoc)
            parseData[i]= xmlDoc.getElementsByTagName("item")
            console.log("parseData", parseData);
          }
            return parseDataTest
        })
    }//setDataTest
  } //return
})//factory

app.factory('getMLBFactory', function ($http, $q) {
  let parseData = {};
  return {
    setData : (newArray) => {
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

          return parseData
        })
    },//setData
    getData : () => {
      return parseData;
    }
  } //return
})//factory

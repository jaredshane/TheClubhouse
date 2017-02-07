app.factory('getMLBFactory', function ($http) {
  return{
    getData : (url) => {
      return $http
        .get('http://mlb.mlb.com/partnerxml/gen/news/rss/atl.xml')
        .then(function(data) {
          console.log("data", data);

          let text, parser, xmlDoc;

          text = data.data
          parser = new DOMParser();
          xmlDoc = parser.parseFromString(text, 'text/xml');
          console.log("xmlDoc", xmlDoc)
          return xmlDoc.getElementsByTagName("item")
        })
    }//getData
  } //return
})//factory

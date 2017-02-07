console.log("mainCtrl");

app.controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {

  $http
    .get('http://mlb.mlb.com/partnerxml/gen/news/rss/stl.xml')
    .then(function(data) {
      console.log("data", data);

      let text, parser, xmlDoc;

      text = data.data

      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, 'text/xml');
      console.log("xmlDoc", xmlDoc);

      let whatever = xmlDoc.getElementsByTagName("item")
      console.log("whatever[1]", whatever[1]);

      //gets the title of the first item and sets it to the scope
      let title = whatever[1].getElementsByTagName('title')[0].innerHTML
      console.log("title", title)
      $scope.mlbtitle =  title;

      let description = whatever[1].getElementsByTagName('description')[0].innerHTML
      console.log("description", description);
      $scope.mlbdescription = description

      let link = whatever[1].getElementsByTagName('link')[0].innerHTML
      console.log("link", link);
      $scope.mlblink = link

  // var xml = "http://mlb.mlb.com/partnerxml/gen/news/rss/stl.xml",
  //   xmlDoc = $.parseXML( xml ),
  //   $xml = $( xmlDoc );
  //   console.log(xmlDoc)


    })

}])

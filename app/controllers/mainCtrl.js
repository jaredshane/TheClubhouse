console.log("mainCtrl");

app.controller('MainCtrl', function ($scope, $http, getMLBFactory) {

  // $http
  //   .get('http://mlb.mlb.com/partnerxml/gen/news/rss/atl.xml')
  $scope.test = (url) => {
    getMLBFactory.getData(url)
      .then(function (lists) {
        console.log(lists)
        $scope.lists = lists
      })

  }

  $scope.test()


  $http
    .get('mockdb/teamdb.json')
    .then(function (data) {
      console.log('mockdb', data.data.teams.Atlanta)
    })


      //
      // let whatever = xmlDoc.getElementsByTagName("item")
      // console.log("whatever", whatever);
      //
      // let blah = whatever[1].getElementsByTagName('')

      //gets the title of the first item and sets it to the scope
      // let title = whatever[1].getElementsByTagName('title')[0].innerHTML
      // console.log("title", title)
      // $scope.mlbtitle =  title;
      //
      // let description = whatever[1].getElementsByTagName('description')[0].innerHTML
      // console.log("description", description);
      // $scope.mlbdescription = description
      //
      // let link = whatever[1].getElementsByTagName('link')[0].innerHTML
      // console.log("link", link);
      // $scope.mlblink = link

  // var xml = "http://mlb.mlb.com/partnerxml/gen/news/rss/stl.xml",
  //   xmlDoc = $.parseXML( xml ),
  //   $xml = $( xmlDoc );
  //   console.log(xmlDoc)


    // })

})

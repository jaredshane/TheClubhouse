console.log("mainCtrl");


app.controller('MainCtrl', function ($scope, getMLBFactory, getTeamFactory) {

  // $http
  //   .get('http://mlb.mlb.com/partnerxml/gen/news/rss/atl.xml')
  $scope.test = (test2) => {
    console.log("test2", test2);
    getMLBFactory.getData(test2)
      .then(function (lists) {
        console.log(lists)
        $scope.lists = lists
      })

  }

  $scope.test2 = () => {
    getTeamFactory.getTeam()
      .then(function (team) {
        console.log(team)
        $scope.test(team)

      })
  }

  $scope.test2()








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
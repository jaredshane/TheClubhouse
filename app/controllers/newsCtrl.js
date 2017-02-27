
app.controller('NewsCtrl', function ($scope, getMLBFactory, getTeamFactory, getMLBTRFactory, getRedditFactory, $location) {



    let dataArray = []
    let mlbArray = []
    let teamNameArray = []
    let mlbtrArray = []
    let tradeArray = []
    let redditArray = []
    let newRedditArray = []


    $(document).ready(function(){
      $('.collapsible').collapsible();
      $('ul.tabs').tabs();
    });



    let datafromFactory = getMLBFactory.getData()
    dataArray.push(datafromFactory)



    for (var j in dataArray[0]) {

      mlbArray.push(dataArray[0][j].rss.channel)
      $scope.lists = mlbArray
    }


    let datafromMLBTRFactory = getMLBTRFactory.getData()
    mlbtrArray.push(datafromMLBTRFactory)


    for (var l in mlbtrArray[0]) {

      tradeArray.push(mlbtrArray[0][l].rss.channel)
      $scope.mlbtrData = tradeArray
    }


    let datafromRedditFactory = getRedditFactory.getData()
    redditArray.push(datafromRedditFactory)
    console.log("redditArray[0]", redditArray[0]);
    $scope.redditData = redditArray[0]


    $scope.backtoTeams = () => {
      getMLBTRFactory.clearData()
      getMLBFactory.clearData()
      getRedditFactory.clearData()
      $location.url("/teams")
    }


    //
    // $scope.assignTeamName = function(teamCode) {
    //   if (teamNameArray.includes(teamCode)) {
    //     return
    //   }
    //   var team;
    //   if (teamCode === "atl") {
    //     team = "Atlanta Braves";
    //     teamNameArray.push(teamCode)
    //     console.log("teamNameArray", teamNameArray);
    //   }
    //   else if (teamCode === "sln") {
    //     team = "St. Louis Cardinals";
    //     console.log("teamNameArray", teamNameArray);
    //     teamNameArray.push(teamCode)
    //   }
    //   console.log("team", team);
    //   return team;
    // }










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

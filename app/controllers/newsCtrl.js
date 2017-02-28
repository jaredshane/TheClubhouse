
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
    $scope.redditData = redditArray[0]


    $scope.backtoTeams = () => {
      getMLBTRFactory.clearData()
      getMLBFactory.clearData()
      getRedditFactory.clearData()
      $location.url("/teams")
    }




})

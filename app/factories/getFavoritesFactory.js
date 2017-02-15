app.factory('getFavoritesFactory', function($http){
   return {
     getURL : () => {
       return $http.get('https://the-clubhouse-1f0b3.firebaseio.com/user/.json')
     }, //getURL
     setFavorites : (arrayofTeams) => {
       $http.put('https://the-clubhouse-1f0b3.firebaseio.com/user/.json', arrayofTeams)
       .then(function (res){
         console.log("res", res);
       })
     }
   } //return
})

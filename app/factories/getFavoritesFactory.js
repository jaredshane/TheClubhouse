app.factory('getFavoritesFactory', function($http){
   return {
     getURL : () => {
       return $http.get('https://the-clubhouse-1f0b3.firebaseio.com/user/.json')
     }, //getURL
     setFavorites : (arrayofTeams) => {
       return $http.put('https://the-clubhouse-1f0b3.firebaseio.com/user/.json', arrayofTeams)
     }
   } //return
})

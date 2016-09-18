console.log("angular post factory")

app.factory('PostFactory',['$http', function($http){
    var factory = {}
    
    
    factory.addListing = function(data, callback) {
       console.log('factory fired');
       $http.post("/new", data).then(callback)
       factory.newListing = data;
    };

    factory.getSearchResults = function(data, callback) {
       var r;
       console.log('factory fired');
       $http.post('/search', data).then(function(result){
           r = result.data;
           callback(r);
           console.log(r)
       });
       
       //var results = [{name:"listing1", id:'1'}, {name: "listing2", id:'2'}]; //populate db
       //callback(results)
       console.log(r)
       factory.results = r;
    };
    
    factory.storeCurrent = function(item){
        factory.currentListing = item;
    }
    
    factory.getCurrent = function() {
        return factory.currentListing;
    }

    factory.show = function(id,callback){
      console.log('show factory function fired')
      $http.get('/show/'+id).then(callback)
    }
    
   return factory;

}])

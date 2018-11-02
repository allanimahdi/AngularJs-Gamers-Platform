var services = angular.module('gamerApp.services.authentification', []);


/*services.factory('Entry', function ($resource){
    
     return function(apiKey){
        return $resource('http://localhost:18080/pitwin-web/rest/subscrips/getSubscByidCustomer/:id', {id:'@id'}, {
          query: { method: 'GET', headers: {'Authorization': apiKey} }
        });
      }
});*/


services.factory('authentificationFactory', ['$http', function ($http){
    var dataFactory = {};
    dataFactory.login = function (username, password){
        return $http.get('http://localhost:18080/gamer-web/gamer/gamers/'+username+'/'+password);
    };
    
    return dataFactory;
    
}]);


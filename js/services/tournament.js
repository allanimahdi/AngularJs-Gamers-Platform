

angular.module('gamerApp.services.tournament',[]).factory('Tournament',function($resource){
    return $resource('http://localhost:18080/gamer-web/gamer/tournaments/:id',{id:'@id'},{
        update:{
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});


angular.module('gamerApp.services.gamer',[]).factory('Gamer',function($resource){
    return $resource('http://localhost:18080/gamer-web/gamer/gamers/:id',{id:'@id'},{
        update:{
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
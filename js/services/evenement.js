

angular.module('gamerApp.services.evenement',[]).factory('Evenement',function($resource){
    return $resource('http://localhost:18080/gamer-web/gamer/events/:id',{id:'@id'},{
        update:{
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
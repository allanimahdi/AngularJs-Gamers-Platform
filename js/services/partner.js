

angular.module('gamerApp.services.partner',[]).factory('Partner',function($resource){
    return $resource('http://localhost:18080/gamer-web/gamer/partners/:id',{id:'@id'},{
        update:{
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
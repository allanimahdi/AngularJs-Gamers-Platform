

angular.module('gamerApp.controllers.gamer',[]).controller('GamerListController',function($scope,$state,popupService,$window,Gamer){
    $scope.gamers=Gamer.query();
    
    $scope.deleteGamer=function(gamer){
        if(popupService.showPopup('Really delete this?')){
            gamer.$delete(function(){
                $window.location.href='';
            
            });
        }
    }
}).controller('GamerViewController',function($scope,$stateParams,Gamer){
    $scope.gamer=Gamer.get({id:$stateParams.id});
}).controller('GamerCreateController',function($scope,$state,$stateParams,Gamer){
    $scope.gamer=new Gamer();
    $scope.addGamer=function(){
        $scope.gamer.$save(function(){
            $state.go('authentification');
        });
    }
}).controller('GamerEditController',function($scope,$state,$stateParams,Gamer){
    $scope.updateGamer=function(){
            $scope.gamer.$update(function(){
                $state.go('gamers');
            });
        };
        $scope.loadGamer=function(){
            $scope.gamer=Gamer.get({id:$stateParams.id});
        };
        $scope.loadGamer();
    
});


angular.module('gamerApp.controllers.tournament',[]).controller('TournamentListController',function($scope,$state,popupService,$window,Tournament){
    $scope.tournaments=Tournament.query();
    
    $scope.deleteTournament=function(tournament){
        if(popupService.showPopup('Really delete this?')){
            tournament.$delete(function(){
                $window.location.href='';
            
            });
        }
    }
}).controller('TournamentViewController',function($scope,$stateParams,Tournament){
    $scope.tournament=Tournament.get({id:$stateParams.id});
}).controller('TournamentCreateController',function($scope,$state,$stateParams,Tournament){
    $scope.tournament=new Tournament();
    $scope.addTournament=function(){
        $scope.tournament.$save(function(){
            $state.go('tournaments');
        });
    }
}).controller('TournamentEditController',function($scope,$state,$stateParams,Tournament){
    $scope.updateTournament=function(){
            $scope.tournament.$update(function(){
                $state.go('tournaments');
            });
        };
        $scope.loadTournament=function(){
            $scope.tournament=Tournament.get({id:$stateParams.id});
        };
        $scope.loadTournament();
    
});
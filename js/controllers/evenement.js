

angular.module('gamerApp.controllers.evenement',[]).controller('EvenementListController',function($scope,$state,popupService,$window,Evenement){
    $scope.evenements=Evenement.query();
    
    $scope.deleteEvenement=function(evenement){
        if(popupService.showPopup('Really delete this?')){
            evenement.$delete(function(){
                $window.location.href='';
            
            });
        }
    }
}).controller('EvenementViewController',function($scope,$stateParams,Evenement,$sce){
    $scope.evenement=Evenement.get({id:$stateParams.id});

    $scope.mapsUrl = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyDSgGFBVCs131XfXk03kS8nYPMU2jV1yQQ&q='+$scope.evenement.lieu);
}).controller('EvenementCreateController',function($scope,$state,$stateParams,Evenement){
    $scope.evenement=new Evenement();
    $scope.addEvenement=function(){
        $scope.evenement.$save(function(){
            $state.go('evenements');
        });
    }
}).controller('EvenementEditController',function($scope,$state,$stateParams,Evenement){
    $scope.updateEvenement=function(){
            $scope.evenement.$update(function(){
                $state.go('evenements');
            });
        };
        $scope.loadEvenement=function(){
            $scope.evenement=Evenement.get({id:$stateParams.id});
        };
        $scope.loadEvenement();
    
});
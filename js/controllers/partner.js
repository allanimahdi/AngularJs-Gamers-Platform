

angular.module('gamerApp.controllers.partner',[]).controller('PartnerListController',function($scope,$state,popupService,$window,Partner){
    $scope.partners=Partner.query();
    
    $scope.deletePartner=function(partner){
        if(popupService.showPopup('Really delete this?')){
            partner.$delete(function(){
                $window.location.href='';
            
            });
        }
    }
}).controller('PartnerViewController',function($scope,$stateParams,Partner){
    $scope.partner=Partner.get({id:$stateParams.id});

    $scope.exportPdf =function(){
        var doc = new jsPDF();
        doc.text(80, 20, 'Partner details');
  
        doc.text(20, 40, 'Partner name:'+$scope.partner.name);
        doc.text(20, 50, 'Partner mail:'+$scope.partner.mail);
        doc.text(20, 60, 'Partner description:'+$scope.partner.description);
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        doc.save('Test.pdf');        
    }
}).controller('PartnerCreateController',function($scope,$state,$stateParams,Partner){
    $scope.partner=new Partner();
    $scope.addPartner=function(){
        $scope.partner.$save(function(){
            $state.go('partners');
        });
    }
}).controller('PartnerEditController',function($scope,$state,$stateParams,Partner){
    $scope.updatePartner=function(){
            $scope.partner.$update(function(){
                $state.go('partners');
            });
        };
        $scope.loadPartner=function(){
            $scope.partner=Partner.get({id:$stateParams.id});
        };
        $scope.loadPartner();
    
});
var controllers = angular.module('gamerApp.controllers.authentification', []);

controllers.controller('authentificationCtrl', function ($scope, authentificationFactory, $location, $cookies){
    
    $scope.authentification = function (username, password){
        
        authentificationFactory.login(username, password).success(function (data){

            /*if(data != ""){
                $location.path('/subscriptions');
                $scope.d = data;
                $cookies.put('id', data.id_Person);
                $cookies.put('mail', data.email_Person);
                $cookies.put('nom', data.nom_Person);
                $cookies.put('prenom', data.prenom_Person);
                console.log($cookies.get('mail')+" / "+$cookies.get('id'));
            }*/
    
            $location.path('/profile/'+data.id+'/view');
        });
    }
});


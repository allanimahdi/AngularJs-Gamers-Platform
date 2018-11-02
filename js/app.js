angular.module('gamerApp',['ui.router',
    'ngResource',
    'gamerApp.controllers.gamer',
    'gamerApp.controllers.evenement',
    'gamerApp.controllers.partner',
    'gamerApp.controllers.authentification',
    'gamerApp.controllers.tournament',
    'gamerApp.services.gamer',
    'gamerApp.services.evenement',
    'gamerApp.services.partner',
    'gamerApp.services.authentification',
    'gamerApp.services.tournament',
    , 'ngCookies'])
;

angular.module('gamerApp').config(function($stateProvider,$httpProvider){

    //Gamer routes
    $stateProvider.state('authentification',{
        url:'/',
        templateUrl:'partials/authentification/home.html',
        controller:'authentificationCtrl'
    }).state('subscriptions',{
        url:'/subscriptions',
        templateUrl:'partials/authentification/subscriptions.html',
    });

    //Gamer routes
    $stateProvider.state('gamers',{
        url:'/gamers',
        templateUrl:'partials/gamer/gamers.html',
        controller:'GamerListController'
    }).state('viewGamer',{
        url:'/profile/:id/view',
        templateUrl:'partials/gamer/gamer-view.html',
        controller:'GamerViewController'
    }).state('newGamer',{
        url:'/gamers/new',
        templateUrl:'partials/gamer/gamer-add.html',
        controller:'GamerCreateController'
    }).state('editGamer',{
        url:'/gamers/:id/edit',
        templateUrl:'partials/gamer/gamer-edit.html',
        controller:'GamerEditController'
    });
    
    //Evenement routes
    $stateProvider.state('evenements',{
            url:'/evenements',
            templateUrl:'partials/evenement/evenements.html',
            controller:'EvenementListController'
        }).state('viewEvenement',{
            url:'/evenements/:id/view',
            templateUrl:'partials/evenement/evenement-view.html',
            controller:'EvenementViewController'
        }).state('newEvenement',{
            url:'/evenements/new',
            templateUrl:'partials/evenement/evenement-add.html',
            controller:'EvenementCreateController'
        }).state('editEvenement',{
            url:'/evenements/:id/edit',
            templateUrl:'partials/evenement/evenement-edit.html',
            controller:'EvenementEditController'
        });    

        //Partner routes
    $stateProvider.state('partners',{
        url:'/partners',
        templateUrl:'partials/partners/partners.html',
        controller:'PartnerListController'
    }).state('viewPartner',{
        url:'/partners/:id/view',
        templateUrl:'partials/partners/partner-view.html',
        controller:'PartnerViewController'
    }).state('newPartner',{
        url:'/partners/new',
        templateUrl:'partials/partners/partner-add.html',
        controller:'PartnerCreateController'
    }).state('editPartner',{
        url:'/partners/:id/edit',
        templateUrl:'partials/partners/partner-edit.html',
        controller:'PartnerEditController'
    });        

    //Tournaments routes
    $stateProvider.state('tournaments',{
        url:'/tournaments',
        templateUrl:'partials/tournament/tournaments.html',
        controller:'TournamentListController'
    }).state('viewTournament',{
        url:'/tournaments/:id/view',
        templateUrl:'partials/tournament/tournament-view.html',
        controller:'TournamentViewController'
    }).state('newTournament',{
        url:'/tournaments/new',
        templateUrl:'partials/tournament/tournament-add.html',
        controller:'TournamentCreateController'
    }).state('editTournament',{
        url:'/tournaments/:id/edit',
        templateUrl:'partials/tournament/tournament-edit.html',
        controller:'TournamentEditController'
    });    
}).run(function($state){
    $state.go('authentification');
});
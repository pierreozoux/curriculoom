(function () {

    'use strict';

    angular.module('curriculoom', [
        'ui.bootstrap',
        'ngMessages',
        'validation.match',
        'ui.router',
        'curriculoom.profile'
    ]);


    angular.module('curriculoom').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        
        // HTML5 mode
        $locationProvider.html5Mode(true);
        
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "modules/dashboard/dashboard.html"
            }).state('profile-user-edit', {
                url: "/profile/user-edit",
                templateUrl: "modules/profile/user.edit.html",
                controller: 'EditUserController'
            });
    });


})();
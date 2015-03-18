(function () {

    'use strict';

    angular.module('curriculoom', [
        'ui.bootstrap',
        'ngMessages',
        'validation.match',
        'ui.router',
        'curriculoom.profile',
        'curriculoom.dashboard'
    ]);


    angular.module('curriculoom').config(function ($locationProvider, $urlRouterProvider) {
        
        // HTML5 mode
        $locationProvider.html5Mode(true);
        
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        
    });


})();
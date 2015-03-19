(function () {
    'use strict';

    angular.module('curriculoom', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'curriculoom.profile',
    'curriculoom.dashboard'
]);

    angular.module('curriculoom').config(function ($locationProvider, $urlRouterProvider) {

        // HTML5 mode
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
    });

}());
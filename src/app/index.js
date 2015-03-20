(function () {
    'use strict';

    angular.module('curriculoom', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'curriculoom.profile',
    'curriculoom.dashboard',
    'curriculoom.projects',
    'js-data',
    'btford.socket-io'
]);

    angular.module('curriculoom').config(function ($locationProvider, $urlRouterProvider, DSProvider) {

        // HTML5 mode
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");

        // configure js-data
        DSProvider.defaults.basePath = '/api';
        DSProvider.defaults.idAttribute = '_id';

    });

}());
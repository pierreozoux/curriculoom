(function () {

    'use strict';

    /* déclaration du module et de ses dépendances */
    angular.module('curriculoom.dashboard', ['ui.router']);

    angular.module('curriculoom.dashboard').config(function ($stateProvider) {

        // routes configuration
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html'
            });
    });

})();
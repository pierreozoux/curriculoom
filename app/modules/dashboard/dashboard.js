(function () {

    'use strict';

    /* déclaration du module et de ses dépendances */
    angular.module('curriculoom.dashboard', []);

    angular.module('curriculoom.dashboard').config(function ($stateProvider) {

        // routes configuration
        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "modules/dashboard/dashboard.html"
            });
    });

})();
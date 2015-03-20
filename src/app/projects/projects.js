(function () {

    'use strict';

    /* déclaration du module et de ses dépendances */
    angular.module('curriculoom.projects', [
        'ui.router',
        'ngResource',
        'curriculoom.form'
    ]);

    angular.module('curriculoom.projects').config(function ($stateProvider) {

        // routes configuration
        $stateProvider
            .state('projects', {
                url: '/projects',
                templateUrl: 'app/projects/projects.html',
                controller: 'ProjectsController'
            });
    });

})();
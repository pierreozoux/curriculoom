(function () {
    'use strict';

    // with NG-RESOURCES

    angular.module('curriculoom.projects').factory('ProjectResource', ProjectResource);

    function ProjectResource($resource) {
        return $resource('/api/projects/:id', {
            id: '@_id'
        }, {
            'update': {
                method: 'PUT'
            }
        });
    }

    // with JS-DATA

    angular.module('curriculoom.projects').run(function (DS) {

        return DS.defineResource('projects');

    });

}());
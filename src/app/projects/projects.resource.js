(function () {
    'use strict';

    angular.module('curriculoom.projects').factory('ProjectResource', ProjectResource);

    function ProjectResource($resource) {
        return $resource('/api/projects/:id', { id:'@_id' });
    }

}());
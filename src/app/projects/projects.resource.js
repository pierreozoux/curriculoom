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
    angular.module('curriculoom.projects').run(function (DS, socketService) {

        DS.defineResource('projects');

        // synchronize collection using web sockets
        // save events
        socketService.socket.on('project:save', function (project) {

            console.debug('Socket.io save event received from server for project "%s".', project._id);

            DS.findAll('projects').then(function (projects) {

                var p = projects.reduce(function (p, current) {
                    if (project._id === current._id) {
                        return current;
                    }
                    return p;
                }, null);

                if (p === null) {
                    projects.push(project);
                }
            });
        });

        // remove events
        socketService.socket.on('project:remove', function (project) {

            console.debug('Socket.io remove event received from server for project "%s".', project._id);

            DS.findAll('projects').then(function (projects) {

                var p = projects.reduce(function (index, current) {
                    if (project._id === current._id) {
                        DS.findAll('projects').then(function (projects) {
                            projects.splice(index, 1);
                        });
                    }
                    return index++;;
                }, 0);

            });
        });
    });

}());
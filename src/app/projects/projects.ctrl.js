(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.projects').controller('ProjectsController', ProjectsController);

    function ProjectsController($scope) {

        // scope attributes 
        $scope.projects = [];
        $scope.newProject = {};

        // scope methods
        $scope.createProject = createProject;
        $scope.removeProject = removeProject;

        init();

        function init() {

            $scope.projects.push({
                name: 'projet 1',
                description: 'description du projet 1',
                active: true,
                start: new Date(),
                end: null,
                size: '10',
                role: 'tester'
            });
            $scope.projects.push({
                name: 'projet 2',
                description: 'description du projet 2',
                active: false,
                start: new Date(),
                end: new Date(),
                size: '44',
                role: 'developper'
            });

        }

        function createProject(projectForm, newProject) {

            if (projectForm.$valid) {
                // form is valid

                // create a new project
                $scope.projects.push(newProject);

                // reset form
                $scope.newProject = {};
                projectForm.$setPristine();
                projectForm.$setUntouched();
            }

        }

        function removeProject(project) {
            var index = $scope.projects.indexOf(project);
            if (index > -1) {
                $scope.projects.splice(index, 1);
            }
        }

    }
}());
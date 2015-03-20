(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.projects').controller('ProjectsController', ProjectsController);

    function ProjectsController($scope, ProjectResource) {

        // scope attributes 
        $scope.projects = [];
        $scope.newProject = {};

        // scope methods
        $scope.createProject = createProject;
        $scope.removeProject = removeProject;

        init();

        function init() {

            $scope.projects = ProjectResource.query();

        }

        function createProject(projectForm, newProject) {

            if (projectForm.$valid) {
                // form is valid

                // create a new project
                var project = new ProjectResource();
                angular.extend(project, newProject);
                project.$save(function () {
                    $scope.projects.push(project);
                });

                // reset form
                $scope.newProject = {};
                projectForm.$setPristine();
                projectForm.$setUntouched();
            }

        }

        function removeProject(project) {
            project.$delete(function () {
                var index = $scope.projects.indexOf(project);
                if (index > -1) {
                    $scope.projects.splice(index, 1);
                }
            });
        }

    }
}());
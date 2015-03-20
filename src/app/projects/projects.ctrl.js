(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.projects').controller('ProjectsController', ProjectsController);

    function ProjectsController($scope, ProjectResource) {

        // scope attributes 
        $scope.projects = [];
        $scope.projectInEdition = {};

        // scope methods
        $scope.createProject = createProject;
        $scope.editProject = editProject;
        $scope.removeProject = removeProject;

        init();

        function init() {

            // $scope.projects = ProjectResource.query();

            $scope.projects = ProjectResource.query(function (projects) {
                $scope.projects = projects;
            });

        }

        function createProject(projectForm, projectInEdition) {

            if (projectForm.$valid) {
                // form is valid

                if (projectInEdition._id) {
                    ProjectResource.update({
                        id: projectInEdition._id
                    }, projectInEdition, function (project) {
                        // replace project in array
                        $scope.projects.reduce(function (index, currentProject) {
                            if (currentProject._id === project._id) {
                                $scope.projects[index] = project;
                            }
                            return index++;
                        }, 0);
                    });

                } else {

                    // create a new project
                    var project = new ProjectResource(projectInEdition);
                    
                    project.$save(function () {
                        $scope.projects.push(project);
                    });
                }

                // reset form
                projectForm.$setUntouched();
                projectForm.$setPristine();
                $scope.projectInEdition = {};
            }

        }

        function editProject(project) {
            $scope.projectInEdition = angular.copy(project);
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
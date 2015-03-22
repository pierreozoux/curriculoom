(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.projects').controller('ProjectsController', ProjectsController);

    function ProjectsController($scope, ProjectResource, DS) {

        // scope attributes 
        $scope.projects = [];
        $scope.projectInEdition = {};

        // scope methods
        $scope.createProject = createProject;
        $scope.editProject = editProject;
        $scope.removeProject = removeProject;

        init();

        function init() {

            // with NG-RESOURCE:
            /* $scope.projects = ProjectResource.query(function (projects) {
                 $scope.projects = projects;
             });*/

            // with JS-DATA:
            loadProjects();

        }

        function createProject(projectForm, projectInEdition) {

            if (projectForm.$valid) {
                // form is valid

                if (projectInEdition._id) {

                    // update an existing project
                    console.log('Update project "%s".', projectInEdition.name);

                    // with NG-RESOURCE:
                    /* 
                    ProjectResource.update({
                        id: projectInEdition._id
                    }, projectInEdition, function (project) {
                        // replace project in array
                        replaceInArray($scope.projects, project);
                    });
                    
                    */

                    // with JS-DATA:

                    DS.update('projects', projectInEdition._id, projectInEdition).then(function (project) {
                        // update scope
                        loadProjects();
                    });

                } else {

                    // create a new project
                    console.log('Create a new project "%s".', projectInEdition.name);

                    // with NG-RESOURCE:
                    /* var project = new ProjectResource();

                            angular.extend(project, projectInEdition);

                            project.$save(function (project) {
                                $scope.projects.push(project);
                            });*/

                    // with JS-DATA:

                    DS.create('projects', projectInEdition).then(function (project) {
                        $scope.projects.push(project);
                    });


                }

                // reset form
                projectForm.$setUntouched();
                projectForm.$setPristine();
                $scope.projectInEdition = {};
            }

        }

        function loadProjects() {
            DS.findAll('projects').then(function (projects) {
                $scope.projects = projects;
            });
        }

        function replaceInArray(items, item) {
            items.reduce(function (index, current) {
                if (current._id === item._id) {
                    items[index] = item;
                }
                return index++;
            }, 0);
        }

        function editProject(project) {
            $scope.projectInEdition = angular.copy(project);
        }

        function removeProject(project) {
            // with NG-RESOURCE:
            /* project.$delete(function () {
                var index = $scope.projects.indexOf(project);
                if (index > -1) {
                    $scope.projects.splice(index, 1);
                }
            });*/

            // with JS-DATA:
            DS.destroy('projects', project._id).then(function (project) {
                
            });
        }

    }
}());
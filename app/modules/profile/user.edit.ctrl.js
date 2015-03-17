(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.profile').controller('EditUserController', EditUserController);

    function EditUserController($scope) {

        // scope attributes 
        $scope.user = {};

        // scope methods
        $scope.getFullName = getFullName;
        $scope.reset = reset;
        $scope.addTag = addTag;

        init();

        function init() {
            $scope.reset();
        }

        function getFullName() {
            return $scope.user.firstName + ' ' + $scope.user.lastName;
        }

        function reset() {
            $scope.user = {
                firstName: 'John',
                lastName: 'Smith',
                tags: ['java', 'tests', 'gestion de projets', 'php', 'hybris'],
                email: 'john.smith@sqli.com',
                age: 25,
                location: 'Rabat, Morocco',
                gender: 'male',
                currentlyAvailable: true,
                newAvailaibilityDate: null,
                expectedSalary: 1000000
            };
        }
        
        function addTag(newTag){
            $scope.user.tags.push(newTag);
            $scope.newTag = '';
        }

    }

}());
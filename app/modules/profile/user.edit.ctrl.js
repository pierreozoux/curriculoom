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
        $scope.isValidTag = isValidTag;

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
                tags: [],
                email: 'john.smith@sqli.com',
                age: 25,
                location: 'Rabat, Morocco',
                gender: 'male',
                currentlyAvailable: true,
                newAvailaibilityDate: null,
                expectedSalary: 1000000
            };
        }

        function addTag(newTag) {
            if (isValidTag(newTag)) {
                $scope.user.tags.push(newTag);
                $scope.newTag = '';
            }
        }

        function isValidTag(newTag) {
            return (newTag && newTag.trim().length !== 0 && $scope.user.tags.indexOf(newTag) === -1);
        }
    }
}());
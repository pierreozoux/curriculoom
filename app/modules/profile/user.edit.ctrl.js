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
        
        $scope.maxLanguages = 3;

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
                languages: [],
                projects: [],
                email: 'john.smith@sqli.com',
                age: null,
                location: 'Rabat, Morocco',
                gender: 'male',
                currentlyAvailable: true,
                newAvailaibilityDate: null,
                expectedSalary: 1000000
            };
        }

        
    }
}());
(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.profile').controller('EditUserController', EditUserController);

    function EditUserController($scope) {

        // scope attributes 
        $scope.firstName;
        $scope.lastName;

        // scope methods
        $scope.getFullName = getFullName;
        $scope.reset = reset;

        init();

        function init() {
            $scope.reset();
        }

        function getFullName() {
            return $scope.firstName + ' ' + $scope.lastName;
        }

        function reset() {
            $scope.firstName = 'John';
            $scope.lastName = 'Smith';
        }

    }

}());
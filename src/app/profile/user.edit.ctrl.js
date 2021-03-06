(function () {

    'use strict';

    /* déclaration du controlleur dans le module */
    angular.module('curriculoom.profile').controller('EditUserController', EditUserController);

    function EditUserController($scope, passwordService) {

        // scope attributes 
        $scope.user = {};
        $scope.maxLanguages = 3;
        $scope.mapCenter;

        // scope methods
        $scope.getFullName = getFullName;
        $scope.reset = reset;
        $scope.checkStrongness = passwordService.checkStrongness;
        $scope.mapClicked = mapClicked;

        init();

        function init() {
            $scope.reset();
            
            var res = passwordService.checkStrongness('toto');

             console.log('Robustesse: ', res);
            
            $scope.$watch('user.location', function (location, old) {
                if (location && location.latitude) {
                    $scope.mapCenter = [location.latitude, location.longitude];
                }
            });

            $scope.$watch('mapCenter', function (mapCenter, old) {
                if (mapCenter) {
                    console.log('mapCenter has changed!', mapCenter);
                }
            });

        }

        function getFullName() {
            return $scope.user.firstName + ' ' + $scope.user.lastName;
        }

        function mapClicked(point) {
            console.log('Point clicked:', point);
        }

        function reset() {
            $scope.user = {
                firstName: 'John',
                lastName: 'Smith',
                languages: [],
                projects: [],
                email: 'john.smith@sqli.com',
                age: null,
                location: null,
                gender: null,
                currentlyAvailable: true,
                newAvailaibilityDate: null,
                expectedSalary: 1000000
            };
        }


    }
}());
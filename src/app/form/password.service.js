(function () {
    'use strict';

    angular.module('curriculoom.form').factory('passwordService', passwordService);

    function passwordService() {

        var service = {
            checkStrongness: checkStrongness
        };

        function checkStrongness(password) {
            if (!password || password.length < 4) {
                return 1;
            }

            return 5;

        }

        return service;
    }
}());
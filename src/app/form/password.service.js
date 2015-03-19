(function () {
    'use strict';

    angular.module('curriculoom.form').factory('passwordService', passwordService);

    function passwordService() {

        //var count = 0;
        
        var service = {
            checkStrongness: checkStrongness
        };

        function checkStrongness(password) {

           // count++;
            
            //console.log('checkStrongness calls: ', count);
            
            if (!password || password.length < 4) {
                return 1;
            }

            return 5;

        }

        return service;
    }
}());
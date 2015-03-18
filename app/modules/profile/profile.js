(function () {

    'use strict';

    /* déclaration du module et de ses dépendances */
    angular.module('curriculoom.profile', ['curriculoom.form']);

    angular.module('curriculoom.profile').config(function ($stateProvider) {

        // routes configuration
        $stateProvider
            .state('profile-user-edit', {
                url: "/profile/user-edit",
                templateUrl: "modules/profile/user.edit.html",
                controller: 'EditUserController'
            });
    });

})();
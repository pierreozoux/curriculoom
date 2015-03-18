(function () {

    'use strict';

    /* déclaration du module et de ses dépendances */
    angular.module('curriculoom.profile', [
        'ui.router',
        'curriculoom.form',
        'curriculoom.map'
    ]);

    angular.module('curriculoom.profile').config(function ($stateProvider) {

        // routes configuration
        $stateProvider
            .state('profile-user-edit', {
                url: '/profile/user-edit',
                templateUrl: 'app/profile/user.edit.html',
                controller: 'EditUserController'
            });
    });

})();
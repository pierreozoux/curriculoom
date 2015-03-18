(function () {
    'use strict';

    angular.module('curriculoom.form').directive('cfTagsEdit', cfTagsEdit);

    function cfTagsEdit($timeout) {
        return {
            templateUrl: 'modules/cf-tags-edit/cf-tags-edit.html',
            scope: {
                tags: '='
            },
            link: {
                pre: function preLink($scope, $element, $attrs) {

                    // scope properties


                    // scope methods


                    // init method
                    init();

                    function init() {


                    }

                }
            }
        };
    }
})();
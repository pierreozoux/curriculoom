(function () {
    'use strict';

    angular.module('curriculoom.form').directive('cfShowErrors', cfShowErrors);

    function cfShowErrors($parse) {
        return {
            templateUrl: 'app/form/cf-show-errors/cf-show-errors.html',
            transclude: true,
            scope: {
                formName: '@',
                attributeName: '@'
            },
            link: {
                pre: function preLink($scope, $element, attr, $parent) {

                    $scope.form = $scope.$parent[$scope.formName];
                    
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

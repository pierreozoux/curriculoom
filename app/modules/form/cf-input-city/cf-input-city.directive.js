(function () {
    'use strict';

    angular.module('curriculoom.form').directive('cfInputCity', cfInputCity);

    function cfInputCity($http) {
        return {
            templateUrl: 'modules/form/cf-input-city/cf-input-city.html',
            scope: {
                tags: '=cfTagsEditTags',
                title: '@cfTagsEditTitle',
                max: '@cfTagsEditMax'
            },
            link: {
                pre: function preLink($scope, $element, attributes) {

                    // scope properties

                    // scope methods
                    $scope.getLocation = getLocation;

                    // init method
                    init();

                    function init() {


                    }

                    $scope.selected = undefined;
                    // Any function returning a promise object can be used to load values asynchronously
                    function getLocation(val) {
                        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                            params: {
                                address: val,
                                sensor: false
                            }
                        }).then(function (response) {
                            return response.data.results.map(function (item) {
                                return item.formatted_address;
                            });
                        });
                    };

                }
            }
        };
    }
})();
(function () {
    'use strict';

    angular.module('curriculoom.map').directive('cmMap', cmMap);

    function cmMap() {
        return {
            templateUrl: 'modules/map/cm-map/cm-map.html',
            scope: {
                center: '=',
                click: '&'
            },
            replace: true,
            link: function ($scope, element, attributes) {

                // scope properties

                // scope methods

                // init method
                init();

                function init() {

                    if (!$scope.center) {
                        $scope.center = [51.505, -0.09];
                    }

                    var mapContainer = element.find('div')[0];

                    initMap(mapContainer);
                }

                function initMap(mapContainer) {
                    // create a map in the "map" div, set the view to a given place and zoom
                    var map = L.map(mapContainer).setView($scope.center, 13);

                    // add an OpenStreetMap tile layer
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    map.on('moveend', function () {
                        $scope.center = latlngToArray(map.getCenter());
                        $scope.$apply();
                    });

                    map.on('click', function (e) {
                        var clickedPoint = latlngToArray(e.latlng);
                        console.info('Clicked on ', clickedPoint);
                        if ($scope.click) {
                            $scope.click({
                                point: clickedPoint
                            });
                        }
                    });

                    $scope.$watch('center', function (newCenterValue, oldCenterValue) {
                        if (newCenterValue && newCenterValue.length && newCenterValue.length === 2) {
                            console.info('Center to ', newCenterValue);
                            map.panTo(newCenterValue);
                        }
                    });
                }

                function latlngToArray(latlng) {
                    if (latlng && latlng.lat && latlng.lng) {
                        return [latlng.lat, latlng.lng];
                    }
                    return null;

                }
            }
        };
    }
})();
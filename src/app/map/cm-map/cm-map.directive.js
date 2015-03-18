(function () {
    'use strict';

    angular.module('curriculoom.map').directive('cmMap', cmMap);

    function cmMap() {
        return {
            templateUrl: 'app/map/cm-map/cm-map.html',
            scope: {},
            link: function ($scope, element, attributes) {

                // scope properties

                // scope methods

                // init method
                init();

                function init() {
                    
                    var mapContainer = element.find('div')[0];

                    // create a map in the "map" div, set the view to a given place and zoom
                    var map = L.map(mapContainer).setView([51.505, -0.09], 13);

                    // add an OpenStreetMap tile layer
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                }
            }
        };
    }
})();
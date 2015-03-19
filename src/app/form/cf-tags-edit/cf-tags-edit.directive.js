(function () {
    'use strict';

    angular.module('curriculoom.form').directive('cfTagsEdit', cfTagsEdit);

    function cfTagsEdit() {
        return {
            templateUrl: 'app/form/cf-tags-edit/cf-tags-edit.html',
            scope: {
                tags: '=cfTagsEditTags',
                title: '@cfTagsEditTitle',
                max: '@cfTagsEditMax'
            },
            link: {
                pre: function preLink($scope, $element, attributes) {

                    // scope properties


                    // scope methods
                    $scope.addTag = addTag;
                    $scope.isValidTag = isValidTag;
                    $scope.removeTag = removeTag;
                    $scope.enableAddTag = enableAddTag;

                    // init method
                    init();

                    function init() {

                        console.log('Init directive cfTagsEdit');

                        if (!$scope.tags) {
                            console.warn('Tags has not been set.');
                            $scope.tags = [];
                        }
                        if (!$scope.max) {
                            $scope.max = 5;
                        }
                        if (!$scope.title) {
                            $scope.title = 'Tags';
                        }

                    }

                    function addTag(newTag) {
                        console.log('addTag');
                        if (isValidTag(newTag)) {
                            $scope.tags.push(newTag);
                            $scope.newTag = '';
                        }
                    }

                    function removeTag(tag) {
                        var index = $scope.tags.indexOf(tag);
                        $scope.tags.splice(index, 1);
                    }

                    function isValidTag(newTag) {
                        var isValid = (newTag && newTag.trim().length !== 0 && $scope.tags.indexOf(newTag) === -1);
                        console.log('isValidTag: ', isValid);
                        return isValid;
                    }

                    function enableAddTag() {
                        return $scope.tags.length < $scope.max;
                    }

                }
            }
        };
    }
})();
(function () {
    'use strict';

    angular
        .module('ui.simply.sur')
        .directive('galleryThumbnail', galleryThumbnailDirective);

    function galleryThumbnailDirective() {
        return {

            restrict: 'E',
            controller: 'GalleryThumbnailController',
            controllerAs: 'galleryThmbnailCtrl',
            scope: {
                imageId: '='
            },
            templateUrl: 'thumbnail-directive/thumbnail.directive.html'

        };
    }

})();
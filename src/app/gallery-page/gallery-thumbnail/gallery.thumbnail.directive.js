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
            templateUrl: 'gallery-page/gallery-thumbnail/gallery.thumbnail.html'

        };
    }

})();
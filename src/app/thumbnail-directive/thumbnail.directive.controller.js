(function () {
    'use strict';

    angular
        .module('ui.simply.sur')
        .controller('GalleryThumbnailController', GalleryThumbnailController);

    GalleryThumbnailController.$inject=['$scope', '$uibModal'];

    function GalleryThumbnailController($scope, $uibModal) {
        var vm = this;
        var imageId = $scope.imageId;
        vm.imageUrl = '../resources/img/thumbnail/' + imageId + '.jpg';

        vm.openModalImage = function (imageSrc, imageDescription) {
            $uibModal.open({
                size: 'md',
                templateUrl: "thumbnail-directive/thumbnail.modal.image.html",
                resolve: {
                    imageSrcToUse: function () {
                        return imageSrc;
                    },
                    imageDescriptionToUse: function () {
                        return imageDescription;
                    }
                },
                controller: [
                    "$scope", "imageSrcToUse", "imageDescriptionToUse",
                    function ($scope, imageSrcToUse, imageDescriptionToUse) {
                        $scope.ImageSrc = '../resources/img/'+ imageSrcToUse +'.jpg';
                        return $scope.ImageDescription = imageDescriptionToUse;
                    }
                ]
            });
        };

    }
})();
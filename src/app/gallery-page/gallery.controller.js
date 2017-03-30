(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('GalleryController', GalleryController);

    GalleryController.$inject=['images'];

    function GalleryController(images) {
        var vm = this;

        vm.imageIds = images;
    }
})();
(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('GalleryController', GalleryController);

    GalleryController.$inject=['images', '$state'];

    function GalleryController(images, $state) {
        var vm = this;
        vm.state = $state;
        vm.imageIds = images;

    }
})();
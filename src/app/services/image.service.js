(function () {

    'use strict';

    angular
        .module('ui.simply.sur')
        .service('ImageService', ImageServiceFn);

    ImageServiceFn.$inject = ['$http', '$q'];
    
    function ImageServiceFn($http, $q) {
        var self = this;

        self.getAllImageThumbnails = getAllImageThumbnails;

        function getAllImageThumbnails() {
            var images = ['1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'];

            return images;

        }
    }

})();
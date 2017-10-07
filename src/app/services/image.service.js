(function () {

    'use strict';

    angular
        .module('ui.simply.sur')
        .service('ImageService', ImageServiceFn);

    ImageServiceFn.$inject = ['$http', '$q'];
    
    function ImageServiceFn($http, $q) {
        var self = this;

        self.getGeneralImageThumbnails = getGeneralImageThumbnails;
        self.getRamlilaImageThumbnails = getRamlilaImageThumbnails;

        function getGeneralImageThumbnails() {
            var images = ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12', '13'];

            return images;

        }

        function getRamlilaImageThumbnails() {
            var images = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];

            return images;

        }
    }

})();
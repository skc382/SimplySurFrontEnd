(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('HomeController', HomeController);

    HomeController.$inject = ['$window', '$state'];

    function HomeController($window, $state) {
        var vm = this;

        vm.myInterval = 4000;
        vm.noWrapSlides = false;
        vm.active = 0;
        var slides = vm.slides = [];
        var currIndex = 0;

        init();

        function addSlide(index) {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: getBasePath() + index + '.jpg',
                text1: ['Welcome to Simply Sur', 'Where the light shines bright', 'The light of music'][slides.length % 3],
                text2: ['Wow!!', '', '', ''][slides.length % 4],
                id: currIndex++
            });
        };


        function getBasePath() {
            if ($window.innerWidth < 500) {
                return '../resources/img/lessthan500/';
            }
            return '../resources/img/';
        }

        function init() {
            angular.element($window).on('resize', function () {
                $state.reload();
            });

            for (var i = 103; i >=101; i--) {
                addSlide(i);
            }
        }
    }

})();
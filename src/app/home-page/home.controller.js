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
                text1: ['', 'Where the light shines bright', 'The light of music'][slides.length % 3],
                text2: ['', '', '', ''][slides.length % 3],
                id: currIndex++
            });
        };


        function getBasePath() {
            if (largeVerticalScreenCondition()) {
                if(smallHorizontalScreenCondition()) {
                    return '../resources/img/lessthan300/';
                }
                return '../resources/img/lessthan500/';
            }

            return '../resources/img/';
        }

        function largeVerticalScreenCondition() {
            return (($window.innerWidth < 1025 && $window.innerHeight > 500)
            || ($window.outerWidth < 1025 && $window.innerHeight > 500)
            || (screen.width < 1025 && $window.innerHeight > 500));
        }

        function smallHorizontalScreenCondition() {
            return ($window.innerWidth < 700) || ($window.outerWidth < 700) || (screen.width < 700);
        }

        function init() {
            // angular.element($window).on('resize', function () {
            //     $state.reload();
            // });

            for (var i = 103; i >=101; i--) {
                addSlide(i);
            }
        }
    }

})();
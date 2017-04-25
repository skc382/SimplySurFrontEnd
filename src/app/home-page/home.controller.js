(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;

        vm.myInterval = 1;
        vm.noWrapSlides = false;
        vm.active = 0;
        var slides = vm.slides = [];
        var currIndex = 0;

        init();

        function addSlide(index) {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: '../resources/img/'+index+'.jpg',
                text1: ['Nice image','','Very Cool',''][slides.length % 4],
                text2: ['Wow!!','','',''][slides.length % 4],
                id: currIndex++
            });
        };

        function init() {
            for (var i = 9; i < 12; i++) {
                addSlide(i);
            }
        }
    }

})();
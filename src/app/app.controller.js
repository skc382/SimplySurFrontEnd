(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('AppController', AppController);

    AppController.$inject = ['$window', '$state'];

    function AppController($window, $state) {
        var vm = this;

        vm.isMobile = true;
        vm.silence = false;
        vm.muteClass = 'fa fa-volume-up';

        vm.toggleMute = toggleMute;

        init();

        function init() {
            if(smallHorizontalScreenCondition()) {
                vm.isMobile = true;
            } else {
                vm.isMobile = false;
            }
        }

        function toggleMute() {
            var allaudio = angular.element(document.getElementsByTagName("audio"));

            if(vm.silence) {
                vm.muteClass = 'fa fa-volume-up';

                for (var j = 0; j < allaudio.length; j++) {
                    allaudio[j].muted = false;
                }
                vm.silence = false;
            } else {
                vm.muteClass = 'fa fa-volume-off';

                for (var j = 0; j < allaudio.length; j++) {
                    allaudio[j].muted = true;
                }

                vm.silence = true;
            }
        }

        function largeVerticalScreenCondition() {
            return (($window.innerWidth < 1025 && $window.innerHeight > 500)
            || ($window.outerWidth < 1025 && $window.innerHeight > 500)
            || (screen.width < 1025 && $window.innerHeight > 500));
        }

        function smallHorizontalScreenCondition() {
            return ($window.innerWidth < 700) || ($window.outerWidth < 700) || (screen.width < 700);
        }
    }

})(angular);
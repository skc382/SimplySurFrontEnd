(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('AboutController', AboutController);

    AboutController.$inject=['intro', 'AboutService'];

    function AboutController(intro, AboutService) {
        var vm = this;
        vm.sendEmail = sendEmail

        vm.introduction = intro;

        function sendEmail() {
            AboutService.sendEmail()
        }
    }

})();
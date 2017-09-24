(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('AboutController', AboutController);

    AboutController.$inject = ['intro', 'AboutService'];

    function AboutController(intro, AboutService) {
        var vm = this;
        vm.sendEmail = sendEmail;

        vm.introduction = intro;

        function sendEmail() {
            var payload = {
                name: vm.name,
                email: vm.email,
                subject: vm.subject,
                message: vm.message
            }

            AboutService.sendEmail(payload)
                .then(function (response) {
                    vm.response = response;
                    clear();
                }, function (error) {
                    vm.error = error;
                })
        }

        function clear() {
            vm.name = '';
            vm.email = '';
            vm.subject = '';
            vm.message = '';
        }
    }

})();
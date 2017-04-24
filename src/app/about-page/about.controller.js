(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('AboutController', AboutController);

    AboutController.$inject=['intro'];

    function AboutController(intro) {
        var vm = this;

        vm.introduction = intro;
    }

})();
(function () {
    'use strict';

    angular
        .module('ui.simply.sur')
        .controller('EventCardController', EventCardController);

    EventCardController.$inject = ['$scope'];

    function EventCardController($scope) {
        var vm = this;

        vm.event = $scope.event;


    }

})();
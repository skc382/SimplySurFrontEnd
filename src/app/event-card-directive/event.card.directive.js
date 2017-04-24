(function () {
    'use strict';

    angular
        .module('ui.simply.sur')
        .directive('eventCard', EventCardDirective);

    function EventCardDirective() {
        return {
            restrict: 'E',
            controller: 'EventCardController',
            controllerAs: 'eventCardController',
            scope: {
                event: '='
            },
            templateUrl: 'event-card-directive/event.card.directive.html'
        };
    }

})();
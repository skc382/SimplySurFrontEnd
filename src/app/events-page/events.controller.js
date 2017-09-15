(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('EventsController', EventsController);

    function EventsController() {
        var vm = this;

        vm.events =[
            {
                'date': {
                    'day': 14,
                    'month': 'Oct',
                    'Year': 2017,

                },
                'time': '4 to 10 pm',
                'details': {
                    'title': '<b><u>Ramlila</u></b>',
                    'description':'<a href="https://tinyurl.com/Ramlila2017" target="_blank id="mail-anchor"><b> Buy Tickets Now! </b></a> <br><br>' +
                    'Ramlila is an annual event organised by Simply Sur. <br>' +
                    'This event is re-enactment of the life of <b>Rama</b> according to the ancient Hindu epic <b>Ramayan</b>. <br>' +
                    'The epic recites his childhood along with those of others who are major characters in it, such as Sita, Lakshmana, Ravana and others. ' +
                    'It includes chapters on the marriage of Sita and Rama, the exile of Rama, abduction of Sita by Ravan and the war between Ram and his ' +
                    'army against Ravan and the return of Rama to his homeland.' +
                    '<br><br> <b>SimplySur</b> along with <b>ESHA</b> proudly sponsors and presents this event every year ' +
                    'in <i>Marlboro</i> close to the time of Dussehra and Diwali. This year it is happening on Oct 14th. <br><br>' +
                    '<b><u>Sponsors</u></b> : <br>' +
                    'Anaita Tarapore (K/W),<br>' +
                    ' New York Life Insurance, <br>' +
                    'USA TV NEWS,<br>' +
                    'TV Asia,<br>' +
                    'JEI Learning,<br>' +
                    'Takajum Dance School,<br>' +
                    'TV America,<br>' +
                    'NRIWALA,<br>' +
                    'Design for one,<br>' +
                    'Sanskruti Dance School and Art of Living.'
                }
            }
        ];
    }
})();
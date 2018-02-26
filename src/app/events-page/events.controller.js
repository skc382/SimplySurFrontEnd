(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('EventsController', EventsController);

    function EventsController() {
        var vm = this;

        vm.futureEvents =[
            {
                'date': {
                    'day': 29,
                    'month': 'Apr',
                    'Year': 2018,

                },
                'time': '12:30 pm to 5:30 pm',
                'details': {
                    'title': '<b><u>PHAAG</u></b>',
                    'description':'<a href="https://www.eventbrite.com/e/phaag-holi-festival-tickets-43282829107" ' +
                    'target="_blank id="mail-anchor"><b> Buy Tickets Now! </b></a> <br><br>' +
                    '<b>SIMPLY SUR</b> is back with another event and this is the favourite festival of all. Yes the most awaited event of the year <b>HOLI PARTY</b> <br><br>' +
                    'H - Happiness <br><br>' +
                    'O - Ocassion of forgiveness <br><br>' +
                    'L - Love <br><br>' +
                    'I - Inspiring <br><br>' +
                    'Come join us with your friends and family to celebrate this festival of colors and fun. <br>' +
                    'Whether you are from India or not, you are more than welcome to come to the party and have a great time. <br><br>' +
                    '<b><u>Come and checkout our awesome arrangements : </u></b> <br>' +
                    'FOOD, <br> DHOL,<br> DJ,<br> OPEN SPACE TO PLAY WITH COLORS, <br> SWAGS <br> and much more.'

                }
            }
        ];

        vm.pastEvents =[
            {
                'date': {
                    'day': 14,
                    'month': 'Oct',
                    'Year': 2017,

                },
                'time': '4 to 10 pm',
                'details': {
                    'title': '<b><u>Ramlila</u></b>',
                    'description': 'Ramlila is an annual event organised by Simply Sur. <br>' +
                    'This event is re-enactment of the life of <b>Rama</b> according to the ancient Hindu epic <b>Ramayan</b>. <br>' +
                    'The epic recites his childhood along with those of others who are major characters in it, such as Sita, Lakshmana, Ravana and others. ' +
                    'It includes chapters on the marriage of Sita and Rama, the exile of Rama, abduction of Sita by Ravan and the war between Ram and his ' +
                    'army against Ravan and the return of Rama to his homeland.' +
                    '<br><br> <b>SimplySur</b> along with <b>ESHA</b> proudly sponsors and presents this event every year ' +
                    'in <i>Marlboro</i> close to the time of Dussehra and Diwali. This year it is happening on Oct 14th. <br><br>' +
                    '<b><u>Sponsors</u></b> : <br>' +
                    'Anaita Tarapore (K/W), ' +
                    ' New York Life Insurance, ' +
                    'USA TV NEWS,<br>' +
                    'TV Asia, ' +
                    'JEI Learning, ' +
                    'Takajum Dance School,<br>' +
                    'TV America, ' +
                    'NRIWALA, ' +
                    'Design for one,<br>' +
                    'Sanskruti Dance School and Art of Living.'
                }
            }
        ];
    }
})();
(function () {
    'use strict';

    angular.module('ui.simply.sur').controller('EventsController', EventsController);

    function EventsController() {
        var vm = this;

        vm.events =[
            {
                'date': {
                    'day': 23,
                    'month': 'May',
                    'Year': 2016,

                },
                'time': '07:30 am',
                'details': {
                    'title': 'Event One',
                    'description': 'A wide variaety of food will be available for the guests to indulge in. Our School children will preform '
                    +'various styles of dance and singing. A prize will be given out for the winner. ' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner'
                }
            },
            {
                'date': {
                    'day': 14,
                    'month': 'Sep',
                    'Year': 2017,

                },
                'time': '01:30 pm',
                'details': {
                    'title': 'Event two',
                    'description': 'A wide variaety of food will be available for the guests to indulge in. Our School children will preform '
                    +'various styles of dance and singing. A prize will be given out for the winner'
                }
            },
            {
                'date': {
                    'day': 18,
                    'month': 'May',
                    'Year': 2016,

                },
                'time': '11:30 am',
                'details': {
                    'title': 'Event three',
                    'description': 'A wide variaety of food will be available for the guests to indulge in. Our School children will preform '
                    +'various styles of dance and singing. A prize will be given out for the winner. ' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner' +
                    'various styles of dance and singing. A prize will be given out for the winner'
                }
            }
        ];
    }
})();
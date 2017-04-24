(function () {

    'use strict';

    angular
        .module('ui.simply.sur')
        .service('AboutService', AboutServiceFn);

    AboutServiceFn.$inject = ['$http', '$q'];

    function AboutServiceFn($http, $q) {
        var self = this;

        self.getIntroduction = getIntroduction;

        function getIntroduction() {
            var intro = 'Welcome to Simplysur ( school of Hindustani classical music), started in India in 1996 with the name of ' +
                '<b>Sangeetalya</b>. ' +
                'Since then this school is been promoting Indian music and culture in India as well as in USA. ' +
                'The mail goal of the school is to introduce music lovers to the treasure of classical music. ' +
                'It aims at providing a strong foundation of Hindustani classical music.';
            return intro;

        }
    }

})();
(function () {
    'use strict';

    angular.module('ui.simply.sur', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router'])
        .config(SimplySurConfig);

    SimplySurConfig.$inject=['$stateProvider', '$urlRouterProvider'];

    function SimplySurConfig($stateProvider, $urlRouterProvider) {

        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'homePage/home.page.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        };

        var galleryState = {
            name: 'gallery',
            url: '/gallery',
            templateUrl: 'galleryPage/gallery.page.html',
            controller: 'GalleryController',
            controllerAs: 'galleryCtrl'
        };

        $stateProvider
            .state(homeState)
            .state(galleryState);

        $urlRouterProvider.otherwise('/home');
    }
})();
(function () {
    'use strict';

    angular.module('ui.simply.sur', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router'])
        .config(SimplySurConfig);

    SimplySurConfig.$inject=['$stateProvider', '$urlRouterProvider'];

    function SimplySurConfig($stateProvider, $urlRouterProvider) {

        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'home-page/home.page.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        };

        var galleryState = {
            name: 'gallery',
            url: '/gallery',
            templateUrl: 'gallery-page/gallery.page.html',
            controller: 'GalleryController',
            controllerAs: 'galleryCtrl',
            resolve: {
                images: function (ImageService) {
                    return ImageService.getAllImageThumbnails();
                }
            }
        };

        $stateProvider
            .state(homeState)
            .state(galleryState);

        $urlRouterProvider.otherwise('/home');
    }
})();
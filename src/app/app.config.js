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

        var eventsState = {
            name: 'events',
            url: '/events',
            templateUrl: 'events-page/events.page.html',
            controller: 'EventsController',
            controllerAs: 'eventsCtrl'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: 'about-page/about.page.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl',
            resolve: {
                intro: function (AboutService) {
                    return AboutService.getIntroduction();
                }
            }
        };

        var classesState = {
            name: 'classes',
            url: '/classes',
            templateUrl: 'classes-page/classes.page.html',
            controller: 'ClassesController',
            controllerAs: 'classesCtrl'
        };

        var portfolioState = {
            name: 'portfolio',
            url: '/portfolio',
            templateUrl: 'portfolio-page/portfolio.page.html',
            controller: 'PortfolioController',
            controllerAs: 'portfolioCtrl'
        };


        $stateProvider
            .state(homeState)
            .state(galleryState)
            .state(eventsState)
            .state(aboutState)
            .state(classesState)
            .state(portfolioState);

        $urlRouterProvider.otherwise('/home');
    }
})();
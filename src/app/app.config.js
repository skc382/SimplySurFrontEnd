(function () {
    'use strict';

    angular.module('ui.simply.sur', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router'])
        .config(SimplySurConfig);

    SimplySurConfig.$inject=['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider'];

    function SimplySurConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'home-page/home.page.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        };

        var talentShowcaseGalleryState = {
            name: 'talentshowcase',
            url: '/talentshowcase',
            templateUrl: 'gallery-page/gallery.page.html',
            controller: 'GalleryController',
            controllerAs: 'galleryCtrl',
            resolve: {
                images: function (ImageService) {
                    return ImageService.getGeneralImageThumbnails();
                }
            }
        };

        var ramlilaGalleryState = {
            name: 'ramlila',
            url: '/ramlila',
            templateUrl: 'gallery-page/gallery.page.html',
            controller: 'GalleryController',
            controllerAs: 'galleryCtrl',
            resolve: {
                images: function (ImageService) {
                    return ImageService.getRamlilaImageThumbnails();
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
            .state(talentShowcaseGalleryState)
            .state(ramlilaGalleryState)
            .state(eventsState)
            .state(aboutState)
            .state(classesState)
            .state(portfolioState);

        $uiViewScrollProvider.useAnchorScroll();

        $urlRouterProvider.otherwise('/home');
    }
})();
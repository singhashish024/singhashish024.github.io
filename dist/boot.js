/// <reference path="_all.ts" />
var Portfolio;
(function (Portfolio) {
    var app = angular.module('PortfolioApp', ['ngMaterial', 'ui.router', 'ngAnimate']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'dist/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        }),
            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'dist/views/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            }),
            $stateProvider.state('projects', {
                url: '/projects',
                templateUrl: 'dist/views/projects.html',
                controller: 'ProjectsController',
                controllerAs: 'projects'
            }),
            $stateProvider.state('blog', {
                url: '/blog',
                templateUrl: 'dist/views/blog.html',
                controller: 'BlogController',
                controllerAs: 'blog'
            }),
            $stateProvider.state('resume', {
                url: '/resume',
                templateUrl: 'dist/views/resume.html',
            });
    });
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=boot.js.map
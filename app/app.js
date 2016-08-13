var portfolio = angular.module('portfolio', ['ui.router', 'ngAnimate', 'ngRoute', 'slickCarousel', 'chart.js', 'angular-parallax', 'ngSanitize']);

/*Controller*/
portfolio.controller('MainController', MainController);
portfolio.controller('WhymeController', WhymeController);
portfolio.controller('aboutController', aboutController);

/*Directives*/
portfolio.directive('expand', expand);

/*Routes*/
portfolio.config(routes);
portfolio.config(globalConfig);


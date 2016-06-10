var portfolio = angular.module('portfolio', ['ui.router', 'ngAnimate', 'ngRoute', 'slickCarousel', 'chart.js', 'angular-parallax']);

/*Controller*/
portfolio.controller('MainController', MainController);
portfolio.controller('WhymeController', WhymeController);
portfolio.controller('blogController', blogController);

/*Directives*/
//portfolio.directive('blur', blur);
//portfolio.directive('parallax', parallax);

/*Routes*/
portfolio.config(routes);
portfolio.config(globalConfig);


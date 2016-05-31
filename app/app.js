var portfolio = angular.module('portfolio', ['ui.router', 'ngAnimate', 'ngRoute', 'slickCarousel','gridshore.c3js.chart']);

/*Controller*/
portfolio.controller('MainController', MainController);
portfolio.controller('WhymeController', WhymeController);
portfolio.controller('blogController', blogController);


/*Routes*/
portfolio.config(routes);
portfolio.config(globalConfig);


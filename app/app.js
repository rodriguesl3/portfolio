var portfolio = angular.module('portfolio', ['ui.router', 'ngAnimate', 'ngRoute', 'slickCarousel']);

/*Controller*/
portfolio.controller('MainController', MainController);
portfolio.controller('WhymeController', WhymeController);


/*Routes*/
portfolio.config(routes);
portfolio.config(globalConfig);


var portfolio = angular.module('portfolio',['ui.router','ngAnimate','ngRoute']);

/*Controller*/
portfolio.controller('MainController', MainController);

                        
/*Routes*/
portfolio.config(routes);



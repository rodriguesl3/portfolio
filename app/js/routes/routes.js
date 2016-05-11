var routes = function($stateProvider, $urlRouterProvider, $httpProvider,$locationProvider){
    
    
    //$locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    //});
    
     $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('main',{
            url:'/main',
            views:{
                'main':{
                    templateUrl:'views/main/main.html',
                    //controller:'MainController',
                    //ControllerAs:'main'
                }
            }
        })
        .state('aboutme',{
            url:'/about',
            views:{
                'about':{
                    templateUrl:'views/about/about.html',
                    //controller:'AboutController',
                    //ControllerAs:'about'
                }
            }
        })
        .state('whyme',{
            url:'/whyme',
            views:{
                templateUrl:'views/whyme/whyme.html',
                //controller:'WhyMeController',
                //ControllerAs:'whyme'
            }
        });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider','$locationProvider'];
var routes = function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {


    //$locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    //});

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            views: {
                'main': {
                    templateUrl: 'views/main/main.html',
                    controller: 'MainController',
                    ControllerAs: 'main'
                }
            }
        })
        .state('aboutme', {
            url: '/about',
            views: {
                'about': {
                    templateUrl: 'views/about/about.html'
                }
            }
        })
        .state('blog', {
            url: '/blog',
            views: {
                'blog': {
                    templateUrl: 'views/blog/blog.html',
                    controller: 'blogController'
                }
            }
        })
        .state('whyme', {
            url: '/whyme',
            views: {
                'whyme': {
                    templateUrl: 'views/whyme/whyme.html'
                }
            }
        });
};

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];
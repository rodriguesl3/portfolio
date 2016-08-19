var navbar = function($state){
    return {
        restrict:'E',
        replace:true,
        templateUrl: 'views/templates/navbar.html',
        link:function($scope, element, attrs, ctrls){
             $(window).on('scroll', function(){
                  console.log();
                if($(this).scrollTop() > 100 && $state.current.name != "main")
                    $(element).fadeIn();
                else
                    $(element).fadeOut();
            });

            $scope.mainState = function(){
               $(element).fadeOut(function(){
                $state.go('main');
               });
                
            };
        }
    };
};
navbar.$inject = ['$state'];
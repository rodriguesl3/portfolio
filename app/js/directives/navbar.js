var navbar = function($state){
    return {
        restrict:'E',
        replace:true,
        templateUrl: 'views/templates/navbar.html',
        link:function($scope, element, attrs, ctrls){
             $(window).on('scroll', function(){
                 console.log($(this).scrollTop());
                if($(this).scrollTop() > 100)
                    $(element).fadeIn();
                else
                    $(element).fadeOut();
            });

            $scope.mainState = function(){
               $(element).fadeOut(function(){
                $state.go('main');
               })
                
            }
        }
    }
}

navbar.$inject = ['$state'];
var navbar = function(){
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
        }
    }
}
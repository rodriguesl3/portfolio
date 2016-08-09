var expand = function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
           
            scope.showDetails = function () {
                debugger;
                $(element).css('top', window.$(window).scrollTop());
                scope.why.showDetails = true
            },
            scope.hideDetails = function () {
                
                $(element).fadeOut(500,function () {
                    $(element).removeClass('main-details');
                    scope.why.showDetails = false
                });
            }
           
            //element.bind('click',scope.expandDetails);
        }
    }
}
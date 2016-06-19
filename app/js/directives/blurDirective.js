var blur = function () {
    return {
        restrict: 'A',
        replace: false,
        link: function ($scope, element, attrs, ctrls) {
            //element.bind('mouseenter', function () {
            //    $(element).find('img').css('filter', 'blur(0px)');
            //});


        }
    };
};
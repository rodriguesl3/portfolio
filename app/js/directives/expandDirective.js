var expand = function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.hideDetails = function () {
                $(element).removeClass('main-details');
                $(element).addClass('details-off');
                //scope.why.showDetails = false;
            };
        }
    };
};
var expand = function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.hideDetails = function () {
                $(element).toggleClass('details-off');
                scope.why.showDetails = false;
            };
        }
    };
};
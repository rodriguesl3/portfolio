var expand = function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.hideDetails = function () {
                $(element).removeClass('main-details');
                scope.why.showDetails = false
            }
        }
    }
}
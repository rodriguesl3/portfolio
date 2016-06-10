var parallax = function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                $(element).parallax();
            });
        }
    }
}
parallax.$inject = ['$timeout'];
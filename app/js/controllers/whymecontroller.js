var WhymeController = function ($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.options = {
        scaleLabel: "<%=value/10%>M",
        //scaleLabel: ["Not Bad", "Good Enough", "Great", "Awesome", "Perfect", "God"],
        // adjusting your scale
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        // ajusting tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value / 10 %>M",
    };

}

WhymeController.$inject = ['$scope'];
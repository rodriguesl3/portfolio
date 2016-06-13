var WhymeController = function ($rootScope) {
    
    angular.extend(this, {
       
        experiences: [
            {
                "Id": "1",
                //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
                "img": "./img/ability.png",
                "imgStyle":"background-color:black;",
                "title": "Ability",
                "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
            }, {
                "Id": "2",
                //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
                "img": "./img/freelancing.jpg",
                "title": "Freelancer",
                "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
            },
         {
             "Id": "3",
             //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
             "img": "./img/g2db.png",
             "imgStyle": "background-color:black;",
             "title": "G2DB",
             "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
         },
          {
              "Id": "4",
              //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
              "img":"./img/mac.png",
              "title": "MAC",
              "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
          },
          {
              "Id": "5",
              //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
              "img": "./img/tmkt.jpg",
              "title": "TMKT",
              "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
          },

        ],
        labels: ["Angular", ".Net", "SQL Server", "HTML5", "CSS3", "Javascript", "Mobile"],
        data: [[80, 90, 90, 90, 85, 70, 70]],
        onClick: function (points, evt) {
            console.log(points, evt);
        },
        //options: {
        //    ////scaleLabel: "<%=value/10%>M",
        //    ////scaleLabel: ["Not Bad", "Good Enough", "Great", "Awesome", "Perfect", "God"],
        //    // adjusting your scale
        //    //scaleOverride: true,
        //    scaleSteps: 5,
        //    scaleStepWidth: 10,
        //    scaleStartValue: 0,
        //    // ajusting tooltips
        //    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value / 10 %>M",
        //}
    });
    $rootScope.bodyImage = "";
}

WhymeController.$inject = ['$rootScope'];
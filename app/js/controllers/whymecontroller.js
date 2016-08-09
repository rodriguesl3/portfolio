var WhymeController = function ($rootScope) {
    angular.extend(this, {
        showDetails: false,
        longDescription:"",
        getExperience: function (experience) {
            debugger;
            this.showDetails = true;
            this.longDescription = experience.Description
            console.log(experience);
        },
        experiences: [
            {
                "Id": "0",
                //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
                "img": "./img/zurich.png",
                "flag": "./img/ireland.jpg",
                "imgStyle": "background-color:black;",
                "title": "Zurich",
                "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
            },
            {
                "Id": "1",
                //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
                "img": "./img/ability.png",
                "flag": "./img/ireland.jpg",
                "imgStyle": "background-color:black;",
                "title": "Ability",
                "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
            }, {
                "Id": "2",
                //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
                "img": "./img/freelancing.jpg",
                "flag": "./img/ireland.jpg",
                "title": "Freelancer",
                "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
            },
          {
              "Id": "4",
              //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
              "img": "./img/mac.png",
              "flag": "./img/brazil.jpg",
              "title": "MAC",
              "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
          },
          {
              "Id": "5",
              //"img": "http://likefotos.com/wp-content/uploads/2015/01/paisagem-tailandia1.jpg",
              "img": "./img/tmkt.jpg",
              "flag": "./img/brazil.jpg",
              "title": "TMKT",
              "Description": "Lorem ipsum dolor sit amet, eum labores consequat eu,ex vis vide copiosae electram.Ut est congue ignota instructior, ex assum hendrerit usu. Ad pri case causae officiis, quas habeo ludus eum et. Facer virtute senserit ne sea, ex posse melius equidem eum."
          },

        ],
        labels: ["Angular", ".Net", "SQL Server", "HTML5", "CSS3", "Javascript", "web responsivity", "AureliaJS"],
        data: [[80, 95, 95, 95, 98, 90, 80, 50]],
        onClick: function (points, evt) {
            console.log(points, evt);
        },
        slickConfig: {
            //autoplay: true,
            //autoplaySpeed: 3000,
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                },
                afterChange: function (event, slick, currentSlide, nextSlide) {
                }
            }
        }
    });
    $rootScope.bodyImage = "";
};

WhymeController.$inject = ['$rootScope'];
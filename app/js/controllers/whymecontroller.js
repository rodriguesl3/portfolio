var WhymeController = function ($rootScope) {
    angular.extend(this, {
        showDetails: false,
        longDescription: "",
        getExperience: function (experience) {
            this.showDetails = true;
            this.experience = experience;
            console.log(experience);
        },
        experience: {},
        experiences: [
            {
                "Id": "0",
                "img": "./img/zurich.png",
                "flag": "./img/ireland.jpg",
                "imgStyle": "background-color:black;",
                "title": "Zurich",
                "Location": "Dublin, Ireland",
                "Description": "Empresa multinacional de seguros, localizada próximo ao centro de Dublin, onde foi necessário ficar alocado para reuniões com gestores equipes de teste e publicação de sistemas. Participando de reuniões de Scrum com as equipes relacionadas nos projetos",
                "Technologies": "ASP Clássico, ASP.Net WebForms, Asp.Net MVC, SQL Server, ADO.Net, WebServices",
                "SampleProjects": [
                    { "title": "Travel", "Description": "Desenvolvido um site para vendas de seguros de viagem, dessa forma um usuário não precisa requisitar um corretor para criar uma cotação, utilizando ASP.Net MVC e WebServices para se comunicar entre os sistemas." },
                    { "title": "Migração de Sistema", "Description": "Efetuado com sucesso a migração de 2 portais internos de ASP Clássico para .Net 4.5.1 e migração de host, passando por todas as rotinas de testes e efetuado com sucesso." }
                ]
            },
            {
                "Id": "6",
                "img": "./img/rapp.png",
                "flag": "./img/england.jpg",
                "imgStyle": "background-color:black;",
                "title": "Rapp Worldwide",
                "Location": "London, Inglaterra",
                "Description": "Empresa multinacional de grande porte no ramo de marketing e relacionamento com cliente, com mais de 30 escritórios espalhados pelo mundo",
                "Technologies": "ASP Clássico, ASP.Net WebForms, Asp.Net MVC, SQL Server, ADO.Net, WebServices",
                "SampleProjects": [
                    { "title": "Mercedes-Benz", "Description": "Desenvolvimento de relatórios para acompanhamento de vendas do grupo Daimler no reino unido, com o Pentaho CDE Report integrado com Google Maps." },
                    { "title": "Takeda", "Description": "Sistema acompanha algumas variáveis de bem estar do usuário, como nível de stress, preocupação entre outras e gerenciar consultas médicas. Utilizando EmberJS e Service Stack, reuniões de Scrum." }
                ]
            },
            {
                "Id": "1",
                "img": "./img/ability.png",
                "flag": "./img/ireland.jpg",
                "imgStyle": "background-color:black;",
                "title": "Ability Software",
                "Description": "Empresa Irlandesa desenvolvedora de sistemas de médio porte com faturamento médio de 700.000 euros por ano, com clientes na Irlanda e Reino Unido.",
                "Technologies": "Asp.Net MVC, AngularJS, EmberJS, Xamarin Android, Arquitetura Cebola, TDD, Padrão de Projeto MVC e MVVM",
                "SampleProjects": [
                    { "title": "OmniHub", "Description": "Sistema responsável por controlar apólices e documentos. Procurando seguir os princípios SOLID com AngularJS e WebAPI. " },
                    { "title": "Portal Documentação Interna", "Description": "Sistema responsável por controlar documentação de APIs de sistemas desenvolvidos pelo time" },
                    { "title": "Single Sign On", "Description": "Sistema base para autenticação de outros projetos, dessa forma o usuário faz login utilizando rede social ou seu próprio email e o login é valido para outros projetos." }
                ]
            }, {
                "Id": "2",
                "img": "./img/freelancing.jpg",
                "flag": "./img/ireland.jpg",
                "title": "Freelancer",
                "ShortDescription": "Desenvolvedor Back-end, Desenvolvedor Front-end e DBA",
                "Description": "Trabalhando em meu tempo livre como freelancer, tive a possibilidade de aprofundar meu conhecimento em front-end patterns, entendendo o ciclo de vida da aplicação e adquirindo maturidade no Mercado de TI. Eu tenho aprendido como melhorar meu gerenciamento de tempo e melhorado meu foco.",
                "SampleProjects": [
                    { "title": "Juster", "Description": "Sistema de mediações de negociações entre clients e emrpesas entre débitos or algum conflito sem necessidade de irem a corte. Neste Sistema foir utilizados ASP.Net MVC 5 e ASP.Net SignalR. Sistema foi apresentado em rede nacional segue a referência. <a href='http://g1.globo.com/jornal-nacional/noticia/2015/08/tj-rj-comeca-testes-de-sistema-para-solucao-de-conflitos-judiciais-online.html' target='_blank'> Jornal Nacional Link </a>" },
                    { "title": "Portal Escolar", "Description": "Portal web responsável por controlar matrículas de estudantes e departamento financeiro. Responsável por dar manutenção com ASP.Net Web Forms e ADO.Net." },
                    { "title": "G2DB", "Description": "Responsável por melhorar tempo de resposta em SQL Server em diferentes sistemas tanto em Transact SQL quanto em Entity Framework." },
                ]
            },
          {
              "Id": "4",
              "img": "./img/mac.png",
              "flag": "./img/brazil.jpg",
              "title": "MAC",
              "Description": "MAC é uma empresa brasileira desde 1981, está no rank de a maior contrutora brasileira. Nesta empresa trabalhei como Desenvolvedor .Net e DBA SQL Server Junior. Todos os projetos foram documentados e seguidos os princípios SOLID.",
              "SampleProjects": [
                  { "title": "Publisher App", "Description": "Sistema para controlar publicação de aplicações em ambiente de Qualidade e de produção. Desenvolvido em  ASP.Net MVC 5, Web API, WCF, JQuery e Bootstrap." },
                  { "title": "Portal Web", "Description": "Portal WEB responsável por automatizar os departamentos administrativos, integrando tecnologias como ASP.Net WebForms e ASP.Net MVC 5." },
                  { "title": " Integrador WEB ", "Description": "Desenvolvimento de sistemas integrador com SAP (RFC e SAP .Net Communicator Library) comunicando com alguns módulos MM, PM, FI, HR." },
              ]
          },
          {
              "Id": "5",
              "img": "./img/tmkt.jpg",
              "flag": "./img/brazil.jpg",
              "title": "TMKT",
              "Description": "Trabalhando com projetos legados com sistemas em Delphi e Java e criando outros em VB.Net com Web Forms sendo todas as regras de negócio desenvolvidas no banco de dados (SQL Server 2008/2005), tendo a oportunidade de melhorar minhas habilidades em Transact-SQL.",
              "SampleProjects": [
                  { "title": "TIM Brasil", "Description": "Sistema de pesquisa de telefonistas disponíveils e buscando um número de discagem automaticamente. Desenvolvido em Java EE and T-SQL" },
                  { "title": "TMKT Report", "Description": "Sistema disponibiliza relatóries em tempo real sobre a operação e parte financeira, utilizando Windows Service, ASP.Net Web Forms e DevExpress tool" },
                  { "title": "Watchdog", "Description": "Sistema responsável por monitorar SQL Jobs, verificando estado do servidor. Este Projeto foi desenvolvido com Windows Service." },
              ]
          },

        ],
        labels: ["NodeJS", "MongoDB", "Angular", ".Net", "SQL Server", "HTML5", "CSS3", "Javascript", "web responsivity"],
        data: [[80, 70, 93, 95, 95, 95, 98, 97, 90]],
        onClick: function (points, evt) {
            console.log(points, evt);
        },
        //https://github.com/devmark/angular-slick-carousel
        slickConfig: {
            enabled: true,
            autoplay: true,
            draggable: false,  
            autoplaySpeed: 3000,
            slidesToShow:(parseInt($('body').css('width').replace(/px/g,''))<=600?2:3),
            mobileFirst:true,
            infinite:true,
            // method:{},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                },
                afterChange: function (event, slick, currentSlide, nextSlide) {
                }
            }
        },
    });
    $rootScope.bodyImage = "";
};

WhymeController.$inject = ['$rootScope'];
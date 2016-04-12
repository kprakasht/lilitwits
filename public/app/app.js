var liliapp = angular.module('lilitwits', ["ui.router", "textAngular"]);
    //liliapp.config(["$locationProvider", function($locationProvider) {
    //$locationProvider.html5Mode(true);
   //}]);
    liliapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /home
      $urlRouterProvider.otherwise("/home");
      
      $stateProvider
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: "../aboutus.html"
        })
          .state('courses', {
              url: "/courses",
              templateUrl: "../courses.html"
          })
          .state('placements', {
              url: "/placements",
              templateUrl: "../placements.html"
          })
          .state('faq', {
              url: "/faq",
              templateUrl: "../faq.html"
          })
          .state('blog-edit', {
              url: "/blog-edit",
              templateUrl: "../blog-edit.html"
          })
          .state('blogs', {
              url: "/blogs",
              templateUrl: "../blogs.html"
          })
           .state('contactus', {
              url: "/contactus",
              templateUrl: "../contactus.html"
          })
          .state('home', {
              url: "/home",
              templateUrl: "../home.html"
          })
          .state('admin', {
              url: "/admin",
              templateUrl: "../admin.html"
          })
          .state('read', {
              url: "/read",
              templateUrl: "../readmore.html"
          })
         
    });

liliapp.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
});
(function(){
  'use strict';

  angular.module('myApp', [
        'ui.router'
      ])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl:"components/mainPage/mainPageView.html"
            })
            .state('about', {
              url: "/about",
              templateUrl:"components/about/aboutUsView.html"
            })
            .state('sell', {
              url: "/sell",
              templateUrl:"components/sellGoods/sellGoodsView.html"
            })
            .state('goods', {
                url: "/goods",
                templateUrl:"components/goods/goodsView.html"
            })
            .state('registration', {
                url: "/registration",
                templateUrl:"components/registration/registrationView.html"
            });
          $urlRouterProvider.otherwise('/');
      })
})();

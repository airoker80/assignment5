(function () {
    'use strict';

    angular.module('public')
    .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
          .state('public', {
              absract: true,
              templateUrl: 'src/public/public.html'
          })
          .state('public.home', {
              url: '/',
              templateUrl: 'src/public/home/home.html'
          })
          .state('public.menu', {
              url: '/menu',
              templateUrl: 'src/public/menu/menu.html',
              controller: 'MenuController',
              controllerAs: 'menuCtrl',
              resolve: {
                  menuCategories: ['MenuService', function (MenuService) {
                      return MenuService.getCategories();
                  }]
              }
          })
          .state('public.menuitems', {
              url: '/menu/{category}',
              templateUrl: 'src/public/menu-items/menu-items.html',
              controller: 'MenuItemsController',
              controllerAs: 'menuItemsCtrl',
              resolve: {
                  menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
                      return MenuService.getMenuItems($stateParams.category);
                  }]
              }
          })
          .state('public.signup', {
              url: '/signup',
              templateUrl: 'src/public/signup/sign-up.html',
              controller: 'SignUpController',
              controllerAs: 'signUpCtrl'
              //resolve: {
              //    DishItem: ['MenuService', function (MenuService) {
              //        return MenuService.getDishItem(signUp.user.favoriteDish);
              //    }]
              //}
          })
          .state('public.myInfo', {
              url: '/myInfo',
              templateUrl: 'src/public/myInfo/my-info.html',
              controller: 'myInfoController',
              controllerAs: 'myInfoCtrl',
              resolve: {
                  userData: ['MenuService', function (MenuService) {
                      if (MenuService.user != undefined) {
                          var obj = {};
                          obj.user = MenuService.user;
                          console.log(obj);
                          return obj;
                      } else {
                          return "No User";
                      }
                  }]
                  //dishData: ['MenuService', function (MenuService) {
                  //    if (MenuService.user != undefined) {
                  //        return MenuService.getDishItem(MenuService.user.favoriteDish);
                  //    }
                  //}]
              }
          });
    }
})();

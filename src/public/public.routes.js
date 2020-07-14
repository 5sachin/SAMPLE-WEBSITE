(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
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
        menuCategories: ['UserService', function (UserService) {
          return UserService.getCategories();
        }]
      }   
    })
    .state('public.contacts',{
      url: '/contacts',
      templateUrl: 'src/public/contacts/contacts.html'
    });
    /*.state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl' 
    });*/
    /*
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/info/info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl'
    });*/
}
})();
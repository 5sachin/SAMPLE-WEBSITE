(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://aleksandar-gjorgievski.herokuapp.com')
.constant('APIPATH', 'https://reqres.in/api/users?page=2')

.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
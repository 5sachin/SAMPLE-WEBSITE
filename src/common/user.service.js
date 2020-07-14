(function() {
    'use strict';
    angular.module('common')
    .service('UserService', UserService);
    UserService.$inject = ['$http', 'APIPATH'];

    function UserService($http, APIPATH) {
        var service = this;
        service.getCategories = function () {
            return $http.get(APIPATH)
            .then(function (response) {
            return response.data;
        });
    };

    service.getName = function () {
            return $http.get(APIPATH)
            .then(function (response) {
            return response.data;
        });
    };

    }
})();
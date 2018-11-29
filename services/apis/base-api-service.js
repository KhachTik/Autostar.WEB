var  apiModule = angular.module('apiModule',[]);

apiModule.factory('apiBaseService', ['$http', function ($http) {

    var baseApi = 'Sami tvac url@';

    function Get(controller, action, data) {
        var req = {
            method: 'GET',
            url: baseApi + controller + '/' + action,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data || null
        };

        return $http(req).then(function (response) {
            return response;
        });
    }

    function Post(controller, action, data) {
        var req = {
            method: 'POST',
            url: baseApi + controller + '/' + action,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data || null
        };

        return $http(req).then(function (response) {
            return response;
        });
    }
    function Delete(controller, action, data) {
        var req = {
            method: 'DELETE',
            url: baseApi + controller + '/' + action,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data || null
        };

        return $http(req).then(function (response) {
            return response;
        });
    }


    return {
        get: Get,
        post: Post,
        delete: Delete,
    }
}]);
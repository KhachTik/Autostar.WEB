app.config([
    '$locationProvider',
    '$routeProvider',

    function(
        $locationProvider,
        $routeProvider) {

        $routeProvider
            .when("/home/", {
                templateUrl: "modules/home/index.html",
                controller: 'HomeCtrl'
            }).when("/filter/", {
                templateUrl: "modules/filter/index.html",
                controller: 'FilterCtrl'
            }).when("/compare/", {
                templateUrl: "modules/compare/index.html",
                controller: 'CompareCtrl'
            }).when("/details/:id", {
                templateUrl: "modules/details/index.html",
                controller: 'DetailsCtrl'
            }).when("/profile/", {
                templateUrl: "modules/profile/index.html",
                controller: 'ProfileCtrl'
            }).when("/add-statement/", {
                templateUrl: "modules/addStatement/index.html",
                controller: 'AddStatementCtrl'
            }).when("/edit-statement/:id", {
                templateUrl: "modules/editStatement/index.html",
                controller: 'EditStatementCtrl'
            }).when("/not-found/", {
                templateUrl: "modules/notFound/index.html",
                controller: 'NotFoundCtrl'
            })
            .otherwise({redirectTo: "/not-found/"});
    }
]);

    // script.js

    // angular animations


    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var apelApp = angular.module('apelApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    apelApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/zero', {
                templateUrl : 'pages/zero.html',
                controller  : '0Controller'
            })

            // route for the about page
            .when('/one', {
                templateUrl : 'pages/one.html',
                controller  : '1Controller'
            })

            // route for the contact page
            .when('/two', {
                templateUrl : 'pages/two.html',
                controller  : '2Controller'
            })

  // route for the about page
            .when('/three', {
                templateUrl : 'pages/three.html',
                controller  : '3Controller'
            })

            // route for the contact page
            .when('/four', {
                templateUrl : 'pages/four.html',
                controller  : '4Controller'
            })

              // route for the about page
            .when('/five', {
                templateUrl : 'pages/five.html',
                controller  : '5Controller'
            })

            // route for the contact page
            .when('/six', {
                templateUrl : 'pages/six.html',
                controller  : '6Controller'
            })

            // route for the contact page
            .when('/sixp', {
                templateUrl : 'pages/sixp.html',
                controller  : '6pController'
            })

              // route for the about page
            .when('/seven', {
                templateUrl : 'pages/seven.html',
                controller  : '7Controller'
            })

            // route for the contact page
            .when('/eight', {
                templateUrl : 'pages/eight.html',
                controller  : '8Controller'
            })

              // route for the about page
            .when('/nine', {
                templateUrl : 'pages/nine.html',
                controller  : '9Controller'
            })




            ;
    });

    // create the controller and inject Angular's $scope
    apelApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.pageClass = 'home';
    });

        apelApp.controller('0Controller', function($scope) {
        $scope.pageClass = 'zero';
    });

    apelApp.controller('1Controller', function($scope) {
        $scope.pageClass = 'one';
    });

    apelApp.controller('2Controller', function($scope) {
        $scope.pageClass = 'two';
    });

    apelApp.controller('3Controller', function($scope) {
        $scope.pageClass = 'one';
    });

    apelApp.controller('4Controller', function($scope) {
        $scope.pageClass = 'two';
    });

    apelApp.controller('5Controller', function($scope) {
        $scope.pageClass = 'one';
    });

    apelApp.controller('6Controller', function($scope) {
        $scope.pageClass = 'two';
    });

    apelApp.controller('6pController', function($scope) {
        $scope.pageClass = 'two';
    });


    apelApp.controller('7Controller', function($scope) {
        $scope.pageClass = 'one';
    });

    apelApp.controller('8Controller', function($scope) {
        $scope.pageClass = 'two';
    });

    apelApp.controller('9Controller', function($scope) {
        $scope.pageClass = 'one';
    });

apelApp.controller('SidebarController', function($scope) {
    
    $scope.state = false;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});

apelApp.directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };
});  
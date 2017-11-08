(function(){
    var app = angular.module('myApp', ['ngRoute']); 

    app.controller('customersCtrl', function ($scope, $http) {

        get();

        $scope.PostData = function () {
            if ($scope.firstName && $scope.lastName) {
                var data = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName
                };

                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                $http.post('/api/Users1', data, config)
                .then(function (response) {
                    $scope.firstName = '';
                    $scope.lastName = '';
                    get();
                })
                .catch(function (response) {
                    debugger;
                    console.log('error...');
                });
            }               
        };

        function get() {
            $http.get("/api/Users1")
            .then(function (response) {
                $scope.names = response.data;
            });
        }
    });


    app.controller('ordersCtrl', function ($scope, $http, $location) {

        var searchObject = $location.search();
        if (searchObject) {
            $scope.userId = searchObject.userId;
        }

        get();

        $scope.newOrder = {};

        $scope.addOrder = function () {
            if ($scope.newOrder.firstName && $scope.newOrder.lastName && $scope.newOrder.trackingId) {

                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                $scope.newOrder.userId = $scope.userId;

                $http.post("/api/Orders1/" + $scope.userId, $scope.newOrder, config)
                .then(function (response) {
                    $scope.newOrder = {};
                    $scope.isAddForm = false;
                    get();
                })
                .catch(function (response) {
                    debugger;
                    console.log('error...');
                });
            }
        };

        $scope.deleteOrder = function myfunction() {

        }

        $scope.updateOrder = function () {

        }

        function get() {
            $http.get("/api/Users1/" + $scope.userId)
            .then(function (response) {
                $scope.users = response.data;
            });
        }
    });

})();

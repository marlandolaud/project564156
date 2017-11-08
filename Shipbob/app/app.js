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

        $scope.userId = getParameterByName('userid', $location.$$absUrl);

        if ($scope.userId) {
            get();
        }        

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
                    console.log(response);
                });
            }
        };

        $scope.updateOrder = function (Order) {
            if (Order.firstName && Order.lastName && Order.trackingId) {

                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                Order.userId = $scope.userId;

                $http.put("/api/Orders1/" + Order.userId, Order, config)
                .then(function (response) {                    
                    $scope.isEditForm = false;
                    get();
                })
                .catch(function (response) {
                    debugger;
                    console.log(response);
                });
            }

        }

        $scope.deleteOrder = function myfunction(userId) {
            if (userId) {

                $http.delete("/api/Orders1/" + userId)
                .then(function (response) {
                    get();
                })
                .catch(function (response) {
                    debugger;
                    console.log(response);
                });
            }

        }        

        function get() {
            $http.get("/api/Users1/" + $scope.userId)
            .then(function (response) {
                $scope.users = response.data;
            });
        }

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    });

})();

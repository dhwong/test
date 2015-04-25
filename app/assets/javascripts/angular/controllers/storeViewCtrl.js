app.controller("viewController", ['$scope', 'Restangular', function ($scope, Restangular) {
    $scope.store = {
        name: "test store",
        owner: "joe",
        type: "genre",
        location: "623 bullion blvd"
    };
});
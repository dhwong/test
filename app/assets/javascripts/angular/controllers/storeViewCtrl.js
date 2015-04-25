var app = angular.module('viewCtrl', ['directives']);

app.controller("viewController", function ($scope) {
    $scope.store = {
        name: "test store",
        owner: "joe",
        type: "genre",
        location: "623 bullion blvd"
    };
});
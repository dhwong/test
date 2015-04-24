app.controller('ResultsListController', ['$scope', 'Restangular', 'Query', 'apiaryFactory',
	function($scope, Restangular, Query, apiaryFactory) {

  	$scope.Query = Query;
  	$scope.results = {};
  	$scope.items = {};

  	// Make the post to the Search controller
  	if (Query.query !== "") {
	 		Restangular.all("search").post({ "search": Query }).then(function(search) {
	 			$scope.results = search.response;
	 		});
  	}
}]);
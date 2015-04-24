// Apiary factory for interacting with mock endpoints.
angular.module('NearBuy').factory('apiaryFactory', ['$http', function($http) {

	var urlBase = 'http://search.apiblueprint.org/';
	var apiaryFactory = {};
	var mockup = { "query": "Harry Potter", "lat": 32.77, "long": -96.79 };
	// docs.nearbuyitemsearch.apiary.io/#reference/searches/searches-collection
	apiaryFactory.postSearch = function(query) {
		// query not used for initial testing
		return $http.post(urlBase + '/searches', mockup);
	};

	return apiaryFactory;
}]);
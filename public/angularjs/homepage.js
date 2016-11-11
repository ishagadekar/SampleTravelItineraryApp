var homepage = angular.module('homepage', []);

homepage.controller('homepage', function($scope, $http) {

	$scope.sources = [ 'San Jose', 'San Francisco', 'New York' ];
	$scope.destinations = [ 'San Francisco', 'New York', 'San Jose' ];

	$scope.selectedSource = "Select Source";
	$scope.selectedDestination = "Select Destination";
	$scope.source = $scope.selectedSource;
	$scope.destination = $scope.selectedDestination;
	$scope.setAlert = true;

	$scope.places = [];

	$scope.addToTable = true;

	$scope.selectSource = function(source) {
		$scope.selectedSource = source;
		$scope.source = source;
	};

	$scope.selectDestination = function(destination) {
		$scope.selectedDestination = destination;
		$scope.destination = destination;
	};

	$scope.checkPlaces = function() {
		if ($scope.source === "Select Source"
				|| $scope.destination === "Select Destination") {
			$scope.setAlert = false;
		} else {
			$scope.setAlert = true;
			$http({
				method : "POST",
				url : '/checkPlaces',
				data : {
					"source" : $scope.source,
					"destination" : $scope.destination
				}
			}).success(function(data) {
				if (data.statusCode === 200) {
					$scope.addToTable = true;
					$scope.places.push({
						'source' : $scope.source,
						'destination' : $scope.destination
					});
				} else {
					$scope.addToTable = false;
				}
			}).error(function(error) {

			});
		}
	};

});
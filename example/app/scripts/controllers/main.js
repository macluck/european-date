'use strict';

/**
 * @ngdoc function
 * @name europeanDateExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the europeanDateExampleApp
 */
angular.module('europeanDateExampleApp')
  .controller('MainCtrl', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];

		$scope.clear = function () {
		$scope.dt = null;
		};

		$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
		};

  });

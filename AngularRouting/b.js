var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'set.html',
        
    })
		.when('/course', {
			templateUrl: 'course.html',
			controller: 'courseController'
		})
		.when('/subject', {
			templateUrl: 'subject.html',
			controller: 'subjectController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

mainApp.controller('courseController', function($scope) {
	$scope.courses = [
		{cname: 'Msc', code:'111',credits:20},
		{cname: 'MCA', code:'112',credits:25},
		{cname: 'BDA', code:'113',credits:30},
	];

});

mainApp.controller('subjectController', function($scope) {
	$scope.subjects = [
		{sname: 'java', code:'11',credits:20},
		{sname: 'python', code:'12',credits:25},
		{sname: 'c++', code:'13',credits:30},
	];

});
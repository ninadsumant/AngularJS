var mainApp = angular.module("mainApp", []);


mainApp.controller('bookController', function($scope) {
	$scope.book = [
		{bname: 'Msc', price:'111',no:20},
		{bname: 'MCA', price:'400',no:34},
		{bname: 'Msc', price:'500',no:20},
	];

});


mainApp.filter('custom',function(){
    return function (input, price) {
        var output = [];
        if (isNaN(price)) {
 
            output = input;
        }
        else {
            angular.forEach(input, function (item) {
 
                if (item.price > price) {
                    output.push(item)
                }
            });
        }
        return output;
    }
});
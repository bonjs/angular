
var app = angular.module('Hello', []);  //新建一个app模块 叫hello ,[]后面的数组为引入的其他模块名，我们没有其他模块，为空数组  



app.controller('helloCtrl', function ($scope, $compile) {  
    $scope.name = "sun";  
	
	var html = '<div ng-controller="myController" style="border: 1px red solid">{{email}}</div>';

	var dom = $compile(html)($scope);
	console.log(dom[0]);
	document.body.appendChild(dom[0]);
	
}); 

var app2 = angular.module('Hello');
app2.controller('myController', function($scope, $compile) {
	 $scope.email = "ske@163.com";  
});


  

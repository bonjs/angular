
var app = angular.module('Hello', []);  //�½�һ��appģ�� ��hello ,[]���������Ϊ���������ģ����������û������ģ�飬Ϊ������  



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


  

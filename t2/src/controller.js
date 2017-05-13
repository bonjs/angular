
//新建一个app模块 叫hello ,[]后面的数组为引入的其他模块名，我们没有其他模块，为空数组
var app = angular.module('Hello', []); 

var Grid = function () {
	var me = this;
	
	var F = function() {};	// 
	F.prototype = {
		constructor: F,
		add: function() {
			
		}
	}
	app.directive('table', function () {
		return {
			restrict: 'ECAM',
			//此处定义了该指令的controller属性
			controller: function ($scope) {
				console.log('init');
				$scope.books = [{
						name: 'php'
					}, {
						name: 'javascript'
					}, {
						name: 'java'
					}
				];
				this.addBook = function (a) { //或者 scope.addBook=...
					$scope.books.push({
						name:'a'
					});
					$scope.$apply();
				}
			},
			//controllerAs: 'bookListController', //给当前controller起个名称
			template: '<div><li ng-repeat="book in books">{{ book.name }}</li></div>',
			replace: true,
			//link中注入 bookListController ，就可以使用它的方法了
			link: function (scope, element, attrs, controller) {
				element.on('click', function() {
					controller.addBook();
				});
			},
			scope:{}
		}
	});
	
	return function(app) {
		
		
	};
}();

var app2 = angular.module('Hello');
var grid = new Grid(app2, {
	add: function() {
		alert('click')
	}
});

var grid2 = new Grid(app2, {
	add: function() {	
		alert('click')
	}
});

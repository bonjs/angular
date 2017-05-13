
//新建一个app模块 叫hello ,[]后面的数组为引入的其他模块名，我们没有其他模块，为空数组
var app = angular.module('Hello', []); 


var Grid = function(scope, element) {
	console.log(scope, element);
	
	this.scope = scope;
	this.el = element;
	if(element.id == 'a') {
		console.log('this is a')
	} else {
		console.log('this is b');
	}
};
Grid.prototype = {
	constructor: Grid,
	add: function() {
		this.scope.books.push({
			name: 'aaaa'
		});
		this.scope.$apply();
	},
	load:function() {
		this.scope.books = [
			{
				name: 'test',
			}, {
				name: 'fdafds'
			}
		];
		this.scope.$apply();
	}
}

var GridManager = function() {

	var gridList = [];
	add.addEventListener('click', function() {
		gridList[0].add();
	});
	
	load.addEventListener('click', function() {
		gridList[0].load();
	});

	app.directive('grid', function () {
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
					$scope.$apply(function() {
						$scope.books.push({
							name:'a'
						});
					});
				}
			},
			//controllerAs: 'bookListController', //给当前controller起个名称
			//template: '<div><li ng-repeat="book in books">{{ book.name }}</li></div>',
			templateUrl: 'Grid.html',
			replace: true,
			//link中注入 bookListController ，就可以使用它的方法了
			link: function (scope, element, attrs, controller, i) {

				gridList.push(new Grid(scope, element[0]));
				element.on('click', function() {
					controller.addBook();
				});
			},
			scope:{}
		}
	});
	
	return {
		
	};
}();

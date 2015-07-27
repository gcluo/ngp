(function(){
  'use strict';

  /* code here! */

  console.log('hello world!');

  var app = angular.module("myApp",["ngRoute","ngAnimate","ngResource"]);

  app.config(["$routeProvider",function($routeProvider){
  	$routeProvider
  		.when('/home',{
  			templateUrl: "home.html",
  			controller: 'homeController'
  		})
  		.otherwise({
        	redirectTo : '/home'
        });
  }]);

  app.controller("mainController",['$scope',function($scope){

  }]);

  app.controller("homeController",['$scope',function($scope){
  	$scope.text = 'my first controller';
  	$scope.menuBtnCls = {
  		initCls:true,
  		actCls:false
  	};
  	$scope.showNav = function(){
  		$scope.menuBtnCls.actCls = !$scope.menuBtnCls.actCls;
  	};
  }]);


})();

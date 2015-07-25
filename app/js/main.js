(function(){
  'use strict';

  /* code here! */

  console.log('hello world!');

  var app = angular.module("myApp",["ngRoute","ngAnimate","ngResource"]);

  app.config(["$routeProvider",function($routeProvider){
  	$routeProvider
  		.when('/index',{
  			templateUrl: "index.html",
  			controller: 'indexController'
  		})
  		.otherwise({
        	redirectTo : '/index'
        });
  }]);

  app.controller("mainController",['$scope',function($scope){

  }]);

  app.controller("indexController",['$scope',function($scope){
  	$scope.text = 'my first controller';
  }]);


})();

(function(){
  'use strict';

  /* code here! */

  console.log('hello world!');

  var app = angular.module("myApp",["ngRoute","ngAnimate","ngResource"]);

  app.run(['$rootScope',function($rootScope){
    $rootScope.navShow = false;
    $rootScope.mainMove = false;
  }]);


  app.config(["$routeProvider",function($routeProvider){
  	$routeProvider
  		.when('/home',{
  			templateUrl: "home.html",
  			controller: 'homeController'
  		})
  		.otherwise({
        	// redirectTo : '/main'
      });
  }]);

  app.controller("mainController",['$scope',function($scope){

  }]);

  app.controller("homeController",['$scope','$rootScope',function($scope,$rootScope){
  	$scope.text = 'my first controller';
  	$scope.menuBtnCls = {
  		actCls:false
  	};
  	$scope.showNav = function(){
  		$scope.menuBtnCls.actCls = !$scope.menuBtnCls.actCls;
      $rootScope.navShow = !$rootScope.navShow;
      $rootScope.mainMove = !$rootScope.mainMove;
  	};
  }]);


})();

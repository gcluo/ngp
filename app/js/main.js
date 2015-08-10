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
  		.when('/link1',{
  			templateUrl: "link1.html",
  			controller: 'link1Controller'
  		})
      .when('/link2',{
        templateUrl: "link2.html",
        controller: 'link2Controller'
      })
  		.otherwise({
        	// redirectTo : '/main'
      });
  }]);

  app.factory('jsonService',function($resource){
    return $resource('../json/link.json', {method:'GET', isArray:true});
  })

  app.controller("mainController",['$scope','$rootScope',function($scope,$rootScope){
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

  app.controller("navController",['$scope','jsonService',function($scope,jsonService){

    $scope.sections = jsonService.query(function(data){
      console.log(data);
      return data;
    });

    $scope.setMaster = function(section) {
      $scope.selected = section;
    }

    $scope.isSelected = function(section) {
      return $scope.selected === section;
    }
  }]);

  app.controller("link1Controller",['$scope',function($scope){
    $scope.text = "link1";
  }]);
  app.controller("link2Controller",['$scope',function($scope){
    $scope.text = "link2";
  }]);



})();

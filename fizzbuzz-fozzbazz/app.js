angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($scope){
   $scope = {};
    $scope.counter.value = 0


  })
  .controller('fizzbuzzCtrl', function($scope){
    if($scope.counter.value % 3===0){
      $scope.display = "FIZZ"
    }
    if($scope.counter.value% 5===0){
      $scope.display = "BUZZ"
    }
    if($scope.counter.value % 3===0 && $scope.counter.value % 5===0 ){
      $scope.display = "FIZZBUZZ"
    }

  })
  .controller('fozzbazzCtrl', function(){});
 if($scope.counter.value% 4===0){
      $scope.display = "FOZZ"
    }
    if($scope.counter.value% 6===0){
      $scope.display = "BAZZ"
    }
    if($scope.counter.value % 3===0 && $scope.counter.value % 5===0 ){
      $scope.display = "FOZZBAZZ"
    }

  })
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

  .factory('counter', function(){
   var counter = {};
    counter.value = 0
    


  })
  .controller('fizzbuzzCtrl', function(counter){
    if(counter.value % 3===0){
      counter.display = "FIZZ"

    }
    if(counter.value% 5===0){
      counter.display = "BUZZ"
    }
    if(counter.value % 3===0 && $scope.counter.value % 5===0 ){
      counter.display = "FIZZBUZZ"
    }

  })
  .controller('fozzbazzCtrl', function(counter){
   if(counter.value% 4===0){
    display = "FOZZ"
    
  }
  if(counter.value% 6===0){
    display = "BAZZ"
  }
  if(counter.value % 3===0 && counter.value % 5===0 ){
    display = "FOZZBAZZ"
  }

})

  var increment = function ($scope){
    counter.value += 1
  }
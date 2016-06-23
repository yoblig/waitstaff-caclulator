angular.module('calcApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'intro.html'
    }).when('/meal/', {
      templateUrl: 'meal.html',
      controller: 'MealCtrl'
    }).when('/earn',{
      templateUrl: 'earnings.html',
      controller: 'MealCtrl'
    });
  }])
.controller('MealCtrl', function(){
    
    // Meal
    var vm = this;
    vm.price = 0;
    vm.taxRate = 0;
    vm.tipRate = 0;
    vm.tax = 0;
    vm.tip = 0;
    vm.subtotal = 0;
    vm.total = 0;
    
    // Earnings
    vm.totalTip = 0;
    vm.totalMeal = 0;
    
    vm.calcTax = function(price, taxRate){
      var tax = price * (taxRate/100);   
      return tax; 
    };
    
    vm.calcTip = function(subtotal, tipRate){
      console.log(" the subtotal is " + subtotal);
      console.log(" the tipRate is " + tipRate);
        var tip = subtotal * (tipRate/100);
      console.log(" the tip is " + tip);
        return tip;
    };
    vm.calcSubtotal = function(price, tax){
        var subtotal = price + tax;
        return subtotal;
    };
    
    vm.calcTotal = function(price, taxRate, tipRate){
        // Meal
        vm.tax = vm.calcTax(price, taxRate);
        vm.subtotal = vm.calcSubtotal(price, vm.tax);
        vm.tip = vm.calcTip(vm.subtotal, tipRate);
        vm.total = price + vm.tax + vm.tip;
        
        // Earnings
        vm.totalTip += vm.tip;
        vm.totalMeal ++;
    };
    
    vm.calcTipAvg = function(tips, meals){
        console.log("tips: " + tips);
        console.log("meals: " + meals);
        return (tips / meals);
    };
    
});


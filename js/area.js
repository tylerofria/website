

var myApp = angular.module("myAngularArea", [])




myApp.controller("myController", function($scope, $http){  

$scope.value = ""

$scope.area = function(valueone, valuetwo, scale){
   //Put code logic here


if (scale != 0){
       $scope.valuethree = scale/100;
   }

$scope.valueone = $scope.valuethree * valueone;
$scope.valuetwo = $scope.valuethree * valuetwo;


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 100000, 500000);

ctx.beginPath();
ctx.rect(20, 20, $scope.valueone, $scope.valuetwo);
ctx.stroke();

ctx.closePath();


}
   });

   /*

 <canvas id="myCanvas" width="200" height="100"
style="border:1px solid #000000;">
</canvas>

   var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(20, 20, 150, 100);
ctx.stroke();
*/
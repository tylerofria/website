//<reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js" />


//setvariable()
var city = "London"

function setvariable(){
  //city = "California"
//var city = document.getElementById("selection").saab.value
//document.write(city)
}
//var dynurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=aea36211d981a044fe80e307522545a7&units=imperial"
//module
var myApp = angular.module("myAngularAPP", [])


//controller
myApp.controller("myController", function($scope, $http){  
    //empty array



function myController($scope) {
    $scope.header = {name: "header.html", url: "header.html"};
}



//'https://api.github.com/users/mralexgray/repos'

 //$http.defaults.headers.common.Set-Cookie = 'ezc_session=63a6d44fd7313fc920659f65a6fca4f4';

//$httpProvider.defaults.headers.get = { 'Set-Cookie' : 'ezc_session=63a6d44fd7313fc920659f65a6fca4f4' }

$scope.mySplit = function(string, nb) {
    //converts json to string
    var randomstring = string.toString();
    //splits removes ) and replaces with nothing
    var editstring = randomstring.split(')').join('');
    //splits the ( so we can just display extentions
    var array = editstring.split("(");
    return array[nb];
}

    $http(
      {
  method: 'GET',
  url: 'http://localhost:3000/channel426',
  headers: {'Content-Type': 'application/json'},
//setting headers
//  headers: {
//
  //'Set-Cookie': 'ezc_session=63a6d44fd7313fc920659f65a6fca4f4'
 //},
}).then(function successCallback(response) {
  
    $scope.jsoner = response.data[0]
  }, 
  function errorCallback(response) {
    $scope.jsoner = response
   //$scope.jsoner = response.data.records
  });

  
    $scope.weatherarray = [];
  //This allows you to do Get Requests, specify method and URL
  //creating a fucntion to grab data on button click
 $scope.weatherget = function(){    
      //$scope.message = city

   $http(
        {
   method: 'GET',
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.username + "&APPID=aea36211d981a044fe80e307522545a7&units=imperial",
       }).then(function successCallback(response) {
        $scope.weather = response.data    
       $scope.username 
      }, 
    
    function errorCallback(response) {
    });
    //adding to the array
    //$scope.weatherarray.push($scope.username)
    //function end




  }

//myApp.controller("ezcctrl", function($scope, $http){  

  //This allows you to do Get Requests, specify method and URL
  //creating a fucntion to grab data on button click   
      //$scope.message = city
    //$http(
    //    {
    //method: 'GET',
    //url: "/JSON/ezc.json",
     //   }).then(function successCallback(response) {
     //   $scope.ezc = response.data    
       // $scope.username 
   //   }, 
   // );
    //adding to the array
    //$scope.weatherarray.push($scope.username)
    //function e

  
});


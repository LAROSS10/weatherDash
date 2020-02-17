// $(function () {
//   //your code goes here
// })

// $(document).ready(function () {

var queryUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=f55295859c7b70ee55f63fe62b4546c7";
var queryUrlCleveland =
  "https://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=f55295859c7b70ee55f63fe62b4546c7";
var queryUrlBerea =
  "https://api.openweathermap.org/data/2.5/weather?q=Berea&appid=f55295859c7b70ee55f63fe62b4546c7";
var queryUrlOakland =
  "https://api.openweathermap.org/data/2.5/weather?q=Oakland&appid=f55295859c7b70ee55f63fe62b4546c7";
var queryUrlMiami =
  "https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=f55295859c7b70ee55f63fe62b4546c7";

var storedCities = JSON.parse(localStorage.getItem("citySearchList"));
var cityList = storedCities || ["dallas"];
var cityQueryUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=f55295859c7b70ee55f63fe62b4546c7&q=";

function getWeatherData(queryCity) {
  $.ajax({
    url: cityQueryUrl + queryCity,
    method: "GET"
  }).then(function(response) {
    updateWeather("getweatherdata", response);
    console.log(response.main.humidity);
    console.log(response.main.temp);
    console.log(response.name);
    console.log(response.wind.speed);
    console.log(response);
    getUvi(response.coord.lat, response.coord.lon);
  });
}

function updateWeather(data) {
  var tRow = $("<tr>");
  var city = $("<td>").text(response.name);
  var humidity = $("<td>").text(response.main.humidity);
  var temp = $("<td>").text(response.main.temp);
  var windSpeed = $("<td>").text(response.wind.speed);
  tRow.addClass("weatherInfo");
  tRow.append(city, humidity, temp, windSpeed);
  $("tbody").append(tRow);
}

function getUvi(lat, lon) {
  var uviQueryUrl = `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=f55295859c7b70ee55f63fe62b4546c7&lat=${lat}&lon=${lon}&cnt=1`;

  // this is the ajax call for the uvi index
  $.ajax({
    url: queryUrl3,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var uvIValue = response[0].value;
    console.log(uvIValue);
    var uviIndex = $("<td>").text(uvIValue);
    $(".weatherInfo").append(uviIndex);
    // // $("tbody").append(tRow);
  });
}
// var firstDate = $("#date1");
// console.log(firstDate);

var key = "f55295859c7b70ee55f63fe62b4546c7";

$(".btn").on("click", function(event) {
  event.preventDefault();
  var clevelandWeather = $(".input").val();
  console.log(clevelandWeather);
  if (clevelandWeather === "Cleveland") {
    $.ajax({
      url: queryUrlCleveland,
      method: "GET"
    }).then(function(response) {
      console.log(response.main.humidity);
      console.log(response.main.temp);
      console.log(response.name);
      console.log(response.wind.speed);
      console.log(response);
    });

    // var tRow = $("<tr>");
    // var city = $("<td>").text(response.name);
    // var humidity = $("<td>").text(response.main.humidity);
    // var temp = $("<td>").text(response.main.temp);
    // var windSpeed = $("<td>").text(response.wind.speed);
    // tRow.append(city,humidity,temp,windSpeed);
    // $("tbody").append(tRow);
  }
});

// this is the ajax call to get the current weather data and also a function to append the weather data,including UVI index to the DOM

$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function(response) {
  console.log(response.main.humidity);
  console.log(response.main.temp);
  console.log(response.name);
  console.log(response.wind.speed);
  console.log(response);
  var tRow = $("<tr>");
  var city = $("<td>").text(response.name);
  var humidity = $("<td>").text(response.main.humidity);
  var temp = $("<td>").text(response.main.temp);
  var windSpeed = $("<td>").text(response.wind.speed);
  tRow.addClass("weatherInfo");
  tRow.append(city, humidity, temp, windSpeed);
  $("tbody").append(tRow);
});

// this is the variable for the call for the UVI index
var queryUrl3 =
  "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=f55295859c7b70ee55f63fe62b4546c7&lat=32.7767&lon=96.7970&cnt=1";

// this is the ajax call for the uvi index
$.ajax({
  url: queryUrl3,
  method: "GET"
}).then(function(response) {
  console.log(response);
  var uvIValue = response[0].value;
  console.log(uvIValue);
  var uviIndex = $("<td>").text(uvIValue);
  $(".weatherInfo").append(uviIndex);
  // // $("tbody").append(tRow);
});

// this is the variable and ajax call for the five day forecast
var queryUrl2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=f55295859c7b70ee55f63fe62b4546c7";
$.ajax({
  url: queryUrl2,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.list[0].main.temp);
  var i;
  for (i = 6; i < response.list.length; i += 8) {
    console.log(response.list[i].main.temp);

  }
});

var queryUrl2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=f55295859c7b70ee55f63fe62b4546c7";
$.ajax({
  url: queryUrl2,
  method: "GET"
}).then(function(response) {

  console.log(response);
  console.log(response.list[0].dt_txt);
  var i;
  for (i = 6; i < response.list.length; i += 8) {
    console.log(response.list[i].dt_txt);
  
    $("#date" + [i]).text(response.list[i].dt_txt)
  
  }
  var i;
  for (i = 6; i < response.list.length; i += 8) {
    console.log(response.list[i].main.temp);
  
    $("#temp" + [i]).text(response.list[i].main.temp)
  
  }
  var i;
  for (i = 6; i < response.list.length; i += 8) {
    console.log(response.list[i].main.humidity);
  
    $("#humidity" + [i]).text(response.list[i].main.humidity)
  
  }
});

var queryUrl2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=f55295859c7b70ee55f63fe62b4546c7";
$.ajax({
  url: queryUrl2,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.list[0].main.humidity);
  var i;
  for (i = 6; i < response.list.length; i += 8) {
    console.log(response.list[i].main.humidity);
  }
});

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 2000
  })

})

var navBtn = $("#navbar-responsive-btn")
var width = screen.width;
var height = screen.height;

function initMap() {
  var selby = {lat: 53.786196, lng: -1.075116};
  var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: selby});
  var marker = new google.maps.Marker({position: selby, map: map});
}

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 2000
  })


  var hairExtBtn = $('#hair-ext-btn');
  var nailsBtn = $('#nails-btn');
  var mbBtn = $('#mb-btn');
  var makeupBtn = $('#makeup-btn');

//Toggle events to display info on service cards
  $('.description').hide();

  hairExtBtn.on('click',function(){
    $('#hair-txt').toggle('slow');
  });

  nailsBtn.on('click',function(){
    $('#nails-txt').toggle('slow');
  });
  mbBtn.on('click',function(){
    $('#mb-text').toggle('slow');
  });
  makeupBtn.on('click',function(){
    $('#makeup-txt').toggle('slow');
  });



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

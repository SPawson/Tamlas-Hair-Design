$(document).ready(function() {
  $('.carousel').carousel({
    interval: 6000
  })

//variables
  var hairExtBtn = $('#hair-ext-btn');
  var nailsBtn = $('#nails-btn');
  var mbBtn = $('#mb-btn');
  var makeupBtn = $('#makeup-btn');
  var ghds = $('#ghd-btn');
  var shampoo = $('#shampoo-btn');
  var hairProducts = $('#hairwax-btn');

//Toggle events to display info on service cards
  $('.description').hide();

//Services page buttons/text
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

//Products page buttons/text
ghds.on('click',function(){
  $('#ghd-txt').toggle('slow');
});

shampoo.on('click',function(){
  $('#shampoo-txt').toggle('slow');
});
hairProducts.on('click',function(){
  $('#wax-txt').toggle('slow');
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

$(document).ready(function() { 

//animation to the header
$('.date').hide();
$('#navbr').hide();

//moving from main page to page with header and stuff
$('.header').click(function(e) { 
    $('.header').hide().show('slow');
    $('.date').show('slow');
    $('#navbr').show('slow');
    $('#butt').hide();
});


//hover for buttons
$('a').hover(function() {
	$(this).css('background-color', 'white');},
	function() {
	$(this).css('background-color', '#44d9e6')
});

$('button').hover(function() {
	$(this).css('background-color', 'white');},
	function() {
	$(this).css('background-color', '#44d9e6')
});



//overlay for info button
var $overlay = $('<div id="overlay"></div>'); //jQuery object

//var $image = $('<img>');
var $caption = $('<p>Are you Afro-caribbean and wondered why there are not more people like you in tech? Are you under 25 and want to get a feel for the industry but do not know how? We gotchu you! YAC are hosting a FREE 3 day event for you to get a taste of all things #enterprise, tech and #design. In November we will be running our first ever YACATHON. Expert or novice we have something for you.</p>');

// a caption to overlay
$overlay.append($caption);

$('.learnMore').click (function(e) {
//To add an overlay


$overlay.show();

  // an image to overlay
//$overlay.append($image);

//add an overlay
$('body').append($overlay);

})

//when overlay is clicked hide the overlay
//hide the overlay
 $overlay.click(function(){
 	$overlay.hide();
 });


})

//Variable to track the number of steps
var totalsteps = 3;

// Track which step should be displayed
var currentstep = 0;
//store the html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps);

  //hide the steps
  $('.steps li, .end, .controls, #prev').hide();

});

//click events

$('#begin').on('click', function(){
  //do something here
  $('.welcome').hide();
  currentstep = 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
//how long the transition lasts
$('.controls').fadeIn(1000);

$('h2').html('step' + currentstep);
});

//Click on Next
$('#next').on('click' , function(){
  if(currentstep != totalsteps){
$(currentslide).hide();
currentstep++;
currentslide = $('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('h2').html('step' + currentstep);
}
if(currentstep == totalsteps){
  $('#next').hide();
}
if(currentstep != 1) {
  $('#prev').show();
}
});
//Click on Previous
$('#prev').on('click' , function(){

$(currentslide).hide();
currentstep--;
currentslide = $('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('h2').html('step' + currentstep);

if(currentstep != totalsteps){
  $('#next').show();
}
if(currentstep == 1) {
  $('#prev').hide();
}
});

$('#finish').on('click', function(){
  //hide everythign again
  $('.steps li, .controls, #prev').hide();
  $('.end').fadeIn(1000);
});

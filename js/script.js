$(document).ready(function(){


//user enters city name
//on click submit-btn update the background image of the page based on users input
// update the background based on the users input

    $('#city-type').change(function(){
    var city = $('#city-type').val()
      //if user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg

    if (city == "NYC"){
       $('body').css("background", "url(images/nyc.jpg) no-repeat center center fixed");
      //if user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    } else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
       $('body').css("background", "url(images/sf.jpg) no-repeat center center fixed");

      //if user submits "LA" or "Los Angeles" or "LAX" make the background of the page la.jpg
    } else if (city == "LA" || city == "Los Angeles" || city == "LAX") {
       $('body').css("background", "url(images/la.jpg) no-repeat center center fixed");

      //if user submits "Austin" or "ATX" make the background of the page austin.jpg
    } else if (city == "Austin" || city == "ATX") {
       $('body').css("background", "url(images/austin.jpg) no-repeat center center fixed");

      //if user submits "Sydney" or "SYD" make the background of the page sydney.jpg
    } else if (city == "Sydney" || city =="SYD") {
     $('body').css("background", "url(images/sydney.jpg) no-repeat center center fixed");

    }
       $('#submit-btn').click(function(event){
         $('#city-type').val('');
         event.preventDefault();

       });
   });
});
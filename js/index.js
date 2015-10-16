//document ready
$(document).ready(function(){


//create an array of the cities
var city = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];
  //create a for loop for the city options
  for (var i = 0; i < 5; i++) {
   //console.log(city[i]);
   // append the city as option for dropdown
   $('#city-type').append('<option>' + city[i] + '</option>');
 }

//user enters city name
//on click submit-btn update the background image of the page based on users input
// update the background based on the users input
    $('#city-type').change(function(){
    var city = $('#city-type').val()

      //if user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if (city == "NYC"){
      //KEPT THIS IN FOR PERSONAL NOTES, SHOWING THERES ANOTHER WAY
      //$('body').css("background", "url(images/nyc.jpg) no-repeat center center fixed");
      $("body").attr("class", "nyc");

      //if user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    } else if (city == "SF") {
      //KEPT THIS IN FOR PERSONAL NOTES, SHOWING THERES ANOTHER WAY
      //$('body').css("background", "url(images/sf.jpg) no-repeat center center fixed");
       $('body').attr("class", "sf");

      //if user submits "LA" or "Los Angeles" or "LAX" make the background of the page la.jpg
    } else if (city == "LA") {
      //KEPT THIS IN FOR PERSONAL NOTES, SHOWING THERES ANOTHER WAY
       //$('body').css("background", "url(images/la.jpg) no-repeat center center fixed");
       $("body").attr("class","la");

      //if user submits "Austin" or "ATX" make the background of the page austin.jpg
    } else if (city == "ATX") {
      //KEPT THIS IN FOR PERSONAL NOTES, SHOWING THERES ANOTHER WAY
      // $('body').css("background", "url(images/austin.jpg) no-repeat center center fixed");
      $("body").attr("class", "austin");

      //if user submits "Sydney" or "SYD" make the background of the page sydney.jpg
    } else if (city == "SYD") {
      //KEPT THIS IN FOR PERSONAL NOTES, SHOWING THERES ANOTHER WAY
     //$('body').css("background", "url(images/sydney.jpg) no-repeat center center fixed");
     $("body").attr("class", "sydney");

    }
    //submit button click
       $('#submit-btn').click(function(event){
         $('#city-type').val('');
         //prevent page defaulting
         event.preventDefault();

       });
   });
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
 //variables useed 
  var setDate = dayjs()
  var changingSchedule = setDate.format("H")
  var showingDate = setDate.format('dddd MMMM DD, YYYY')
  var showingTime = setDate.format('hh' + ':' + 'mm A')
  var toDo = $("textarea")
  
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // setting the date and time 
  $("p#currentDay").text(showingDate)
  $("p#currentTime").text(showingTime)

  // click function that should save the users schedule to local storage
  $(".saveButton").click(function() {
      console.log("I work")
      localStorage.setItem("toDoList", )
  })



  console.log(changingSchedule)
  
//making the background color of the textarea change based on the time of day
  if ( changingSchedule < 9) {
    $('div#hour-9').addClass('future')
  } else if (changingSchedule >= 9 && changingSchedule < 10) {
    $('div#hour-9').removeClass('future')
    $('#hour-9').addClass('present')
  } else if (changingSchedule >= 10 && changingSchedule <= 24) {
    $('div#hour-9').remove('present')
    $('#hour-9').addClass('past')
  } else { 
    $('div#hour-9').remove('past')
    $('#hour-9').addClass('future')
  }; 

  if ( changingSchedule < 10) {
    $('div#hour-10').addClass('future')
  } else if (changingSchedule >= 10 && changingSchedule < 11) {
    $('div#hour-10').removeClass('future')
    $('#hour-10').addClass('present')
  } else if (changingSchedule >= 11 && changingSchedule <= 24) {
    $('div#hour-10').remove('present')
    $('#hour-10').addClass('past')
  } else { 
    $('div#hour-10').remove('past')
    $('#hour-10').addClass('future')
  }; 

  if ( changingSchedule < 11) {
    $('div#hour-11').addClass('future')
  } else if (changingSchedule >= 11 && changingSchedule < 12) {
    $('div#hour-11').removeClass('future')
    $('#hour-11').addClass('present')
  } else if (changingSchedule >= 12 && changingSchedule <= 24) {
    $('div#hour-11').remove('present')
    $('#hour-11').addClass('past')
  } else { 
    $('div#hour-11').remove('past')
    $('#hour-11').addClass('future')
  }; 

  if ( changingSchedule < 12) {
    $('div#hour-12').addClass('future')
  } else if (changingSchedule >= 12 && changingSchedule < 13) {
    $('div#hour-12').removeClass('future')
    $('#hour-12').addClass('present')
  } else if (changingSchedule >= 13 && changingSchedule <= 24) {
    $('div#hour-12').remove('present')
    $('#hour-12').addClass('past')
  } else { 
    $('div#hour-12').remove('past')
    $('#hour-12').addClass('future')
  }; 

  if ( changingSchedule < 13) {
    $('div#hour-1').addClass('future')
  } else if (changingSchedule >= 13 && changingSchedule < 14) {
    $('div#hour-1').removeClass('future')
    $('#hour-1').addClass('present')
  } else if (changingSchedule >= 14 && changingSchedule <= 24) {
    $('div#hour-1').remove('present')
    $('#hour-1').addClass('past')
  } else { 
    $('div#hour-1').remove('past')
    $('#hour-1').addClass('future')
  }; 

  if ( changingSchedule < 14) {
    $('div#hour-2').addClass('future')
  } else if (changingSchedule >= 14 && changingSchedule < 15) {
    $('div#hour-2').removeClass('future')
    $('#hour-2').addClass('present')
  } else if (changingSchedule >= 15 && changingSchedule <= 24) {
    $('div#hour-2').remove('present')
    $('#hour-2').addClass('past')
  } else { 
    $('div#hour-2').remove('past')
    $('#hour-2').addClass('future')
  }; 

  if ( changingSchedule < 15) {
    $('div#hour-3').addClass('future')
  } else if (changingSchedule >= 15 && changingSchedule < 16) {
    $('div#hour-3').removeClass('future')
    $('#hour-3').addClass('present')
  } else if (changingSchedule >= 16 && changingSchedule <= 24) {
    $('div#hour-3').remove('present')
    $('#hour-3').addClass('past')
  } else { 
    $('div#hour-3').remove('past')
    $('#hour-3').addClass('future')
  }; 

  if ( changingSchedule < 16) {
    $('div#hour-4').addClass('future')
  } else if (changingSchedule >= 16 && changingSchedule < 17) {
    $('div#hour-4').removeClass('future')
    $('#hour-4').addClass('present')
  } else if (changingSchedule >= 17 && changingSchedule <= 24) {
    $('div#hour-4').remove('present')
    $('#hour-4').addClass('past')
  } else { 
    $('div#hour-4').remove('past')
    $('#hour-4').addClass('future')
  }; 

  if ( changingSchedule < 17) {
    $('div#hour-5').addClass('future')
  } else if (changingSchedule >= 17 && changingSchedule < 18) {
    $('div#hour-5').removeClass('future')
    $('#hour-5').addClass('present')
  } else if (changingSchedule >= 18 && changingSchedule <= 24) {
    $('div#hour-5').remove('present')
    $('#hour-5').addClass('past')
  } else { 
    $('div#hour-5').remove('past')
    $('#hour-5').addClass('future')
  }; 

  if ( changingSchedule < 18) {
    $('div#hour-6').addClass('future')
  } else if (changingSchedule >= 18 && changingSchedule < 19) {
    $('div#hour-6').removeClass('future')
    $('#hour-6').addClass('present')
  } else if (changingSchedule >= 19 && changingSchedule <= 24) {
    $('div#hour-6').remove('present')
    $('#hour-6').addClass('past')
  } else { 
    $('div#hour-6').remove('past')
    $('#hour-6').addClass('future')
  }; 

  if ( changingSchedule < 19) {
    $('div#hour-7').addClass('future')
  } else if (changingSchedule >= 19 && changingSchedule < 20) {
    $('div#hour-7').removeClass('future')
    $('#hour-7').addClass('present')
  } else if (changingSchedule >= 20 && changingSchedule <= 24) {
    $('div#hour-7').remove('present')
    $('#hour-7').addClass('past')
  } else { 
    $('div#hour-7').remove('past')
    $('#hour-7').addClass('future')
  }; 


 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

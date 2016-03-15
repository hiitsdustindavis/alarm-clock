var update = require('./../js/time-interface.js').update;

setAlarm = function(input) {
  var save = input;
  var currentTime = moment().format('h:mm:ss a');
  if(save.toString() === currentTime.toString())
  {
    return $("body").css("background-color", "red");
  }
}

$(document).ready(function(){
  var input = null;

    setInterval(update, 1000);
    $('#submit-alarm').submit(function(event){
      event.preventDefault();
      input = $('#input-alarm').val();
      alarm = setAlarm(input);

      $('#submit-alarm').append("<p>"+input+"</p>");
      setInterval(function(){
        var currentTime = moment().format('h:mm:ss a');
        if(input === currentTime)
        {
          return $(".body").css("background-color", "red");
        }
      }, 1000);
    });

  });

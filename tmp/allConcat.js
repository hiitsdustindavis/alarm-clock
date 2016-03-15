
var update = require('./../js/time-interface.js').update;
// UPDATE THE PINGPONG REQUIRE ABOVE
$(document).ready(function(){
  var input = null;

    setInterval(update, 1000);
});

var moment = require('moment');

exports.update = function () {
  var dateTime = null;
  var date = moment(new Date());
  dateTime = $('#time').html(date.format('LTS'));
  return dateTime;
};

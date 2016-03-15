var moment = require('moment');

exports.update = function () {
  var dateTime = null;
  var date = moment(new Date());
  dateTime = $('#time').html(date.format('LTS'));
  return dateTime;
};

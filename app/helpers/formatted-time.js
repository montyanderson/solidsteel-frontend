 /* global moment:true */

import Ember from 'ember';

export function formattedTime(ms) {
	var tempTime = moment.duration(ms);
    var hours = tempTime.hours();
    var mins = tempTime.minutes();
    var secs = tempTime.seconds();
  return (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
}

export default Ember.Handlebars.makeBoundHelper(formattedTime);

 /* global moment:true */

import Ember from 'ember';

export function formattedTime(ms) {
	var tempTime = moment.duration(ms);

  return tempTime.hours() + ":" + tempTime.minutes() + ":" + tempTime.seconds();
}

export default Ember.Handlebars.makeBoundHelper(formattedTime);

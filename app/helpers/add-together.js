import Ember from 'ember';

export function addTogether(count1, count2) {
	var totalPlays = count1 + count2;
	if (totalPlays) {
		return totalPlays + " plays";
	} else {
		return "";
	}
}

export default Ember.Handlebars.makeBoundHelper(addTogether);

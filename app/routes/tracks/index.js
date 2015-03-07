import Ember from 'ember';

export default Ember.Route.extend({
	needs: ['broadcast'],

	beforeModel : function(){
		this.controllerFor('broadcast').set('showingTracks', true).set('plusMinus', '–');
	}
});
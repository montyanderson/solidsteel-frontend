import Ember from 'ember';

export default Ember.Route.extend({
	needs: ['broadcast'],

	beforeModel : function(){
		this.controllerFor('broadcast').set('showingTracks', true).set('plusMinus', '–');
	},

	 actions: {
	 	willTransition: function(transition) {
	      this.controllerFor('application').set('showingTracks', 'false');
	      this.controllerFor('broadcast').set('showingTracks', 'false');
	      this.controllerFor('broadcast').set('plusMinus', '+');
	    }
	 }
});
import Ember from 'ember';

export default Ember.Route.extend({
	needs: ['application', 'broadcast'],

	beforeModel : function(){
		this.controllerFor('broadcast').set('showingTracks', true).set('plusMinus', '–');
	},

	 actions: {
	 	willTransition: function() {
	 		this.controllerFor('broadcast').set('showingTracks', true).set('plusMinus', '–');
	    }
	 }
});
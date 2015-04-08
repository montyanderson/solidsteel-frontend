import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),

  showingTracklisting: true,

  showingTracks: true,

  showingTracksTab: true,

  actions : {
  	
    swipeAway: function() {
      this.transitionToRoute('broadcast');
    },

    toggleTracks : function(){
      if (!this.showingTracksTab) {
        this.set('showingTracksTab', true);
      }
    },

    toggleSynopsis : function(){
  		if (this.showingTracksTab) {
  			this.set('showingTracksTab', false);
      }
    }
  }
});
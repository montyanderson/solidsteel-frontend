import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),

  showingTracklisting: true,

  showingTracks: true,

  actions : {
  	
    swipeAway: function() {
      this.transitionToRoute('broadcast');
    },

    toggleTracks : function(){
      if (!this.showingTracks) {
        this.set('showingTracks', true);
      }
    },

    toggleSynopsis : function(){
  		if (this.showingTracks) {
  			this.set('showingTracks', false);
      }
    }
  }
});
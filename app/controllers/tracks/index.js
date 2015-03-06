import Ember from 'ember';

export default Ember.Controller.extend({
  
  showingTracklisting: true,

  showingTracks: true,

  actions : {
  	
    toggleTracksSynopsis : function(){
  		if (this.showingTracks) {
  			this.set('showingTracks', false);
  		} else {
  			this.set('showingTracks', true);
  		}
  	},

    togglePanel : function(){
      if (this.showingTracklisting) {
        this.set('showingTracklisting', false);
      } else {
        this.set('showingTracklisting', true);
      }
    }
  }
});
import Ember from 'ember';

Ember.Handlebars.registerBoundHelper('twofigurecounter', function(integer) {
    integer++;
    if(integer < 9) {
      return '0' + integer;
    } else {
      return integer;
    }
});

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
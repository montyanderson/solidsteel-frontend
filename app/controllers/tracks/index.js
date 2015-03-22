import Ember from 'ember';

Ember.Handlebars.registerBoundHelper('twofigurecounter', function(integer) {
    integer++;
    if(integer <= 9) {
      return '0' + integer;
    } else {
      return integer;
    }
});

export default Ember.Controller.extend({
  
  showingTracklisting: true,

  showingTracks: true,

  actions : {
  	
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
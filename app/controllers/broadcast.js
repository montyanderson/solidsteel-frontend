import Ember from 'ember';

export default Ember.Controller.extend({
  
  showingTracks: false,

  plusMinus: "+",

  actions: {

  	toggleTrax: function(){
  		if (!this.showingTracks) {
  			this.transitionTo('tracks');
  			this.set('showingTracks', true);
  			this.set('plusMinus', '–');
  		} else {
  			this.transitionTo('broadcast');
  			this.set('showingTracks', false);
  			this.set('plusMinus', '+');
  		}
  	}

  }
});
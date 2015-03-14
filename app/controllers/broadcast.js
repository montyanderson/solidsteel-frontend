import Ember from 'ember';

export default Ember.Controller.extend({

  showingTracks: false,

  plusMinus: "+",

  currentPart: null,

  setCurrentMix: function(mixNumber){
    // make all mixes not current
    this.get('model.mixes').forEach(function(mix){
      mix.set('isCurrent', false);
    });

    // increment current mix
    if (mixNumber !== undefined) {
      this.currentPart = mixNumber;
    } else {
      this.currentPart ++;
    }

    // don't try to play a mix that doesn't exist
    if(this.currentPart >= this.get('model.mixes').get('length')){
      this.currentPart = 0;
    }

    // set current mix by setting an attribute on one of the Mix models - this
    // will make the mix conttoller respond by playing its model's audio
    this.get('model.mixes').objectAt(this.currentPart).set('isCurrent', true);
  },

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
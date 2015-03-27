import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({

  needs: ['application'],

  showingTracks: false,

  plusMinus: "+",

  currentPart: null,

  isPlaying: true,
  
  mixStyle: function(){
    return ENV.APP.API_HOST + this.get('mixImgPath');
  }.property("mixImgPath"),

  mixImgPath: null,

  stopCurrentMix: function(){
    this.currentlyPlaying.stop();
    this.currentlyPlaying.destruct();
    this.currentlyPlaying = false;
    this.get('model.mixes').forEach(function(mix){
      mix.set('isCurrent', false);
      mix.set('progress', 0);
    });
  },

  setCurrentMix: function(mixNumber){

    // increment current mix, or play the first one if none specified
    if (mixNumber !== undefined) {
      this.stopCurrentMix();
      this.currentPart = mixNumber.get('part')-1;
    } else {
      if (this.currentPart === null) {
        console.log(this);
        this.currentPart = 0;
      } else {
        this.currentPart++;
      }
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
  			this.transitionToRoute('tracks');
  			this.set('showingTracks', true);
        this.get('controllers.application').set('showingTracks', true);
  			this.set('plusMinus', '–');
  		} else {
  			this.transitionToRoute('broadcast');
  			this.set('showingTracks', false);
        this.get('controllers.application').set('showingTracks', false);
  			this.set('plusMinus', '+');
  		}
  	}

  }
});
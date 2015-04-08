import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({

  needs: ['application'],

  showingTracks: false,

  showingFeaturedListing: true,

  hasEverClosedFeatured: false,

  plusMinus: "+",

  featuredPlusMinus: "-",

  currentPart: null,
  
  hasBeenOpened: function(){
    return false;
  }.property('hasBeenOpened'),

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),
  
  mixStyle: function(){
    return ENV.APP.API_HOST + this.get('mixImgPath');
  }.property("mixImgPath"),

  mixImgPath: null,

  playCurrentMix: function(){
    window.MyNewApp.isPlaying = true;
    window.MyNewApp.currentlyPlaying.play();
  },

  pauseCurrentMix: function(){
    window.MyNewApp.isPlaying = false;
    window.MyNewApp.currentlyPlaying.pause();
  },

  stopCurrentMix: function(reset){
    if (reset) {
      this.set('currentPart', null);
    }
    window.MyNewApp.mixPlaying = false;
    window.MyNewApp.isPlaying = false;
    if(window.MyNewApp.currentlyPlaying) {
      window.MyNewApp.currentlyPlaying.stop();
      window.MyNewApp.currentlyPlaying.destruct();
    }
    if(this.get('model.mixes')) {
      this.get('model.mixes').forEach(function(mix){
        mix.set('isCurrent', false);
        mix.set('progress', 0);
      });   
    }
  },

  nextMix: function(){
    // cancel everything playing now, so a new stream can start
    this.stopCurrentMix();
    this.currentPart++;
    this.setCurrentMix(this.currentPart);
  },

  switchMix: function(mix){
    if(mix.get('part')-1 === this.currentPart) {
      // do nothing, this mix is already playing
    } else {
      // mix models have parts 1 & 2, so we need to convert to mixes array indices 0 and 1
      this.setCurrentMix(mix.get('part')-1);
    }
  },

  setCurrentMix: function(mixNumber){

    // increment current mix, or play the first one if none specified
    if (mixNumber === 0 || mixNumber === 1) {
        this.stopCurrentMix();

        // make sure we draw a full progress line for 'completely played' mixes
        // so check if current playing mix is the first one and if it 
        // is then we draw a line. don;t do this for the second part because
        // it looks weird.
        if(this.currentPart < this.get('model.mixes').get('length')-1) {
          this.get('model.mixes').objectAt(this.currentPart).set('complete', true);
        }   
        this.currentPart = mixNumber;
    } else {
        if (this.currentPart === null) {
          // first mix played
          this.currentPart = 0;
        } else {
          // this means a mix has been playing at somoe point
          this.currentPart++;
        }
    }

    // don't try to play a mix that doesn't exist
    if(this.currentPart >= this.get('model.mixes').get('length')){
      this.transitionToRoute('broadcasts');
    }

    // set current mix by setting an attribute on one of the Mix models - this
    // will make the mix conttoller respond by playing its model's audio
    this.get('model.mixes').objectAt(this.currentPart).set('isCurrent', true);
  },

  actions: {

  	toggleTrax: function(){
      this.set('hasBeenOpened', true);
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
  	},

    toggleFeatured: function(){
      if (!this.showingFeaturedListing) {
        this.set('showingFeaturedListing', true);
        this.set('featuredPlusMinus', '–');
      } else {
        this.set('showingFeaturedListing', false);
        this.set('featuredPlusMinus', '+');
      }
    }

  }
});
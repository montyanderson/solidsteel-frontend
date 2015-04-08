/* global SC:true */
import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'broadcast'],

  progress: 0,

  play: function(){
    
    if(window.MyNewApp.mixPlaying){
      return false;
    }

    var self = this;
    var selfmodel = this.get('model');
    
    if(this.get('model.isCurrent')) {

      SC.whenStreamingReady(function() {
        SC.stream("/tracks/"+self.get('model.soundcloudId')+"?secret_token="+self.get('model.secret'), {
          useHTML5Audio: true,
          preferFlash: false
        }, function(sound){
          
          // store ref to soundcloud on model
          window.MyNewApp.currentlyPlaying = sound;
          window.MyNewApp.isPlaying = true;
          window.MyNewApp.mixPlaying = true;
          
          window.MyNewApp.currentlyPlaying.play({
            whileplaying: function() {
              // using self.set('model.progress') worked initially
              // but after transitioning to another rout the reference
              // to the model seemed to get lost. so i'm explicitly
              // referencing the model in the callback here
              selfmodel.set('progress', sound.position);
            },

            whileloading: function() {
              self.set('model.duration', sound.durationEstimate);
            },

            onfinish: function(){
              self.get('controllers.broadcast').nextMix();
            }

          });
        });
      });

      // set background image for this mix, if there one...
      if(this.get('model.background_image')) {
        this.get('controllers.application').set('bgImgPath', this.get('model.background_image'));
      } else {
        this.get('controllers.application').set('bgImgPath', null);
      }

      // set mix image for this mix, if there is one...
      if(this.get('model.mix_image')) {
        this.get('controllers.broadcast').set('mixImgPath', this.get('model.mix_image'));
      }

    } 
    
  }.observes("model.isCurrent").on('init'),

  actions: {
    
    waveHover: function(hoverTime){
        this.set('model.searching', true);
        this.set('model.searchTime', this.get('model.duration')*hoverTime);
    },

    stopWaveHover: function(){
        this.set('model.searching', false);
    },

    // switches from the current mix to the supplied mix
    makeCurrent: function(mix){
      this.get('controllers.broadcast').switchMix(mix);
    },

    // this function is for skipping within a track, or skipping to another track,
    // in response to a click on the audio wave
    skip: function(model, position){
      if(!this.get('model.isCurrent')) {
        this.send('makeCurrent', model);
      }
      window.MyNewApp.currentlyPlaying.setPosition( this.get('model.duration')*position);
    }

  }

});
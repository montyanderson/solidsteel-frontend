/* global SC:true */
import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'broadcast'],

  progress: 0,

  play: function(){
    
    var self = this;

    // play this mix's soundcloud audio
    if(this.get('model.isCurrent')) {

      // check we're not already playing this model...
      // only stream a track if we're not already playing it
      if(!
        (
           window.MyNewApp.currentlyPlaying && 
           this.get('controllers.broadcast.model.id') === this.get('model.broadcast.id')
        )
        ){
          SC.whenStreamingReady(function() {
            SC.stream("/tracks/"+self.get('model.soundcloudId'), {
              useHTML5Audio: true,
              preferFlash: false
            }, function(sound){
              
              // store ref to soundcloud on model
              window.MyNewApp.currentlyPlaying = sound;
              window.MyNewApp.isPlaying = true;
              
              sound.setVolume(0)

              window.MyNewApp.currentlyPlaying.play({
                whileplaying: function() {
                  // update playhead position
                  self.set('model.progress', sound.position);
                },

                whileloading: function() {
                  // update duration display
                  self.set('model.duration', sound.durationEstimate);
                },

                onfinish: function(){
                  self.get('controllers.broadcast').nextMix();
                }

              });
            });
          });
        }

      // set background image for this mix, if there one...
      if(this.get('model.background_image')) {
        this.get('controllers.application').set('bgImgPath', this.get('model.background_image'));
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

    stopWaveHover: function(hoverTime){
        this.set('model.searching', false);
    },

    makeCurrent: function(mix){
      this.get('controllers.broadcast').setCurrentMix(mix.get('part')-1);
    },

    skip: function(model, position){
      if(!this.get('model.isCurrent')) {
        this.send('makeCurrent', model);
      }
      window.MyNewApp.currentlyPlaying.setPosition( this.get('model.duration')*position);
    }

  }

});
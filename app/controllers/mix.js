import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  init: function(){
    
  },

  play: function(){
    
    if(window.sound) {
      window.sound.stop();
    }

    // play this mix's soundcloud audio
    if(this.get('model.isCurrent')) {

      self = this;

      //SC.whenStreamingReady(function() {
        SC.stream("/tracks/"+self.get('model.soundcloudId'), function(sound){
          
          window.sound = sound;

          // store ref to soundcloud on model
          self.set('model.sound', sound);

          //sound.setVolume(0)

          self.set('model.progress', 0 );

          sound.play({
            whileplaying: function() {
              // update playhead position
              self.set('model.progress', this.position );
            },

            whileloading: function() {
              // update duration display
              self.set('model.duration', sound.durationEstimate);
            }

          });
        });
      //});

      // set background image for htis mix, if there is an image
      if(this.get('model.image')) {
        this.get('controllers.application').set('bgImgPath', this.get('model.image'));
      }

    }
    
  }.observes("model.isCurrent").on('init'),

  actions: {

    makeCurrent: function(mix){
      this.parentController.setCurrentMix(mix);
    },

    skip: function(model, position){
      if(model.id != self.get('model.id')) {
        this.send('makeCurrent', model);
      }
      self.get('model.sound').setPosition( self.get('model.duration')*position);
    }

  }

});
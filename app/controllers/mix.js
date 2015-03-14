import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  init: function(){
    
  },

  play: function(){
    
    if(window.sound) {
      window.sound.stop();
    }

    if(this.get('model.isCurrent')) {
      // play this mix's soundcloud audio
      SC.stream("/tracks/"+this.get('model.url'), function(sound){
        window.sound = sound;
        window.sound.play();
        console.log(window.sound);
      });

      // set background image for htis mix, if there is an image
      if(this.get('model.image')) {
        console.log(this.get('model.image'));
        this.get('controllers.application').set('bgImgPath', this.get('model.image'));
      }
    }
    
  }.observes("model.isCurrent").on('init'),

  actions: {

    makeCurrent: function(){
      this.parentController.setCurrentMix();
    }

  }

});
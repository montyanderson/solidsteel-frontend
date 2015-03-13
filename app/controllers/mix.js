import Ember from 'ember';

export default Ember.Controller.extend({
  
  init: function(){
    
  },

  play: function(){
    SC.stream("/tracks/"+this.get('url'), function(sound){
      sound.play();
    });

    this.get('controllers.application').set('bgImgPath', this.get('image'));
  }

});
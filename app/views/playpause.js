import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'playpause',

  tagName: 'span',
  
  actions : {
    doToggle: function(){
        if(this.get('controller.isPlaying')) {
            this.set('controller.isPlaying', false);
            this.get('controller').send('pause');
        } else {
            this.set('controller.isPlaying', true);
            this.get('controller').send('play');
        }
    }
  }

});
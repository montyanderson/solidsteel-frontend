import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'icons/logo',

  tagName: 'span',
  
  actions : {
    doToggle: function(){
        if(this.get('controller.controllers.application.isPlaying')) {
            this.set('controller.controllers.application.isPlaying', false);
            this.get('controller.controllers.application').send('pause');
        } else {
            this.set('controller.controllers.application.isPlaying', true);
            this.get('controller.controllers.application').send('play');
        }
    }
  }

});
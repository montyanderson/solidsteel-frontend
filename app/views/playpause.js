import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'playpause',

  tagName: 'span',

  hover: false,

  isPlaying: true,

  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); },

  actions : {
    doToggle: function(){
        if(window.MyNewApp.isPlaying) {
            this.set('isPlaying', false);
            this.get('controller').send('pause');
        } else {
            this.set('isPlaying', true);
            this.get('controller').send('play');
        }
    }
  }

});
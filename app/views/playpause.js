import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'playpause',

  tagName: 'span',

  hover: false,

  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); },

  click: function(){
    // if track is playing, pause it

    // if track it not playing, play it
  }

});
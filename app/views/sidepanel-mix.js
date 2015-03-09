import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'mix-in-sidepanel',

  tagName: 'div',

  mouseEnter: function(event) {
    this.wait = window.setTimeout(this.woop, 1000);
  },

  mouseLeave: function(event) {
    window.clearTimeout(this.wait);
  },

  woop: function(){
  	console.log('play mix after 1 second hover? and show play/pause button here?');
  }

});
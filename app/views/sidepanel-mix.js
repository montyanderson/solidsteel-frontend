import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'mix-in-sidepanel',

  tagName: 'div',

  hover: false,

  // mouseEnter: function(event) {
  //   this.wait = window.setTimeout(this.woop, 1000);
  // },

  // mouseLeave: function(event) {
  //   window.clearTimeout(this.wait);
  // },
  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); }

});
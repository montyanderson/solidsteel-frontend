import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'mix-in-sidepanel',

  classNameBindings: ['hover'],

  tagName: 'div',

  hover: false,

  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); }

});
import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'mix-in-sidepanel',

  classNameBindings: ['hover'],

  tagName: 'div',

  hover: false,

  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); },

  click: function(e){
    // scroll element to top of sidepanel
    var nearestMix = Ember.$(e.target).closest('.mix-in-sidepanel').offset().top;
    var container = Ember.$(".sidepanel").scrollTop();
    Ember.$(".sidepanel").animate({scrollTop: nearestMix+container}, 500);

    // show tracklist below it

    // hide plus, show minus

    
  }

});
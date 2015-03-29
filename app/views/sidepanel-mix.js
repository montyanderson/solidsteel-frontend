import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'mix-in-sidepanel',

  classNameBindings: ['hover'],

  tagName: 'div',

  hover: false,

  hasTracks: false,

  top: false,

  mouseEnter: function() { this.set('hover', true); },
  mouseLeave: function() { this.set('hover', false); },

  click: function(e){

    if(!this.get('top')){
      // scroll element to top of sidepanel
      var nearestMix = Ember.$(e.target).closest('.mix-in-sidepanel').offset().top;
      var container = Ember.$(".sidepanel").scrollTop();
      Ember.$(".sidepanel").animate({scrollTop: nearestMix+container}, 500);
    }

    if(!this.get('hasTracks')) {
      this.set('top', true);
      // show tracklist below it
      this.get('controller').send('sneakTracks', this.get('controller.model'));
      // hide plus, show minus
      this.set('hasTracks', true);
      // extend div to show tracks
      //Ember.$(e.target).closest('.mix-in-sidepanel').css('height', '100%');
    } else {
      this.set('top', false);
      this.set('hasTracks', false);
      //Ember.$(e.target).closest('.mix-in-sidepanel').css('height', '94px');
    }
  }

});
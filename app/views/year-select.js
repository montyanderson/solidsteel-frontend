import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'year-select',

  tagName: 'div',

  mouseLeave: function(){
  	var yy = ( 54 * (2015 - this.get('controller.year') ) );
    Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  },

  didInsertElement: function(){
  	var yy = ( 54 * (2015 - this.get('controller.year')) );
    Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  }

});
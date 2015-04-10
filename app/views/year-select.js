import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'year-select',

  tagName: 'div',

  hover: false,

  tap: function(e){
    if(this.get('hover')) {
      var yy = ( 44 * (2015 - e.target.text) );
      this.set('hover', false);
      Ember.$("#year-selector").animate({scrollTop : yy}, 0);
    } else {
      this.set('hover', true);
    }
  },

  didInsertElement: function(){
  	var yy = ( 44 * (2015 - this.get('controller.year')) );
    Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  }

});
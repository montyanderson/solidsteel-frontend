import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'year-select',

  tagName: 'div',

  tap: function(e){
  	var yy = ( 44 * (2015 - e.target.text) );
    Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  },

  didInsertElement: function(){
  	var yy = ( 44 * (2015 - this.get('controller.year')) );
    Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  }

});
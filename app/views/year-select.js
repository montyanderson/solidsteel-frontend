import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'year-select',

  tagName: 'div',

  hover: false,

  year: function(){
    return this.yy
  }.property('yy'),

  tap: function(e){
    if(this.get('hover')) {
      console.log(Ember.$(e.target).closest('p').find('a').text());
      this.set('yy', Ember.$(e.target).closest('p').find('a').text());
      this.set('hover', false);
      //Ember.$("#year-selector").animate({scrollTop : yy}, 0);
    } else {
      this.set('hover', true);
    }
  },

  didInsertElement: function(){
  	this.set('yy', this.get('controller.year'));
    //Ember.$("#year-selector").animate({scrollTop : yy}, 0);
  }

});
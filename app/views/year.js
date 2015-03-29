import Ember from 'ember';

export default Ember.View.extend({
  
  templateName: 'year',

  classNames: ['year'],

  tagName: 'div',

  yearHasHighlight: function(){
    return this.get('controller').findImageForYear;
  }.property('yearHasHighlight'),

  actions: {

    gotoyear: function(y){
        this.get('controller').transitionToRoute('broadcasts', {queryParams: {year: y}});
    }
  }

});
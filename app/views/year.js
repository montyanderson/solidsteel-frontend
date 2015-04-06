import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.View.extend({
  
  templateName: 'year',

  classNames: ['year'],

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),

  tagName: 'div',

  actions: {

    gotoyear: function(y){
        this.get('controller').transitionToRoute('broadcasts', {queryParams: {year: y}});
    }
  }

});
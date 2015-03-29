/* global moment:true */

import Ember from 'ember';
import Groupable from '../../mixins/groupable';

export default Ember.ArrayController.extend(Groupable, {
  
  ungroupedContentBinding: 'content', //tell Groupable where your default content is

  getHighlights: "",

  group: function(broadcast) {
    var x = Ember.Object.create({
      key: moment.utc(broadcast.get('broadcast_date')).format('MMM'), // using momentjs
    });
    return x;
  },

  hasHighlights: function() {
    return this.filterBy('highlight', true).get('length');
  }.property('@each.highlight'),

  queryParams: ['year'],

  year: null,

  showingResults: function(){
    return (this.year !== null);
  }.property('year'),

  rootpath: function(){
    return "woop";
  }.property('rootpath'),

  highlights: null,

  findImageForYear: function(){
    console.log(this.filterBy('highlight', true)[0]);
    return this.filterBy('highlight', true)[0];
    // return this.find(function(item, index, enumerable){
    //   console.log(item.get('highlight') && moment.utc(item.get('broadcast_date')).year() == '2015');
    //   return  item.get('highlight') && moment.utc(item.get('broadcast_date')).year() == '2015';
    // })
  }.property('content.@each'),

  actions: {
    viewFeatured: function() {
      if(this.get('getHighlights')) {
        this.set('getHighlights', false);
      } else {
        this.set('getHighlights', true);
      }
    }
  }

});
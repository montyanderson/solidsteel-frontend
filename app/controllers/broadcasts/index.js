/* global moment:true */

import Ember from 'ember';
import Groupable from '../../mixins/groupable';

export default Ember.ArrayController.extend(Groupable, {
  
  ungroupedContentBinding: 'content', //tell Groupable where your default content is

  group: function(activity) {
    var x = Ember.Object.create({
      key: moment.utc(activity.get('broadcast_date')).format('MMM'), // using momentjs to pluck the day from the date
      description: 'some string describing this group (if you want)'
     });
    return x;
  },

  queryParams: ['year'],

  year: null,

  showingResults: function(){
    return (this.year !== null);
  }.property('year')

});
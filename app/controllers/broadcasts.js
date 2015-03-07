/* global moment:true */

import Ember from 'ember';
import Groupable from '../mixins/groupable';

export default Ember.ArrayController.extend(Groupable, {
  
  ungroupedContentBinding: 'content', //tell Groupable where your default content is

  //the callback that will be called for every
  //item in your content array -
  //just return the same 'key' to put it in the same group
  group: function(activity) {
    var x = Ember.Object.create({
      key: moment.utc(activity.get('broadcast_date')).format('MMM'), // using momentjs to pluck the day from the date
      description: 'some string describing this group (if you want)'
     });
    return x;
  },

  queryParams: ['year'],
  year: null,
  panelOpen: false
});
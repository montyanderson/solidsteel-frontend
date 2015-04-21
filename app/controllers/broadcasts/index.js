/* global moment:true */

import Ember from 'ember';
import Groupable from '../../mixins/groupable';

export default Ember.ArrayController.extend(Groupable, {
  
  needs: ['broadcast', 'application'],

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

  highlights: null,

  actions: {
    viewFeatured: function() {
      if(this.get('getHighlights')) {
        this.set('getHighlights', false);
      } else {
        this.set('getHighlights', true);
      }
    },
    
    playBroadcast: function(model){
        this.get('controllers.broadcast').stopCurrentMix(true);
        this.set('controllers.broadcast.audioOptIn', true);
        this.transitionToRoute('broadcast', model);
    }
  }

});
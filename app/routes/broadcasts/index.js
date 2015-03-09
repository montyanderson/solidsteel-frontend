import Ember from 'ember';
import ResetScroll from '../../mixins/resetscroll';

export default Ember.Route.extend(ResetScroll, {

  queryParams: {
    year: {
      refreshModel: true
    }
  },

  model: function(params) {
    if(params.year && params.year !== undefined) {
      return this.store.find('broadcast', {year: params.year || "null"});
    }
  },

  afterModel: function(){
    this.activate();
  }

});
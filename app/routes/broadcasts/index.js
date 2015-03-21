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
      this.year = params.year;
      return this.store.find('broadcast', {year: params.year || "null"});
    }
  },

  afterModel: function(controller){
    this.resetscroll(this.year);
  }

});
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
    } else {
      // return years and year pics?
      return this.store.find('broadcast', {highlights: 'true'});
    }
  },

  afterModel: function(){
    this.resetscroll(this.year);
  }

});
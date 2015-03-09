import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    year: {
      refreshModel: true
    }
  },

  model: function(params) {
    if(params.year && params.year !== undefined) {
      return this.store.find('broadcast', {year: params.year || "null"});
    }
  }

});
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    query: function(keyword) {
      this.transitionTo('search.results', keyword);
    }
  }
});
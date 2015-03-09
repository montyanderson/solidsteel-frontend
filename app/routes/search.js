import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    query: function(keyword) {
      this.controller.set('searching', false);
      this.transitionTo('search.results', keyword);
    }
  }
});
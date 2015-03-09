import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('broadcast', 'latest');
  },

  afterModel: function(model) {
  	this.transitionTo('broadcast', model);
  }

});
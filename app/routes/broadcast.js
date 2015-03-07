import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
  	this.store.fetch('broadcast', params.broadcast_id);
    return this.store.find('broadcast', params.broadcast_id);

  },

  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      this.transitionTo('/not-found');
    }
  }
  
});
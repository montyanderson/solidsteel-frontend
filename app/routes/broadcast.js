import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('broadcast', params.broadcast_id);
  },

  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      this.transitionTo('/not-found');
    }
  }
  
});
import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.set('letter', params.letter);
	  return this.store.find('dj', {alpha: params.letter});
	},

	setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('letter', this.letter);
  },

  actions: {
    
    willTransition: function(transition) {
      this.get('controller').send('resetswipe');
    }
  }

});
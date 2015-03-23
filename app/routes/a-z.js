import Ember from 'ember';

export default Ember.Route.extend({
  
  model: function() {
    return false;
  },

  afterModel: function(model) {
  	this.transitionTo('a-z.letter', 'a');
  }

});
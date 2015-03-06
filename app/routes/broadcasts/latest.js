import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: "broadcasts.um",

  model: function(params) {
    return this.store.find('broadcast', 'latest');
  },

  renderTemplate: function() {
    this.render('broadcast');
  }

});
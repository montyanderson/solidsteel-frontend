import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: "broadcasts",

  setupController: function(controller, model) {
  	console.log(controller);
    controller.set('model', model);
  },

  model: function(params) {
  	console.log('in model: ' + this.get("controller.year"));
    return this.store.find('broadcast', {year: this.get('controller.year')});
  },

  actions: {
    queryParamsDidChange: function(params) {
      console.log("queryParamsDidChange : was " + this.get('controller.year')); 
      console.log("queryParamsDidChange : will be " + (params.year || 'default value'));

      //this.get('controller').set('year', params.year)
      this.refresh();
    }
  }

});
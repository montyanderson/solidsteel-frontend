import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: "broadcasts",

  model: function(params) {
    if (!params.year) {
      return false;
    }
    return this.store.find('broadcast', {year: params.year});
  },

  actions: {
    queryParamsDidChange: function(params) {
      this.set('controller.panelOpen', true);
      console.log("queryParamsDidChange : was " + this.get('controller.year')); 
      console.log("queryParamsDidChange : will be " + (params.year || 'default value'));
      this.refresh();
    }
  }

});
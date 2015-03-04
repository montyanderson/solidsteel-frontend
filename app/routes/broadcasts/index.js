import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: "broadcasts",

  model: function(params) {
    return this.store.find('broadcast', {year: params.year});
  },

  actions: {
    queryParamsDidChange: function(params) {
      this.set('controller.panelOpen', true);
      this.refresh();
    },

    getMixes: function(){
      console.log('woopppp');
    }
  }

});
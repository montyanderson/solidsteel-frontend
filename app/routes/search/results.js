import Ember from 'ember';

export default Ember.Route.extend({

 controllerName: "search.results",

  beforeModel : function(){
    this.controllerFor('search').set('showingResults', true);
  },

  model: function(params) {
  	this.set('keyword', params.keyword);
    return this.store.find('broadcast', {contains: params.keyword});
  },

  setupController: function(controller, model) {
  		controller.set('model', model);
      controller.set('keyword', this.keyword);
  },

  actions: {
    willTransition: function(){
      this.controllerFor('search').set('showingResults', false);
    }
  }

});
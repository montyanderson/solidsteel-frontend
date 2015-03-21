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
  },

  setupController: function(controller, model){
    if(controller.get('currentlyPlaying')){
      controller.stopCurrentMix();
    } else {
    }

    var self = this;

    if(!model.get('mixes').get('length')) {
      model.reload().then(function(){
        self.controller.set('model', model);
        self.controller.setCurrentMix();
      });
    }
    
    else {
      controller.set('model', model);
      controller.setCurrentMix();
    }
  }
  
});
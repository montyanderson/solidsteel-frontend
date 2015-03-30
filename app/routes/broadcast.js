import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('broadcast', params.broadcast_id);
  },

  // actions: {
  //   error: function (error) {
  //     Ember.Logger.error(error);
  //     this.transitionTo('/not-found');
  //   }
  // },

  setupController: function(controller, model){

    if(window.MyNewApp.mixPlaying) {
      return this;
    }

    if(!model.get('mixes').get('length')) {
      model.reload().then(function(){
        controller.set('model', model);
        controller.setCurrentMix();
      });
    } else {
      controller.set('model', model);
      controller.setCurrentMix();
    }
  }
  
});
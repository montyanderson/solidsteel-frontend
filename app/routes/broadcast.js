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
      console.log('yes there is a soudn playing');
      controller.stopCurrentMix();
    } else {
      console.log('nothing playgin eigt now');
    }

    if(!model.get('mixes').get('length')) {
      console.log('gonna load mix models...');
      model.reload().then(function(){
        
        controller.set('model', model);
        controller.setCurrentMix();
      });
    }
    
    else {
      console.log('standard');
      controller.set('model', model);
      controller.setCurrentMix();
    }
  }
  
});
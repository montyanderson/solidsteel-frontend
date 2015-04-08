import Ember from 'ember';
import ENV from '../config/environment';

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

    // may have clicked the nowplaying link to get here while a mix is playing...
    // so check if current playing model is the same as the one we're navigating to
    if (model === controller.get('model')) {
      return false;
    }

    if(window.MyNewApp.mixPlaying) {
      controller.stopCurrentMix(true);
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

    Ember.$.getJSON(ENV.APP.API_HOST + '/api/v1/broadcasts?featured=true').then(function(result){
      controller.set('featureds', result.broadcasts);
    });
  }
  
});
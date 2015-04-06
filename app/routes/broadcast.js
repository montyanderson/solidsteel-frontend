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

    if(window.MyNewApp.mixPlaying) {
      controller.stopCurrentMix(true);
    }

    if(!model.get('mixes').get('length')) {
      console.log('h1');
      model.reload().then(function(){
        controller.set('model', model);
        controller.setCurrentMix();
      });
    } else {
      console.log('h2');
      controller.set('model', model);
      controller.setCurrentMix();
    }

    var self = this;
    Ember.$.getJSON(ENV.APP.API_HOST + '/api/v1/broadcasts?featured=true').then(function(result){
      controller.set('featureds', result.broadcasts);
    });
  }
  
});
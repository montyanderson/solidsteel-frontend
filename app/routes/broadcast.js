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
    model.reload().then(function(){
      var soundcloudTrackId = model.serialize().mixes[0].url;
      SC.stream("/tracks/"+soundcloudTrackId, function(sound){
        sound.play();
      });

      controller.setAppBg(model.serialize().mixes[0].img);

    });

    controller.set('model', model);
    
  }
  
});
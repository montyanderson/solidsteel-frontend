import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  needs: ['broadcast'],

  classNames: ['MyApp-container'],

  myStyle: function(){
  	return "z-index: -1; position: fixed; top:4px; left: 4px; right: 4px; bottom: 4px; background: linear-gradient( rgba(0, 0, 0, 0.45),  rgba(0, 0, 0, 0.45)), url('" + ENV.APP.API_HOST + this.get('bgImgPath') + "') 50% / cover no-repeat;";
  }.property("bgImgPath"),

  bgImgPath: null,

  muted: false,

  isMuted: function(){
  	return this.muted;
  }.property('muted'),

  actions: {
  	mute: function(){
      
  		if(this.get('controllers.broadcast').currentlyPlaying){
  			if(this.get('muted')){
  				this.get('controllers.broadcast').currentlyPlaying.setVolume(100);
  				this.set('muted', false);
  			} else {
  				this.get('controllers.broadcast').currentlyPlaying.setVolume(0);
  				this.set('muted', true);
  			}
  		}
  	}
  }

});
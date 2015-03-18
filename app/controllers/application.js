import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  
  myStyle: function(){
  	return "z-index: -1; width: 100%; height: 100%; position: fixed; top:0; left: 0; right: 0; bottom: 0; background: linear-gradient( rgba(0, 0, 0, 0.45),  rgba(0, 0, 0, 0.45)), url('" + ENV.APP.API_HOST + this.get('bgImgPath') + "') 50% / cover no-repeat;";
  }.property("bgImgPath"),

  bgImgPath: ENV.APP.DEFAULT_IMAGE,

  muted: false,

  isMuted: function(){
  	return this.muted;
  }.property('muted'),

  actions: {
  	mute: function(){
  		if(window.sound){
  			if(this.get('muted')){
  				window.sound.setVolume(100);
  				this.set('muted', false);
  			} else {
  				window.sound.setVolume(0);
  				this.set('muted', true);
  			}
  		}
  	}
  }
});
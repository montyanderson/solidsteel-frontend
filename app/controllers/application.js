import Ember from 'ember';

export default Ember.Controller.extend({
  
  myStyle: function(){
  	return "z-index: -1; width: 100%; height: 100%; position: fixed; top:0; left: 0; right: 0; bottom: 0; background: linear-gradient( rgba(0, 0, 0, 0.45),  rgba(0, 0, 0, 0.45)), url('/assets/images/" + this.get('bgImgPath') + "') 50% / cover no-repeat;";
  }.property("bgImgPath"),

  bgImgPath: "default-bg.gif"

});
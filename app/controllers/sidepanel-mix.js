import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  
  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath')

});
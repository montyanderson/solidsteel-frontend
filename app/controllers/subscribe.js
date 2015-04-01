import Ember from 'ember';

export default Ember.Controller.extend({

  email: null,

  subscribeFailed: false,

  isProcessing: false,

  isSuccess: false,

  actions: {

    subscribe: function(){
        this.set('isProcessing', true); 
        this.set('subscribeFailed', false);
        var request = Ember.$.ajax({
            url: "http://solidsteel.us1.list-manage1.com/subscribe/post-json?u=6a14ebd3be69ddfacbaee8799&id=d6c8a1965f&MERGE0="+this.get('email')+"&c=?",
            dataType: 'jsonp'
        });
        request.then(this.success.bind(this), this.failure.bind(this));
    },

    focus: function(){
        this.set('email', '');
        this.set('isProcessing', false);
        this.set('isSuccess', false);
        this.set('subscribeFailed', false);
    }

  },

  success: function(resp) {
    if(resp.result === "error") {
        this.failure();
    } else {
        this.set('isSuccess', true);
    }
    this.set('isProcessing', false);
  },

  failure: function() {
    this.set("subscribeFailed", true);
  },
  
});
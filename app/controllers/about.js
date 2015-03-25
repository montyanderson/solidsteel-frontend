import Ember from 'ember';

export default Ember.Controller.extend({

  letter: '',

  dist: null,

  wasSwiped: false,

  actions: {

    swipe: function(){

        if(this.dist == undefined) {
            this.dist = Ember.$('.about').width();
        }

        var currentOffset = parseInt(Ember.$('.about').css('left'));

        Ember.$('.about').animate({
            'left': (currentOffset + -this.dist)
        }, 1000);

        this.set('wasSwiped', true);

    },

    backswipe: function(){
        if(this.dist == undefined) {
            this.dist = Ember.$('.about').width();
        }

        var currentOffset = parseInt(Ember.$('.about').css('left'));

        Ember.$('.about').animate({
            'left': (currentOffset + this.dist)
        }, 1000);

        this.set('wasSwiped', true);
    },

    resetswipe: function(){
        if (this.get('wasSwiped')) {
            Ember.$('.about').offset({
                'left': '176'
            });
        }
    }

  }
  
});
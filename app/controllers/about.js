import Ember from 'ember';

export default Ember.Controller.extend({

  letter: '',

  dist: null,

  wasSwiped: false,

  actions: {

    swipe: function(){

        if(this.dist == undefined) {
            this.dist = Ember.$('.alpha-index').width();
        }

        var currentOffset = parseInt(Ember.$('.alpha-index').css('left'));

        Ember.$('.alpha-index').animate({
            'left': (currentOffset + -this.dist)
        }, 1000);

        this.set('wasSwiped', true);

    },

    backswipe: function(){
        if(this.dist == undefined) {
            this.dist = Ember.$('.alpha-index').width();
        }

        var currentOffset = parseInt(Ember.$('.alpha-index').css('left'));

        Ember.$('.alpha-index').animate({
            'left': (currentOffset + this.dist)
        }, 1000);

        this.set('wasSwiped', true);
    },

    resetswipe: function(){
        if (this.get('wasSwiped')) {
            Ember.$('.alpha-index').offset({
                'left': '176'
            });
        }
    }

  }
  
});
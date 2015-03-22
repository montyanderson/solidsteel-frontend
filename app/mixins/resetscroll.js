import Ember from 'ember';

export default Ember.Mixin.create({
  resetscroll: function() {
    this._super();
    Ember.$(".sidepanel").animate({scrollTop: 0}, 0);
  }
});
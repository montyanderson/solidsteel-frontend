export default Ember.Mixin.create({
  activate: function() {
    this._super();
    $(".sidepanel").animate({scrollTop: 0}, 0);
  }
});
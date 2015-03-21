export default Ember.Mixin.create({
  resetscroll: function(year) {
    this._super();
    $(".sidepanel").animate({scrollTop: 0}, 0);
  }
});
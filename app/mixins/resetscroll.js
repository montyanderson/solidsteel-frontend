export default Ember.Mixin.create({
  activate: function(year) {
    this._super();
    $(".sidepanel").animate({scrollTop: 0}, 0);
    var yy = ( 54 * (2015 - year) );

    $("#year-selector").animate({scrollTop : yy}, 0);
  }
});
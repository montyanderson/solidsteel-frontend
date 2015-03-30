import Ember from 'ember';

export default Ember.View.extend({

  init: function() {
    this._super();
    var view = this;
    var resizeHandler = function() {
        view.didInsertElement();
    };

    this.set('resizeHandler', resizeHandler);
    
    Ember.$(window).bind('resize', this.get('resizeHandler'));
  },
  
  willDestroy: function() {
    Ember.$(window).unbind('resize', this.get('resizeHandler'));
  },

  mouseMove: function(e) {
    var skipTo = Math.floor(e.offsetX / (this.get('myCtx').canvas.width / 100));
    this.get('controller').send('waveHover', skipTo/100);
  },

  tagName: 'canvas',

  attributeBindings: ['height'],

  height: "72px",

  click: function(e) {
  	// skip to place in track
  	var skipTo = Math.floor(e.offsetX / (this.get('myCtx').canvas.width / 100));
    this.get('controller').send('skip', this.get('controller.model'), skipTo/100); 
  },

  didInsertElement: function(){
  	this._super();
  	var ele = this.get('element');
  	ele.width = Ember.$(ele).parent().width();
  	ele.height = 72;
	  var ctx = ele.getContext('2d');
  	ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.strokeStyle = 'rgb(255, 255, 255)';
   	ctx.lineWidth = 2;
   	this.set('myCtx', ctx);
    this.set('isOverSixHundred', window.matchMedia("screen and (min-width: 600px)").matches);
   	this.draw();
    },

  mouseEnter: function() {
    var ctx = this.get('myCtx');
    ctx.strokeStyle = 'rgb(100, 100, 100)';
    ctx.fillStyle = 'rgb(100, 100, 100)';
  },

  mouseLeave: function() {
    var ctx = this.get('myCtx');
    this.get('controller').send('stopWaveHover');
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.strokeStyle = 'rgb(255, 255, 255)';
  },

  draw: function() {

    if(!this.get('myCtx')) {
      return;
    } 

    var ctx = this.get('myCtx');
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    // caluclate track play-progress to draw line
    var unit = w / this.get('controller.model.duration');
    var units = this.get('controller.model.progress') * unit;
    var radius = 4;
    var bottomOfEqualizer = h-radius;
    var maxBarHeight = bottomOfEqualizer-h*0.4;
    var variant;
    var barPoint;
    var counter = 0;
    var spacer = 5; // how many pixels between audio lines
    var wave = w*0.1; // distance around playhead to show audio wave bopping 0.1 = a tenth of the canvas width
    var increase = (Math.PI / ((wave*2)/spacer)); // if you change this you also need to change ui <= 30 && ui >= -30 and for(var i = 1; i <= w; i += 3) {
    var barHeightAdjuster = 0;

    if(!this.get('isOverSixHundred')) {
      // draw thin line
      ctx.beginPath();
      ctx.moveTo(0, h-radius);
      ctx.lineTo(w, h-radius);
      ctx.stroke();
      return false;
    }

  	// wipe canvas ready for next frame
    this._empty();
 
  	if(units !== 0) {
  		// draw progress circle
  		ctx.beginPath();
  		ctx.arc(units, bottomOfEqualizer, radius, 0, Math.PI*2, true);
  		ctx.fill();

  		// draw progress line
  		ctx.beginPath();
  	  ctx.moveTo(0, bottomOfEqualizer);
  	  ctx.lineTo(units, bottomOfEqualizer);
  	  ctx.stroke();
  	}

    // for each bopping line (6 px apart)
	  for(var i = 1; i <= w; i += spacer) {
  		ctx.beginPath();

      // the nearer we get to the playhead, the taller the line is and the more the line bops
  		if(units !== 0) {
        // ui     = distance from playhead
        // i      = current bar we're drawing
        // units  = playhead
    		var ui = units - i;

        // only bop around the playhead i.e. if we're drawing a bar within 30px of the current track progress, bop around
        if (ui <= wave && ui >= -wave) {
              barHeightAdjuster = Math.sin(counter);
              counter += increase;
        } else {
            barHeightAdjuster = 0.5;
        }
      }

      variant = barHeightAdjuster*(Math.random()*(radius*2));
      barPoint = bottomOfEqualizer-(barHeightAdjuster*maxBarHeight);

      if(barHeightAdjuster <= 0.5) {
        barHeightAdjuster = 0.5;
        barPoint = bottomOfEqualizer-(barHeightAdjuster*maxBarHeight);
      } else {
        barPoint = bottomOfEqualizer-(barHeightAdjuster*maxBarHeight) - variant;
      }
  	  ctx.moveTo(i, bottomOfEqualizer);
  		ctx.lineTo(i, barPoint);
  		ctx.stroke();
	  }
	}.observes('controller.model.progress'),

  _empty: function(){
  	if(!this.get('myCtx')) {
 		return;
 	}
    this.get('myCtx').clearRect(0, 0, this.get('myCtx').canvas.width, this.get('myCtx').canvas.height);
  }

});
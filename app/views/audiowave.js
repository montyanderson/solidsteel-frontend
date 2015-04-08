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

  tap: function(e) {
    var x, y;
    var canvas = Ember.$(this.get('element'));
    if (e.originalEvent.gesture.srcEvent.offsetX != undefined && e.originalEvent.gesture.srcEvent.offsetY != undefined) {
      x = e.originalEvent.gesture.srcEvent.offsetX;
      x -= canvas[0].offsetLeft;
    }
    else { // Firefox method to get the position 
      x = e.originalEvent.gesture.srcEvent.clientX;
      x -= (canvas[0].offsetParent.offsetLeft + 8); // adding body 8px border
    }
    
  	// skip to place in track
  	var skipTo = Math.floor(x / (this.get('myCtx').canvas.width / 100));
    this.get('controller').send('skip', this.get('controller.model'), skipTo/100); 
  },

  didInsertElement: function(){
  	this._super();
    this.set('isOverSixHundred', window.matchMedia("screen and (min-width: 600px)").matches);
    
  	var ele = this.get('element');
  	ele.width = Ember.$(ele).parent().width();

    if(!this.get('isOverSixHundred')) {
      ele.height = 24;
    } else {
      ele.height = 72;
    }

	  var ctx = ele.getContext('2d');
  	ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
   	ctx.lineWidth = 2;
   	this.set('myCtx', ctx);
   	this.draw();
    },

  mouseEnter: function() {
    // var ctx = this.get('myCtx');
    // ctx.strokeStyle = 'rgb(100, 100, 100, 0.5)';
    // ctx.fillStyle = 'rgb(100, 100, 100, 0.5';
  },

  mouseLeave: function() {
    // var ctx = this.get('myCtx');
    // this.get('controller').send('stopWaveHover');
    // ctx.fillStyle = 'rgb(255, 255, 255, 0.7)';
    // ctx.strokeStyle = 'rgb(255, 255, 255, 0.7)';
  },

  complete: function(){
    if(!this.get('myCtx')) {
      return;
    }
    this.get('myCtx').beginPath();
    this.get('myCtx').moveTo(0, this.get('myCtx').canvas.height-4);
    this.get('myCtx').lineTo(this.get('myCtx').canvas.width, this.get('myCtx').canvas.height-4);
    this.get('myCtx').stroke();
  }.observes('controller.model.complete'),

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

  	// wipe canvas ready for next frame
    this._empty();
 
  	if(units !== 0) {
  		// draw progress circle
  		ctx.beginPath();
  		ctx.arc(units, bottomOfEqualizer, radius, 0, Math.PI*2, true);
  		ctx.fill();

  		// draw progress line
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  		ctx.beginPath();
  	  ctx.moveTo(0, bottomOfEqualizer);
  	  ctx.lineTo(units, bottomOfEqualizer);
  	  ctx.stroke();
  	}

    // use media query to draw the full audio wave at larger screen sizes only
    if(!this.get('isOverSixHundred')) {
      // // draw thin line
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      ctx.moveTo(0, h-radius);
      ctx.lineTo(w, h-radius);
      ctx.stroke();
      return false;
    } 
    // for each bopping line (6 px apart)
	  for(var i = -wave; i <= w; i += spacer) {
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
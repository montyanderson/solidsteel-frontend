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

  mouseLeave: function(){
    this.get('controller').send('stopWaveHover');
  },

  tagName: 'canvas',

  attributeBindings: ['height'],

  height: "36px",

  click: function(e) {
  	// skip to place in track
  	var skipTo = Math.floor(e.offsetX / (this.get('myCtx').canvas.width / 100));
    this.get('controller').send('skip', this.get('controller.model'), skipTo/100); 
  },

  didInsertElement: function(){
  	this._super();
  	var ele = this.get('element');
  	ele.width = Ember.$(ele).parent().width();
  	ele.height = 36;
	var ctx = ele.getContext('2d');
  	ctx.fillStyle = 'rgb(255, 255, 255)';
 	ctx.lineWidth = 2;
 	this.set('myCtx', ctx);
 	this.draw();
  },

  draw: function() {
  	// wipe canvas ready for next frame
    this._empty();


 	if(!this.get('myCtx')) {
 	  return;
 	} 
 	
    var ctx = this.get('myCtx');

 	// caluclate track play-progress to draw line
 	var unit = ctx.canvas.width / this.get('controller.model.duration');
 	var units = this.get('controller.model.progress') * unit;
	var radius = 4;

	if(units !== 0) {
		// draw progress circle
		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.beginPath();
		ctx.arc(units, ctx.canvas.height-radius, radius, 0, Math.PI*2, true);
		ctx.fill();

		// draw progress line
		ctx.beginPath();
		ctx.strokeStyle = 'rgb(255, 255, 255)';
	  	ctx.moveTo(0, ctx.canvas.height-radius);
	  	ctx.lineTo(units, ctx.canvas.height-radius);
	  	ctx.stroke();
	}

  	var barHeightAdjuster = 0;

  	//IF SCREEN IS LARGER THAN 600PX, DRAW FULL PLAYER
  	if(window.matchMedia("screen and (min-width: 600px)").matches) {
	  	// draw progress bars
	  	ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
	  	for(var i = 1; i <= ctx.canvas.width; i += 6) {
	  		ctx.beginPath();

	  		if(units !== 0) {
		  		var ui = units - i;
		  		barHeightAdjuster = 0;
		  		
		  		if(ui > 0) {
			  		// if line is 18px behind playhead, add 2px
			  		if(ui < 3) {
			  			barHeightAdjuster = ctx.canvas.height*0.35;
			  		}

			  		else if(ui < 9) {
			  			barHeightAdjuster = ctx.canvas.height*0.20;
			  		}

			  		// if line is 18px behind playhead, add 2px
			  		else if(ui < 15) {
			  			barHeightAdjuster = ctx.canvas.height*0.10;
			  		}

			  		// if line is 18px behind playhead, add 2px
			  		else if(ui <= 21) {
			  			barHeightAdjuster = ctx.canvas.height*0.05;
			  		}
			  	}

			  	else {
			  		// if line is 18px behind playhead, add 2px
			  		if(ui > -3) {
			  			barHeightAdjuster = ctx.canvas.height*0.35;
			  		}

			  		// if line is 18px behind playhead, add 2px
			  		else if(ui > -9) {
			  			barHeightAdjuster = ctx.canvas.height*0.20;
			  		}

			  		// if line is 18px behind playhead, add 2px
			  		else if(ui > -15) {
			  			barHeightAdjuster = ctx.canvas.height*0.10;
			  		}

			  		// if line is 18px behind playhead, add 2px
			  		else if(ui > -21) {
			  			barHeightAdjuster = ctx.canvas.height*0.05;
			  		}

			  	}
			}

	  		ctx.moveTo(i, (ctx.canvas.height*0.35) - barHeightAdjuster);
			ctx.lineTo(i, ctx.canvas.height-radius);
			ctx.stroke();
		}
	} else {
		// draw thin line
		ctx.beginPath();
		ctx.strokeStyle = 'rgb(255, 255, 255)';
	  	ctx.moveTo(0, ctx.canvas.height-radius);
	  	ctx.lineTo(ctx.canvas.width, ctx.canvas.height-radius);
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
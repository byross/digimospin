(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lucky_atlas_1", frames: [[0,0,1563,1563],[0,1565,391,391],[1179,1565,302,302],[393,1565,391,391],[786,1565,391,391]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["lucky_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lucky_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lucky_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lucky_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lucky_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.digimo_1600x160006 = function() {
	this.initialize(img.digimo_1600x160006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6667,6667);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.the_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 分離模式
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-149.95,-149.95,0.192,0.192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.the_wheel, new cjs.Rectangle(-149.9,-149.9,300,300), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.digimo_1600x160006, null, new cjs.Matrix2D(0.288,0,0,0.288,-960,-541.2)).s().p("EiV/hUjMEr/AAAMAAACpGMkr/AABg");
	this.shape.setTransform(959.975,541.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1082.4);


(lib.bt_ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-0.05,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(22.1,22.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.5,195.5);


(lib.run_the_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// point
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1C24").s().p("ACeC5IllidQgSgHABgVQgBgJAFgIQAEgIAJgDIFlicQAKgEAKAFQAJAFAEAMQAbBRgBBVQAABWgbBRQgDAMgJAFQgGADgFAAQgFAAgEgCg");
	this.shape.setTransform(1.2573,-151.95,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000001").s().p("ADTEGInjjrQgRgIAAgTQAAgSARgJIHkjqQAMgGANAFQANAGAEANQAkB2AAB9QAAB9gkB2QgEAOgNAGQgGACgGAAQgHAAgHgDg");
	this.shape_1.setTransform(1.2695,-149.975,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(89));

	// main
	this.instance = new lib.the_wheel();
	this.instance.setTransform(0.25,0.1,0.9999,0.9999,23.7158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:35.9894},0).wait(1).to({rotation:48.2621},0).wait(1).to({rotation:60.5349},0).wait(1).to({rotation:72.8077},0).wait(1).to({rotation:85.0804},0).wait(1).to({rotation:97.3532},0).wait(1).to({rotation:109.626},0).wait(1).to({rotation:121.8987},0).wait(1).to({rotation:134.1715},0).wait(1).to({rotation:146.4443},0).wait(1).to({rotation:158.717},0).wait(1).to({rotation:170.9898},0).wait(1).to({rotation:183.2626},0).wait(1).to({rotation:195.5353},0).wait(1).to({rotation:207.8081},0).wait(1).to({rotation:220.0809},0).wait(1).to({rotation:232.3536},0).wait(1).to({rotation:244.6264},0).wait(1).to({rotation:256.8992},0).wait(1).to({rotation:269.1719},0).wait(1).to({rotation:281.4447},0).wait(1).to({rotation:293.7175},0).wait(1).to({rotation:305.9902},0).wait(1).to({rotation:318.263},0).wait(1).to({rotation:330.5357},0).wait(1).to({rotation:342.8085},0).wait(1).to({rotation:355.0813},0).wait(1).to({rotation:367.354},0).wait(1).to({rotation:379.6268},0).wait(1).to({rotation:391.8996},0).wait(1).to({rotation:404.1723},0).wait(1).to({rotation:416.4451},0).wait(1).to({rotation:428.7179},0).wait(1).to({rotation:440.9906},0).wait(1).to({rotation:453.2634},0).wait(1).to({rotation:465.5362},0).wait(1).to({rotation:477.8089},0).wait(1).to({rotation:490.0817},0).wait(1).to({rotation:502.3545},0).wait(1).to({rotation:514.6272},0).wait(1).to({rotation:526.9},0).wait(1).to({rotation:539.1728},0).wait(1).to({rotation:551.4455},0).wait(1).to({rotation:563.7183},0).wait(1).to({rotation:575.9911},0).wait(1).to({rotation:588.2638},0).wait(1).to({rotation:600.5366},0).wait(1).to({rotation:612.8094},0).wait(1).to({rotation:625.0821},0).wait(1).to({rotation:637.3549},0).wait(1).to({rotation:649.6277},0).wait(1).to({rotation:661.9004},0).wait(1).to({rotation:674.1732},0).wait(1).to({rotation:686.446},0).wait(1).to({rotation:698.7187},0).wait(1).to({rotation:710.9915},0).wait(1).to({rotation:723.2643},0).wait(1).to({rotation:735.537},0).wait(1).to({rotation:747.8098},0).wait(1).to({rotation:760.0826},0).wait(1).to({rotation:772.3553},0).wait(1).to({rotation:784.6281},0).wait(1).to({rotation:796.9009},0).wait(1).to({rotation:809.1736},0).wait(1).to({rotation:821.4464},0).wait(1).to({rotation:833.7192},0).wait(1).to({rotation:845.9919},0).wait(1).to({rotation:858.2647},0).wait(1).to({rotation:870.5374},0).wait(1).to({rotation:882.8102},0).wait(1).to({rotation:895.083},0).wait(1).to({rotation:907.3557},0).wait(1).to({rotation:919.6285},0).wait(1).to({rotation:931.9013},0).wait(1).to({rotation:944.174},0).wait(1).to({rotation:956.4468},0).wait(1).to({rotation:968.7196},0).wait(1).to({rotation:980.9923},0).wait(1).to({rotation:993.2651},0).wait(1).to({rotation:1005.5379},0).wait(1).to({rotation:1017.8106},0).wait(1).to({rotation:1030.0834},0).wait(1).to({rotation:1042.3562},0).wait(1).to({rotation:1054.6289},0).wait(1).to({rotation:1066.9017},0).wait(1).to({rotation:1079.1745},0).wait(1).to({rotation:1091.4472},0).wait(1).to({rotation:1103.72},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-212.2,424.5,424.6);


// stage content:
(lib.lucky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.bt_start.on('click', function () {
			/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		
			setTimeout(function () {
				_this.the_wheel.stop();
			}, 1000);
		
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bt_
	this.bt_start = new lib.bt_ball();
	this.bt_start.name = "bt_start";
	this.bt_start.setTransform(530.5,548.6,0.54,0.54,0,0,0,97.9,98);
	new cjs.ButtonHelper(this.bt_start, 0, 1, 2, false, new lib.bt_ball(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt_start).wait(1));

	// main
	this.the_wheel = new lib.run_the_wheel();
	this.the_wheel.name = "the_wheel";
	this.the_wheel.setTransform(530.45,548.55,2.6043,2.6043,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.the_wheel).wait(1));

	// bg
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(960,541.1,1,1,0,0,0,960,541.1);
	this.instance.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,542.4000000000001);
// library properties:
lib.properties = {
	id: 'DC1C31EF16DA48D8946DD8E296304353',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/digimo_1600x160006.png?1663058145870", id:"digimo_1600x160006"},
		{src:"images/lucky_atlas_1.png?1663058145850", id:"lucky_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC1C31EF16DA48D8946DD8E296304353'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
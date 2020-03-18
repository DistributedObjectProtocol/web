(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.node = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgrOjIrkmqQgsgcAAg0IAAtRQAAg4AtgXILjmqQAsgbAsAaILgGrQAwAbgBA0IAANSQAAAjgWAYQgKALgQAJIrfGpQgWAOgXAAQgUAAgXgNg");
	this.shape.setTransform(92.8,105.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FC4768","#F67FA1","#FDCD66"],[0,0.51,0.992],-0.3,-93.3,-0.1,93.2).s().p("AgwQRIs8ncQgzgfABg5IAAu5QAAg9AygaIM8ndQAwgfAyAfIM4HdQA2AegBA5IAAO5QABA6g2AeIs4HcQgZAPgZAAQgYAAgYgPg");
	this.shape_1.setTransform(92.7,105.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.5,211.3);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.movie = this
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.node("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(229.3,148,0.5,0.502,0,0,0,0.2,1);
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 51, 127.5, 0, 0)];
	this.instance.cache(-2,-2,190,215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:458.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(829.2,447.5,92.7,106);
// library properties:
lib.properties = {
	id: 'E632904805F7644FBF9DCCD61988AEC0',
	width: 1200,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['E632904805F7644FBF9DCCD61988AEC0'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
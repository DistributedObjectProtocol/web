(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.websockets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AWwAPQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAIg8AAIAAAAQgIAAgGgFgAWCAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAUKAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgASSAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAQaAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAOiAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAMqAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAKyAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAI6AUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAHCAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAFKAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgADSAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgABaAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAgdAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAiVAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAkNAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAmFAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAn9AUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAp1AUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgArtAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAtlAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAvdAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAxVAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgAzNAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgA1FAUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAgA29AUIg8AAQgIAAgGgFQgGgGAAgJQAAgHAGgGQAGgGAIAAIA8AAQAIAAAGAGQAGAGAAAHQAAAJgGAGQgGAFgIAAIAAAAg");
	this.shape.setTransform(153,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,310,4.1);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKLD4I0YAAQhmgBhJhIQhIhJAAhmQAAhnBIhIQA/g/BVgJIVRAAQBVAJA+A/QBJBIAABnQAABmhJBJQhIBJhnAAIgCAAg");
	this.shape.setTransform(90.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.3,49.6);


(lib.patch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgZA/IAAgMIAEAAIAGgBQADgBACgCIADgEIABgIIAAgRIABgJIACgGIAEgDIAGgCQgHgBgDgFQgDgFAAgKIAAgLIgBgHQgBgEgCgBQgCgCgDgBIgGgBIgEAAIAAgMIAGAAQAOAAAGAGQAHAHAAAPIAAAMQAAAHADADQADAEAIAAIAEAAIAAAMIgEAAIgHAAIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAGIAAASQAAAHgCAFQgBAGgEADQgCAEgFACQgGABgHAAg");
	this.shape.setTransform(113.9,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAIARIgDghIASAAIgDAhgAgUARIgCghIASAAIgCAhg");
	this.shape_1.setTransform(106,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AACAkQgGAAgHgCQgGgCgEgFQgFgEgCgHQgCgGAAgJQAAgHACgHQACgHAFgFQADgFAHgCQAFgDAHAAQAHAAAGACQAGACAEAEQADAFACAFQADAGAAAHIAAAEIgBAEIgsAAQAAAFABADQABAEADACQADADADABIAHABIALgBIALgCIAAANIgFABIgGABIgHABIgHAAgAgJgTQgDAFgBAHIAcAAIgBgHIgEgFIgEgDIgFgBQgGAAgEAEg");
	this.shape_2.setTransform(98.3,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgOAiQgFgCgFgFQgEgEgDgHQgBgHAAgJQgBgHADgHQACgGAFgFQAEgFAGgDQAHgCAHAAQAHAAAGACQAHACAEAFQAEAEACAHQACAHAAAIQAAAIgCAHQgCAGgFAFQgEAFgGADQgHACgHAAQgIAAgGgCgAgGgTIgGAFIgCAHIgBAHQAAALAEAFQAFAGAGAAQAEAAADgCQAEgBABgDQADgDAAgEIABgJQAAgKgEgFQgEgGgIAAQgDAAgDACg");
	this.shape_3.setTransform(90.6,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AghAtIAAhZIAbAAQAJAAAIADQAHADAFAFQAFAFADAIQADAJAAALQAAAJgDAJQgDAIgFAGQgFAGgJAEQgIADgLAAgAgQAfIAHAAQAMAAAGgIQAHgHAAgQQAAgGgCgGQgBgGgDgDQgCgEgFgCQgEgDgHAAIgIAAg");
	this.shape_4.setTransform(83,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAMAkIAAgtQABgLgJAAQgEAAgDADIgIAKIAAArIgRAAIAAhFIAOAAIABALIAFgGIAEgDIAFgCIAHgBQAFAAAEACQAEABADADIAEAIIABAKIAAAug");
	this.shape_5.setTransform(67.5,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AANAwIAAgtQAAgKgJAAQgEAAgDADIgJAIIAAAsIgQAAIAAhfIAQAAIAAAXIAAANIAEgEIAFgEIAFgCIAGgBQAFAAAEACQAEACADADIAEAIIABAJIAAAug");
	this.shape_6.setTransform(59.8,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgOAiQgFgCgFgFQgEgEgDgHQgCgHAAgJQABgHACgHQACgGAEgFQAFgFAGgDQAHgCAHAAQAHAAAGACQAHACAEAFQAEAEACAHQACAHABAIQAAAIgDAHQgCAGgEAFQgFAFgGADQgHACgHAAQgHAAgHgCgAgHgTIgFAFIgDAHIAAAHQAAALAEAFQAEAGAHAAQAEAAAEgCQACgBACgDQACgDABgEIABgJQAAgKgEgFQgEgGgIAAQgEAAgDACg");
	this.shape_7.setTransform(52.1,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgPAsIgJgDIAAgQIAEACIAFACIAFACIAFABIAFgBIADgEQACgBABgDQACgEAAgEIAAgtIgfAAIAAgPIAwAAIAAA+QAAAGgCAGQgCAFgEADQgEAFgGABQgFACgHAAIgKgBg");
	this.shape_8.setTransform(44.2,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAIARIgDghIASAAIgCAhgAgUARIgCghIASAAIgCAhg");
	this.shape_9.setTransform(36.7,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgEAjIgDgDIgEgEIgBgFIABgEIAEgEIADgDIAEgBIAFABIAEADIADAEIABAEIgBAFIgDAEIgEADIgFABIgEgBgAgEgLIgDgDIgEgEIgBgFIABgEIAEgEIADgDIAEgBIAFABIAEADIADAEIABAEIgBAFIgDAEIgEADIgFABIgEgBg");
	this.shape_10.setTransform(21.3,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgcAtIAAgPIAXAAIAAg4IgTAKIgGgNIAcgPIANAAIAABKIAUAAIAAAPg");
	this.shape_11.setTransform(13.6,10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AAUA/QgOAAgGgGQgHgHAAgPIAAgRQAAgHgDgEQgDgDgIAAIgEAAIAAgMIAEAAIAHgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIABgGIAAgMQAAgHACgFQABgGAEgDQACgEAFgCQAGgBAHAAIAGAAIAAAMIgEAAIgGABIgFADIgDAFIgBAHIAAAMIgBAIIgCAGIgEAEIgGACQAGABAEAEQADAFAAAKIAAARIABAIIADAEQACACADABIAGABIAEAAIAAAMg");
	this.shape_12.setTransform(5.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.7,20.4);


(lib.object2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgZA/IAAgMIAEAAIAGgBQADgBACgCIADgEIABgIIAAgRIABgJIACgGIAEgDIAGgCQgHgBgDgFQgDgFAAgKIAAgLIgBgHQgBgEgCgBQgCgCgDgBIgGgBIgEAAIAAgMIAGAAQAOAAAGAGQAHAHAAAPIAAAMQAAAHADADQADAEAIAAIAEAAIAAAMIgEAAIgHAAIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAGIAAASQAAAHgCAFQgBAGgEADQgCAEgFACQgGABgHAAg");
	this.shape.setTransform(6.1,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAHARIgCghIASAAIgCAhgAgUARIgCghIASAAIgDAhg");
	this.shape_1.setTransform(113.7,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AACAkQgHAAgGgCQgGgCgFgFQgEgEgCgHQgCgGgBgJQABgHACgHQACgHAEgFQAFgFAFgCQAHgDAGAAQAHAAAGACQAGACADAEQAFAFACAFQABAGAAAHIAAAEIAAAEIgtAAQABAFABADQABAEADACQADADADABIAHABIALgBIAMgCIAAANIgGABIgHABIgGABIgHAAgAgIgTQgFAFgBAHIAcAAIgBgHIgCgFIgFgDIgFgBQgFAAgEAEg");
	this.shape_2.setTransform(106,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgNAiQgHgCgEgFQgEgEgCgHQgCgHgBgJQAAgHADgHQACgGAEgFQAFgFAHgDQAGgCAGAAQAIAAAHACQAFACAFAFQAEAEADAHQACAHAAAIQgBAIgCAHQgCAGgEAFQgFAFgGADQgGACgIAAQgHAAgGgCgAgHgTIgEAFIgEAHIAAAHQAAALAEAFQAFAGAGAAQAFAAADgCQACgBADgDQABgDABgEIABgJQAAgKgEgFQgEgGgIAAQgDAAgEACg");
	this.shape_3.setTransform(98.3,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AghAtIAAhZIAbAAQAJAAAIADQAHADAFAFQAFAFADAIQADAJAAALQAAAJgDAJQgDAIgFAGQgFAGgJAEQgIADgLAAgAgQAfIAHAAQAMAAAGgIQAHgHAAgQQAAgGgCgGQgBgGgDgDQgCgEgFgCQgEgDgHAAIgIAAg");
	this.shape_4.setTransform(90.7,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AANAjIAAgsQAAgLgJAAQgEAAgDADIgJAJIAAArIgQAAIAAhEIAPAAIAAAKIAEgEIAFgEIAFgDIAHgBQAFAAAEACQAEACADADIAEAIIABAKIAAAtg");
	this.shape_5.setTransform(75.2,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAMAwIAAgtQABgKgJAAQgEAAgDADIgIAIIAAAsIgRAAIAAhfIARAAIAAAXIgBANIAEgEIAFgEIAEgCIAHgBQAFAAAEACQAEACADADIAEAIIABAJIAAAug");
	this.shape_6.setTransform(67.5,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgNAiQgHgCgEgFQgEgEgCgHQgCgHAAgJQAAgHACgHQACgGAFgFQAEgFAHgDQAFgCAHAAQAJAAAGACQAFACAFAFQAEAEADAHQABAHAAAIQABAIgDAHQgCAGgFAFQgEAFgGADQgGACgIAAQgHAAgGgCgAgGgTIgGAFIgCAHIgBAHQAAALAEAFQAEAGAHAAQAEAAADgCQADgBADgDQACgDAAgEIABgJQAAgKgEgFQgEgGgIAAQgDAAgDACg");
	this.shape_7.setTransform(59.8,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgQAsIgIgDIAAgRIAEADIAEADIAGABIAGAAIAEAAIAEgDQACgCABgEQABgDAAgEIAAguIggAAIAAgNIAxAAIAAA+QAAAGgCAFQgCAFgEAEQgEADgGACQgFADgGAAIgMgCg");
	this.shape_8.setTransform(51.9,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAHARIgCghIASAAIgCAhgAgUARIgCghIASAAIgDAhg");
	this.shape_9.setTransform(44.4,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgEAjIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAEgBIAFABIADADIADAEIACAEIgCAFIgDAEIgDADIgFABIgEgBgAgEgLIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAEgBIAFABIADADIADAEIACAEIgCAFIgDAEIgDADIgFABIgEgBg");
	this.shape_10.setTransform(29,29.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgcAtIAAgPIAXAAIAAg5IgUAMIgFgOIAcgPIANAAIAABKIAUAAIAAAPg");
	this.shape_11.setTransform(21.3,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AAUA/QgOAAgGgGQgHgHAAgPIAAgRQAAgHgDgEQgDgDgIAAIgEAAIAAgMIAEAAIAHgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIABgGIAAgMQAAgHACgFQABgGAEgDQACgEAFgCQAGgBAHAAIAGAAIAAAMIgEAAIgGABIgFADIgDAFIgBAHIAAAMIgBAIIgCAGIgEAEIgGACQAGABAEAEQADAFAAAKIAAARIABAIIADAEQACACADABIAGABIAEAAIAAAMg");
	this.shape_12.setTransform(67.2,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgcAUIAAgNIA5AAIAAANgAgcgGIAAgNIA5AAIAAANg");
	this.shape_13.setTransform(52.1,11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgPAkIgMgCIAAgQQAGADAHABIAMACQAFAAAEgDQADgCAAgDIgBgDIgCgCIgGgDIgIgDIgJgDIgGgDQgDgDgBgDQgBgDAAgEQAAgFACgDQACgEAEgDQADgDAGgCQAGgBAGAAIAMAAIAJACIAAAOIgLgDIgLgBQgEAAgDACQgDACAAADIABADIACACIAFADIAIACIAKAEIAGAEQADACABADQABADAAAEQAAAGgDAEQgCAFgFACQgEADgFABIgLABIgNAAg");
	this.shape_14.setTransform(36.7,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcAkIAAhFIAPAAIAAAKIAEgFIAFgDIAFgCIAHgBQAFAAAEACQAEABADADIAEAJIABANIgRAAIAAgHQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCgDIgEgBQgEAAgDAEQgEACgEAIIAAArg");
	this.shape_15.setTransform(29.3,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AADAkQgIAAgGgCQgGgCgFgFQgEgEgCgHQgCgGgBgJQABgHACgHQACgHAEgFQAEgFAGgCQAHgDAGAAQAHAAAGACQAGACADAEQAFAFACAFQABAGAAAHIAAAEIAAAEIgtAAQABAFABADQABAEADACQADADADABIAHABIALgBIAMgCIAAANIgGABIgHABIgGABIgGAAgAgIgTQgFAFgBAHIAcAAIgBgHIgCgFIgFgDIgFgBQgFAAgEAEg");
	this.shape_16.setTransform(21.3,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgPAkIgMgCIAAgQQAGADAHABIAMACQAFAAAEgDQADgCAAgDIgBgDIgCgCIgGgDIgIgDIgJgDIgGgDQgDgDgBgDQgBgDAAgEQAAgFACgDQACgEAEgDQADgDAGgCQAGgBAGAAIAMAAIAJACIAAAOIgLgDIgLgBQgEAAgDACQgDACAAADIABADIACACIAFADIAIACIAKAEIAGAEQADACABADQABADAAAEQAAAGgDAEQgCAFgFACQgEADgFABIgLABIgNAAg");
	this.shape_17.setTransform(13.6,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgQAiIgHgFIgEgIIgBgKIAAguIAQAAIAAAtQAAAFACADQADAEAEAAQADAAAEgEIAJgKIAAgrIAQAAIAABFIgPAAIAAgKIgEAEIgFAFIgFACIgHAAQgFABgEgCg");
	this.shape_18.setTransform(5.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.5,57.2);


(lib.object1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgZA/IAAgMIAEAAIAGgBQADgBACgCIADgEIABgIIAAgRIABgJIACgGIAEgDIAGgCQgHgBgDgFQgDgFAAgKIAAgLIgBgHQgBgEgCgBQgCgCgDgBIgGgBIgEAAIAAgMIAGAAQAOAAAGAGQAHAHAAAPIAAAMQAAAHADADQADAEAIAAIAEAAIAAAMIgEAAIgHAAIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAGIAAASQAAAHgCAFQgBAGgEADQgCAEgFACQgGABgHAAg");
	this.shape.setTransform(6.1,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAIARIgDghIASAAIgDAhgAgTARIgDghIASAAIgDAhg");
	this.shape_1.setTransform(82.9,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AANAjIAAgsQAAgLgJAAQgEAAgDADIgJAJIAAArIgQAAIAAhEIAPAAIAAAKIAEgEIAFgEIAFgDIAHgBQAFAAAEACQAEACADADIAEAIIABAKIAAAtg");
	this.shape_2.setTransform(75.2,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAMAwIAAgtQABgKgJAAQgEAAgDADIgIAIIAAAsIgRAAIAAhfIARAAIAAAXIgBANIAEgEIAFgEIAEgCIAHgBQAFAAAEACQAEACADADIAEAIIABAJIAAAug");
	this.shape_3.setTransform(67.5,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgNAiQgHgCgEgFQgEgEgCgHQgCgHAAgJQAAgHACgHQACgGAFgFQAEgFAHgDQAFgCAHAAQAJAAAGACQAFACAFAFQAEAEADAHQABAHAAAIQABAIgDAHQgCAGgFAFQgEAFgGADQgGACgIAAQgHAAgGgCgAgGgTIgGAFIgCAHIgBAHQAAALAEAFQAEAGAHAAQAEAAADgCQADgBADgDQACgDAAgEIABgJQAAgKgEgFQgEgGgIAAQgDAAgDACg");
	this.shape_4.setTransform(59.8,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgQAsIgIgDIAAgRIAEADIAEADIAGABIAGAAIAEAAIAEgDQACgCABgEQABgDAAgEIAAguIggAAIAAgNIAxAAIAAA+QAAAGgCAFQgCAFgEAEQgEADgGACQgFADgGAAIgMgCg");
	this.shape_5.setTransform(51.9,28.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAHARIgCghIASAAIgCAhgAgUARIgCghIASAAIgDAhg");
	this.shape_6.setTransform(44.4,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgEAjIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAEgBIAFABIADADIADAEIACAEIgCAFIgDAEIgDADIgFABIgEgBgAgEgLIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAEgBIAFABIADADIADAEIACAEIgCAFIgDAEIgDADIgFABIgEgBg");
	this.shape_7.setTransform(29,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgcAtIAAgPIAXAAIAAg5IgUAMIgFgOIAcgPIANAAIAABKIAUAAIAAAPg");
	this.shape_8.setTransform(21.3,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAUA/QgOAAgGgGQgHgHAAgPIAAgRQAAgHgDgEQgDgDgIAAIgEAAIAAgMIAEAAIAHgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIABgGIAAgMQAAgHACgFQABgGAEgDQACgEAFgCQAGgBAHAAIAGAAIAAAMIgEAAIgGABIgFADIgDAFIgBAHIAAAMIgBAIIgCAGIgEAEIgGACQAGABAEAEQADAFAAAKIAAARIABAIIADAEQACACADABIAGABIAEAAIAAAMg");
	this.shape_9.setTransform(67.2,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgcAUIAAgNIA5AAIAAANgAgcgGIAAgNIA5AAIAAANg");
	this.shape_10.setTransform(52.1,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgPAkIgMgCIAAgQQAGADAHABIAMACQAFAAAEgDQADgCAAgDIgBgDIgCgCIgGgDIgIgDIgJgDIgGgDQgDgDgBgDQgBgDAAgEQAAgFACgDQACgEAEgDQADgDAGgCQAGgBAGAAIAMAAIAJACIAAAOIgLgDIgLgBQgEAAgDACQgDACAAADIABADIACACIAFADIAIACIAKAEIAGAEQADACABADQABADAAAEQAAAGgDAEQgCAFgFACQgEADgFABIgLABIgNAAg");
	this.shape_11.setTransform(36.7,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgcAkIAAhFIAPAAIAAAKIAEgFIAFgDIAFgCIAHgBQAFAAAEACQAEABADADIAEAJIABANIgRAAIAAgHQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCgDIgEgBQgEAAgDAEQgEACgEAIIAAArg");
	this.shape_12.setTransform(29.3,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AADAkQgIAAgGgCQgGgCgFgFQgEgEgCgHQgCgGgBgJQABgHACgHQACgHAEgFQAEgFAGgCQAHgDAGAAQAHAAAGACQAGACADAEQAFAFACAFQABAGAAAHIAAAEIAAAEIgtAAQABAFABADQABAEADACQADADADABIAHABIALgBIAMgCIAAANIgGABIgHABIgGABIgGAAgAgIgTQgFAFgBAHIAcAAIgBgHIgCgFIgFgDIgFgBQgFAAgEAEg");
	this.shape_13.setTransform(21.3,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgPAkIgMgCIAAgQQAGADAHABIAMACQAFAAAEgDQADgCAAgDIgBgDIgCgCIgGgDIgIgDIgJgDIgGgDQgDgDgBgDQgBgDAAgEQAAgFACgDQACgEAEgDQADgDAGgCQAGgBAGAAIAMAAIAJACIAAAOIgLgDIgLgBQgEAAgDACQgDACAAADIABADIACACIAFADIAIACIAKAEIAGAEQADACABADQABADAAAEQAAAGgDAEQgCAFgFACQgEADgFABIgLABIgNAAg");
	this.shape_14.setTransform(13.6,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgQAiIgHgFIgEgIIgBgKIAAguIAQAAIAAAtQAAAFACADQADAEAEAAQADAAAEgEIAJgKIAAgrIAQAAIAABFIgPAAIAAgKIgEAEIgFAFIgFACIgHAAQgFABgEgCg");
	this.shape_15.setTransform(5.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.5,57.2);


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


(lib.highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("At5BwIAAjfIbzAAIAADfg");
	this.shape.setTransform(89,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,22.3);


(lib.cli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBBIAAgRIBoAAIAAARgAhmAKIA/gYIg/gZIAAgZIBbAnIAAAWIhbAmg");
	this.shape.setTransform(36.2,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Au+MhQg/AAgYgVIgBAAQgUgaAAg9IAA1pQAAg+AUgZIABAAQAYgVA/AAId9AAQA/ABAZAUQAUAZAAA+IAAVpQAAA+gUAZQgaAVg+AAg");
	this.shape_1.setTransform(116.4,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FC4667","#F6839F","#FDD064"],[0,0.518,1],0,-86,0,86.1).s().p("AwFNkQhEAAgbgWIAAgBQgXgaAAhFIAA3bQAAhFAXgaIAAgBQAbgWBEAAMAgLAAAQBEAAAcAXQAWAaAABFIAAXbQAABFgWAbQgcAWhEAAg");
	this.shape_2.setTransform(116.4,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0,229.6,173.6);


(lib.browser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C5BEBB").ss(8,1,1).p("AvnNuQhUAAggghQghggAAhUIAA2xQAAhUAhggQAgghBUAAIfPAAQBUAAAhAhQAgAgAABUIAAWxQAABUggAgQghAhhUAAg");
	this.shape.setTransform(114.9,87.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// navigation
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E8E6E5").ss(2,1,1).p("ArrgdQAAgNAIgIQAJgJANAAIWbAAQAMAAAJAJQAJAIAAANIAAA7QAAANgJAIQgJAJgMAAI2bAAQgNAAgJgJQgIgIAAgNg");
	this.shape_1.setTransform(143.3,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArNA8QgMAAgJgIQgJgJAAgNIAAg7QAAgMAJgJQAJgJAMAAIWbAAQANAAAIAJQAJAJAAAMIAAA7QAAAMgJAKQgIAIgNAAg");
	this.shape_2.setTransform(143.3,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// buttons
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F53939").s().p("AgsAtQgTgTAAgaQAAgZATgUQATgSAZAAQAbAAASASQATAUAAAZQAAAagTATQgSATgbAAQgZAAgTgTg");
	this.shape_3.setTransform(19.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9C223").s().p("AgtAtQgSgTAAgaQAAgZASgUQATgSAaAAQAaAAATASQATAUAAAZQAAAagTATQgTATgaAAQgaAAgTgTg");
	this.shape_4.setTransform(37,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CC666").s().p("AgsAtQgTgTAAgaQAAgZATgUQASgSAaAAQAbAAASASQATAUAAAZQAAAagTATQgSATgbAAQgaAAgSgTg");
	this.shape_5.setTransform(53.4,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// header
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E6E5").s().p("AvnNuQhUgBggggQgdgdgDhGMAj3AAAQgDBGgcAdQghAghUABgAx8oeIAAi5QAAhVAhggQAgggBUgBIfPAAQBUABAhAgQAgAgAABVIAAC5g");
	this.shape_6.setTransform(114.9,87.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// window
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AvnNuQhUgBggggQghggAAhVIAA2vQAAhVAhggQAgggBUgBIfPAAQBUABAhAgQAgAgAABVIAAWvQAABVggAgQghAghUABg");
	this.shape_7.setTransform(114.9,87.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,237.8,183.5);


(lib.tab2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.browser("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89,68.1,0.774,0.774,0,0,0,114.9,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5BEBB").s().p("AjvA3IAAhOQAAgSAHgGQAGgHASAAIGhAAQASAAAGAHQAHAGAAASIAABOg");
	this.shape.setTransform(80.4,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E6E5").s().p("AjvA3IAAhOQAAgSAHgGQAGgHASAAIGhAAQASAAAGAHQAHAGAAASIAABOg");
	this.shape_1.setTransform(30.2,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-10.5,184,149.5);


(lib.tab1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.browser("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89,68.1,0.774,0.774,0,0,0,114.9,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E6E5").s().p("AjvA3IAAhOQAAgSAHgGQAGgHASAAIGhAAQASAAAGAHQAHAGAAASIAABOg");
	this.shape.setTransform(80.4,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5BEBB").s().p("AjvA3IAAhOQAAgSAHgGQAGgHASAAIGhAAQASAAAGAHQAHAGAAASIAABOg");
	this.shape_1.setTransform(30.2,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-10.5,184,149.5);


(lib.showmehow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAqIgIghIgBgLIgDgNIAAAAIgCANIgCALIgIAhIgcAAIgVhTIAZAAIAIAnIACALIACANIABAAIABgNIADgLIAKgnIAVAAIAJAnIACALIADANIABAAIACgNIABgLIAJgnIAXAAIgVBTg");
	this.shape.setTransform(43.3,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOApQgIgDgFgFQgGgGgDgIQgEgIAAgLQAAgJAEgJQADgIAGgGQAFgFAIgDQAHgDAHAAQAIAAAIADQAHADAFAFQAHAGADAIQADAJAAAJQAAALgDAIQgDAIgHAGQgFAFgHADQgIADgIAAQgHAAgHgDgAgKgQQgEAGAAAKQAAALAEAHQADAGAHAAQAIAAAEgGQAEgHAAgLQAAgKgEgGQgEgHgIAAQgHAAgDAHg");
	this.shape_1.setTransform(32.5,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANA7IAAgwQAAgKgDgCQgCgDgGgBQgDAAgEACIgHAGIAAA4IgZAAIAAh2IAZAAIAAAdIgBAQQAEgEAHgEQAFgEAJAAQAOAAAGAJQAGAJAAAPIAAA0g");
	this.shape_2.setTransform(23.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLApQgIgDgGgFQgGgGgDgIQgDgIAAgLQAAgJADgIQAEgJAFgFQAGgGAHgDQAIgDAGAAQAJAAAHADQAGADAFAFQAEAGADAHQACAIAAAIIgBAGIAAAEIgxAAQABAKAGAEQAFAEAIAAQAJAAAJgFIAJAPQgHAEgIADQgHACgIAAQgIAAgIgDgAgHgUQgFAEgBAIIAeAAQAAgHgDgFQgEgEgIAAQgEAAgFAEg");
	this.shape_3.setTransform(11.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlArIAAgwQAAgJgCgDQgDgEgFAAQgGAAgJAIIAAA4IgYAAIAAgwQAAgJgCgDQgCgEgGAAQgGAAgIAIIAAA4IgZAAIAAhTIAUAAIACALIABAAIALgJQAGgEAIAAQAJAAAFAEQAFADADAHQAGgGAGgEQAGgEAJAAQAOAAAGAJQAGAJAAAQIAAAzg");
	this.shape_4.setTransform(0.6,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAqIgHghIgDgLIgCgNIAAAAIgBANIgDALIgHAhIgdAAIgVhTIAZAAIAIAnIACALIACANIAAAAIADgNIADgLIAJgnIAUAAIAKAnIADALIACANIABAAIACgNIABgLIAJgnIAXAAIgUBTg");
	this.shape_5.setTransform(-15.7,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOApQgHgDgHgFQgFgGgEgIQgDgIAAgLQAAgJADgJQAEgIAFgGQAHgFAHgDQAHgDAHAAQAJAAAGADQAIADAGAFQAFAGAEAIQADAJAAAJQAAALgDAIQgEAIgFAGQgGAFgIADQgGADgJAAQgHAAgHgDgAgLgQQgDAGAAAKQAAALADAHQAFAGAGAAQAIAAAEgGQAEgHAAgLQAAgKgEgGQgEgHgIAAQgGAAgFAHg");
	this.shape_6.setTransform(-26.5,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANA7IAAgwQAAgKgCgCQgDgDgFgBQgEAAgDACIgIAGIAAA4IgZAAIAAh2IAZAAIAAAdIgBAQQAFgEAGgEQAFgEAJAAQANAAAHAJQAGAJAAAPIAAA0g");
	this.shape_7.setTransform(-35.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVA1QgLgEgIgHIAOgRQAGAEAHAEQAHADAGAAQAIAAAEgDQAEgDAAgFIgBgEIgDgDIgGgDIgGgDIgOgGIgIgFIgHgFQgDgDgCgFQgCgGAAgGQAAgGADgGQADgGAFgFQAFgEAIgDQAHgCAIAAQAJAAAKADQAJAEAHAHIgMAQIgLgHQgGgCgGAAQgGAAgEADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADADIAGACIAFAEIAPAFQAKAEAGAHQAFAGAAAMQAAAHgCAGQgDAHgFAEQgGAFgIADQgHACgKAAQgKAAgLgEg");
	this.shape_8.setTransform(-44.7,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("As8CvQhIhJAAhmQAAhnBIhIQA/g/BVgJIVRAAQBVAJA+A/QBJBIAABnQAABmhJBJQhIBJhnAAQgBAAgBAAI0YAAQhmgBhJhIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2));

	// Layer 1
	this.instance = new lib.btn("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,90.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.801},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-26.2,183.3,52.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:1,"one node":59,"two nodes":119,"server client":179,snippets:239,"patches applied":479,"tab created":599});

	// timeline functions:
	this.frame_0 = function() {
		//stage.enableMouseOver(1);
		window.configureSlides(this)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(600));

	// showmehow
	this.showMeHow = new lib.showmehow();
	this.showMeHow.name = "showMeHow";
	this.showMeHow.parent = this;
	this.showMeHow.setTransform(690.1,483.7,1,1,0,0,0,90.1,24.8);
	new cjs.ButtonHelper(this.showMeHow, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.showMeHow).to({_off:true},2).wait(598));

	// mutation2
	this.instance = new lib.highlight("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(799.9,295.3,0.73,0.725,0,0,0,88.8,11.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({alpha:0},60).to({_off:true},1).wait(299));

	// mutation1
	this.instance_1 = new lib.highlight("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(384.9,295.3,0.73,0.725,0,0,0,88.8,11.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(420).to({_off:false},0).to({alpha:0},59).to({_off:true},1).wait(120));

	// patch1
	this.instance_2 = new lib.patch1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(799.9,294.1,1,1,0,0,0,59.9,10.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300).to({_off:false},0).to({x:385.7,y:294.6},120,cjs.Ease.get(1)).to({_off:true},1).wait(179));

	// snippet3
	this.instance_3 = new lib.object2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(817.3,446.1,1,1,0,0,0,85.3,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(599).to({_off:false},0).wait(1));

	// snippet2
	this.instance_4 = new lib.object1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(817.7,300.1,1,1,0,0,0,85.3,33.9);

	this.instance_5 = new lib.object2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(817.7,300.1,1,1,0,0,0,85.3,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},239).to({state:[{t:this.instance_5,p:{x:817.7,y:300.1}}]},1).to({state:[]},240).to({state:[{t:this.instance_5,p:{x:817.3,y:166.4}}]},119).wait(1));

	// snippet1
	this.instance_6 = new lib.object1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(403.3,300.1,1,1,0,0,0,85.3,33.9);

	this.instance_7 = new lib.object2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(403.3,300.1,1,1,0,0,0,85.3,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},239).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},180).wait(180));

	// server
	this.instance_8 = new lib.cli("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(445.7,300.7,0.576,0.576,0,0,0,114.9,87.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({alpha:1},60,cjs.Ease.get(1)).to({regX:115,regY:88,scaleX:0.81,scaleY:0.81,x:385.9,y:301},60,cjs.Ease.get(1)).wait(361));

	// client2
	this.instance_9 = new lib.browser("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(805.9,300.1,0.164,0.164,0,0,0,115,88.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.tab2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(805.9,438.1,1,1,0,0,0,88.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},480).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_9}]},69).to({state:[{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(480).to({_off:false},0).to({regY:88,scaleX:1.51,scaleY:1.51,x:806,y:300.2},49,cjs.Ease.get(1)).to({regX:114.9,regY:87.9,scaleX:0.77,scaleY:0.77,x:805.9,y:438.2},69,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// client1
	this.instance_11 = new lib.browser("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(745.1,300,0.552,0.552,0,0,0,114.8,87.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.tab1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(805.9,161.9,1,1,0,0,0,88.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},119).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_11}]},290).to({state:[{t:this.instance_11}]},69).to({state:[{t:this.instance_12}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({alpha:1},60,cjs.Ease.get(1)).to({regX:114.9,regY:87.9,scaleX:0.77,scaleY:0.77,x:805.9,y:300.2},60,cjs.Ease.get(1)).wait(290).to({startPosition:0},0).to({y:162.1},69,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// node1
	this.instance_13 = new lib.node("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(554.1,406.6,0.5,0.502,0,0,0,0.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({startPosition:0},0).to({x:553.8,y:247.6},57,cjs.Ease.get(1)).to({x:400.1},60,cjs.Ease.get(1)).to({alpha:0},60,cjs.Ease.get(1)).to({_off:true},1).wait(420));

	// node2
	this.instance_14 = new lib.node("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(553.8,247.6,0.5,0.502,0,0,0,0.2,1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).to({x:700.1},60,cjs.Ease.get(1)).to({alpha:0},60,cjs.Ease.get(1)).to({_off:true},1).wait(420));

	// WebSockets
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgLAcQgFgCgFgDIAFgHIAIAFQAEACAFAAQAFAAADgDQADgCAAgEIgCgEIgCgDIgFgCIgDgCIgHgDIgFgCIgEgFQgCgCABgEIABgGQABgEACgCIAHgDQAEgCAEAAQAFAAAEACIAJAFIgGAGIgFgDIgHgCQgFAAgDADQgCACAAAEQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIACADIAFACIADACIAHACIAGACIAEAFQABADAAAEQAAAEgBADIgEAGIgGADQgFACgFAAQgFAAgGgDg");
	this.shape.setTransform(628.1,288.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAAAlQgDgCgCgDQgCgCgBgDIgBgIIAAggIgIAAIAAgHIAJgBIABgQIAHAAIAAAQIAQAAIAAAIIgQAAIAAAgQABAFACADQACADAEAAIAEgBIADAAIACAHIgFACIgGAAQgEAAgDgBg");
	this.shape_1.setTransform(623.6,288.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgHAdIgJgGQgDgEgDgGQgCgGAAgHQAAgGACgGQADgFADgEQAEgEAFgCQAEgDAEAAQAGAAAEACQAFACADAEQADAEABAFQACAFAAAGIAAACIgBACIgmAAQABAKAFAFQAFAGAHAAIAIgBIAHgEIADAHQgDACgFACQgFACgGAAQgFAAgFgCgAgDgUQgDABgCACQgDACgBAEIgCAHIAeAAQAAgIgEgFQgDgFgHAAIgFACg");
	this.shape_2.setTransform(618.6,288.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AANArIgQgcIgLAMIAAAQIgJAAIAAhVIAJAAIAAA5IABAAIAYgeIAKAAIgTAXIAWAjg");
	this.shape_3.setTransform(613,287.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgGAdQgEgCgEgEQgEgEgCgGQgCgGAAgHQAAgGADgGQACgGADgDQAFgEAEgCQAFgDAFAAQAGAAAEADIAHAEIgFAHIgFgEQgDgBgDAAQgFAAgCABIgGAFQgCADgBAEQgCAEAAAEQAAAFACAEIADAHQADADADACQACACAEAAQAEAAADgCIAHgEIAEAGQgDAEgFACQgGACgFAAQgEAAgGgCg");
	this.shape_4.setTransform(607,288.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgJAdQgFgCgEgEQgEgEgCgGQgCgGAAgHQAAgGACgGQACgGAEgDQAEgEAFgCQAEgDAFAAQAFAAAFADQAFACAEAEQADADADAGQACAGAAAGQAAAHgCAGQgDAGgDAEQgEAEgFACQgFACgFAAQgFAAgEgCgAgGgUQgDACgCADQgCADgCAEQgBAEAAAEQAAAFABAEQACAEACADQACADADACQADACADAAQAEAAADgCQADgCACgDQACgDACgEQABgEAAgFQAAgEgBgEQgCgEgCgDQgCgDgDgCQgDgBgEAAIgGABg");
	this.shape_5.setTransform(600.9,288.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgOAmQgHgEgFgFIAGgHQAEAFAGACQAFADAGAAQAHAAAFgEQAEgDAAgGIgBgFIgDgEIgEgCIgFgDIgKgFIgGgCIgFgEIgEgFQgBgEAAgEIABgIQACgEAEgDQADgDAEgBQAFgCAEAAQAHAAAGADQAGACAFAFIgGAGQgDgDgFgCQgEgCgGAAQgFAAgEADQgEADAAAFIABAFIADAEIAEACIAEACIALAFIAGADIAFAEQADACABAEQABADAAAEQAAAFgCAEQgCAEgDADQgEADgEACQgFACgHAAQgHAAgHgDg");
	this.shape_6.setTransform(594.5,287.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgHApIgIgFIgBAAIAAAGIgIAAIAAhUIAJAAIAAAXIAAALIAJgGQAFgDADAAQAGAAAEADQAEABAEAFQADADABAFQABAFAAAHQAAAHgCAGQgCAGgDAEQgDAEgFACQgFACgFAAQgDAAgEgCgAgPgBIAAAeQAEAEAEABIAGABQADAAADgCIAGgEIADgIIABgJIgBgJIgCgGIgFgEQgDgBgEAAQgHAAgIAHg");
	this.shape_7.setTransform(588.2,287.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgHAdIgJgGQgDgEgDgGQgCgGAAgHQAAgGACgGQADgFADgEQAEgEAFgCQAEgDAEAAQAGAAAEACQAFACADAEQADAEABAFQACAFAAAGIAAACIgBACIgmAAQABAKAFAFQAFAGAHAAIAIgBIAHgEIADAHQgDACgFACQgFACgGAAQgFAAgFgCgAgDgUQgDABgCACQgDACgBAEIgCAHIAeAAQAAgIgEgFQgDgFgHAAIgFACg");
	this.shape_8.setTransform(581.7,288.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAQAnIgMguIgCgJIgCgJIAAAAIgBAJIgCAJIgMAuIgMAAIgQhNIAKAAIAIApIACANIADANIAAAAIADgNIADgNIALgpIAIAAIALApIACANIADANIABAAIACgNIACgNIAJgpIAJAAIgQBNg");
	this.shape_9.setTransform(573.9,287.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},119).to({state:[]},61).to({state:[]},60).wait(360));

	// connection1
	this.instance_15 = new lib.websockets("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(597.7,300,1,1,0,0,0,153.3,0);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},0).to({_off:true},361).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1108.4,706.1,183.3,105.9);
// library properties:
lib.properties = {
	id: 'E632904805F7644FBF9DCCD61988AEC0',
	width: 1200,
	height: 600,
	fps: 120,
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
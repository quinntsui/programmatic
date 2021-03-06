(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.JUPT0002_Pnetwork_300x250_h4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		if (! this.alreadyExecuted)
		{
			this.alreadyExecuted = true;
			this.loopNum = 1;
		}
		else
		{
			this.loopNum++;
			if (this.loopNum == 3)
			{
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXcTiMgu3AAAMAAAgnDMAu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(180));

	// Layer 4
	this.instance = new lib._300x250_logo();
	this.instance.setTransform(0,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(180));

	// dis
	this.instance_1 = new lib._300x250_dis();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},109).wait(71));

	// Jupiter fund
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(127.6,58.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({x:150,alpha:1},8,cjs.Ease.get(0.96)).wait(63));

	// button
	this.instance_3 = new lib.button("synched",0);
	this.instance_3.setTransform(182.3,135,1.195,1.195,0,0,0,107.2,16);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).wait(5).to({startPosition:0,_off:false},0).to({x:204.6,alpha:1},8,cjs.Ease.get(0.96)).wait(58));

	// bg blue
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},10).wait(71));

	// out2
	this.instance_5 = new lib.out2();
	this.instance_5.setTransform(175.6,149.4,1.196,1.195,0,0,0,136.4,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},110).wait(70));

	// Layer 5
	this.instance_6 = new lib._300x250_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[]},110).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,252.3);


// symbols:
(lib._300x250_dis = function() {
	this.initialize(img._300x250_dis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300x250_img = function() {
	this.initialize(img._300x250_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300x250_logo = function() {
	this.initialize(img._300x250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCPIAAkdIC1AAIAAAuIiCAAIAABFIB5AAIAAAsIh5AAIAABPICEAAIAAAvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-14.2,18.6,28.7);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRCPIiZjJIAADJIgyAAIAAkdIAtAAICWDFIAAjFIAyAAIAAEdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-14.2,24.7,28.7);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCPIAAkdIAxAAIAAEdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-14.2,5.2,28.7);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFCPIAAiBIiIAAIAACBIg0AAIAAkdIA0AAIAABwICIAAIAAhwIAzAAIAAEdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-14.2,24.1,28.7);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggCPQgQgEgOgJQgPgJgKgMQgKgMgHgPIAngYQAEAKAIAIQAHAIAJAGQAJAGALACQALAEALAAQAOAAAKgEQAJgEAGgFQAKgLAAgOQgBgJgDgHQgFgHgIgGQgLgHgdgMIgggPQgQgFgLgKQgLgKgGgNQgHgOAAgTQABgQAGgPQAIgOAMgLQAMgKAQgGQARgFAPAAQAQAAAPAEQANADALAGQALAGAIAKQAJAHAGALIgkAZQgJgNgMgGQgMgHgTABQgOgBgMAJQgLAJAAANQAAAJAEAHQAFAGAIAFIAuAVQAVAIANAIQAPAHAJAKQAKAKAEANQAFANAAAQQAAASgHAQQgFAPgNAMQgNALgTAHQgTAGgYAAQgTAAgSgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-14.8,21.1,29.7);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCPIAAjvIhOAAIAAguIDNAAIAAAuIhNAAIAADvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-14.2,20.7,28.7);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsCKQgWgIgPgOQgIgHgGgJQgHgIgEgLQgEgLgDgNQgCgMAAgPIAAiuIA0AAIAACqQAAASAEAPQAFANAJAJQAIAJAMAFQAMADANAAQAPAAALgDQAMgFAIgJQAJgJAFgNQAEgPAAgSIAAiqIA0AAIAACuQAAAPgCAMQgDANgEALQgEALgHAIQgGAJgIAHQgPAOgWAIQgVAHgYAAQgXAAgVgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-14.5,23.3,29.1);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdCRQgPgDgOgFQgOgGgLgHQgNgIgKgKQgKgKgJgMQgIgMgFgNQgGgOgDgPQgDgPAAgPQAAgOADgPQADgPAGgNQAFgNAIgMQAJgMAKgLQAKgKANgIQALgHAOgGQAOgFAPgDQAPgEAOAAQAPAAAPAEQAPADAOAFQANAGAMAHQANAIAKAKQAKALAIAMQAJAMAGANQAFANADAPQADAPAAAOQAAAPgDAPQgDAPgFAOQgGANgJAMQgIAMgKAKQgKAKgNAIQgMAHgNAGQgOAFgPADQgPADgPABQgOgBgPgDgAgmhdQgTAIgOAOQgNAOgIATQgHASAAAUQAAAVAHATQAIASANAOQAOAOATAIQASAIAUgBQAVABASgIQATgIANgOQAOgOAHgSQAIgTAAgVQAAgUgIgSQgHgTgOgOQgNgOgTgIQgSgIgVAAQgUAAgSAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-14.8,30.3,29.8);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDAtIAAgbIgCADIgCADIgFACIgFAAQgFAAgFgCQgEgCgDgDQgEgEgCgFQgBgEAAgGQAAgDABgFQACgFAEgEQADgDAEgCQAFgCAFAAIAFAAIAFACIACADIACADIAAgHIAMAAIAABEgAiWgMIgEADIgDAFIgBAEIABAGIADAFIAEADIAGABIAGgBIAEgDIADgFIABgGIgBgEIgDgFIgEgDIgGgBIgGABgAnfAtIAAhEIALAAIAAAHIABgDIADgDIAFgCIAGAAQAFAAAEACQAEACADADQAEAEABAFQACAFAAADQAAAGgCAEQgBAFgEAEQgDADgEACQgEACgFAAIgGAAIgFgCIgDgDIgBgDIAAAbgAnMgMIgFADIgDAFIgBAEIABAGIADAFIAFADIAFABIAFgBIAFgDIADgFIABgGIgBgEIgDgFIgFgDIgFgBIgFABgAMoAZQgFgCgEgEQgDgEgCgEIgCgFIAAgGIACgJQACgFADgDQAEgEAFgCQAEgCAGAAIAFABIAEABIAFADIAEAEIgHAIQgCgDgDgBQgDgCgDAAIgHABIgEAEIgDAFIgBAEIABAGIADAFIAEAEIAHABQADAAADgCIAFgEIAHAIIgEAEIgFADIgEABIgFABQgGAAgEgCgALUAaIgFgCIgFgEIgDgEIAIgGQABADADABQAEACAEAAQAEAAACgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgCgCIgJgDIgGgDIgDgBIgCgDIgBgGIABgGIAEgFIAFgDIAGgBQAEAAAFACQAEACACAEIgGAHIgDgDIgGgBIgEABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAJAEIAGACIAEACIACAEIABAFIgBAGIgEAFQgCACgEABQgDACgGAAIgGgBgAKqAaIgGgCIgEgEIgCgEIAGgGQACADADABQAEACAEAAQAFAAABgCQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIgBgDIgEgCIgJgDIgEgDIgEgBIgCgDIgBgGIABgGIAEgFIAFgDIAHgBQADAAAGACQADACACAEIgFAHIgEgDIgGgBIgEABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAIAJAEIAGACIAEACIACAEIABAFIgBAGIgEAFQgCACgDABQgFACgEAAIgHgBgAIuAZQgEgCgEgEQgDgEgCgEIgBgFIgBgGIACgJQACgFADgDQAEgEAEgCQAFgCAFAAIAGABIAEABIAFADIAEAEIgGAIQgDgDgDgBQgDgCgEAAIgFABIgFAEIgDAFIgBAEIABAGIADAFIAFAEIAFABQAEAAADgCIAGgEIAGAIIgEAEIgFADIgEABIgGABQgFAAgFgCgAFdAZQgFgCgDgEQgEgEgCgEIgCgFIAAgGIACgIQACgFAEgEQADgEAFgCIAKgCQAFAAAEACQAFACADAEQAEAEACAFIACAIIAAAGIgCAFQgCAEgEAEQgDAEgFACQgEACgFAAQgIgBgCgBgAFhgNIgFAEIgDAFIgBAEIABAGIADAFIAFAEIAGABIAGgBIAEgEIADgFIABgGIgBgEIgDgFIgEgEIgGgBIgGABgACeAZQgFgCgDgEQgEgEgCgEIgCgFIAAgGQAAgCACgGQACgFAEgEQADgEAFgCIAKgCQAFAAAFACQAEACAEAEQADAEACAFIACAIIAAAGIgCAFQgCAEgDAEQgEAEgEACQgFACgFAAQgIgBgCgBgACigNIgFAEIgDAFIgBAEIABAGIADAFIAFAEIAGABIAFgBIAFgEIADgFIABgGIgBgEIgDgFIgFgEIgFgBIgGABgABLAaIgFgCIgFgEIgDgEIAIgGQABADADABQADACAFAAQAEAAACgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgCgCIgJgDIgGgDIgDgBIgCgDIgBgGIABgGIAEgFIAFgDIAGgBQAEAAAFACQAEACACAEIgGAHIgDgDIgGgBIgEABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAJAEIAGACIAEACIACAEIABAFIgBAGIgDAFQgDACgEABQgDACgGAAIgGgBgAhiAZIgHgEQgDgCgBgEQgBgEAAgGIAAgcIALAAIAAAbIAAAFIACAEIAEACIAEABIAEgBIADgCIACgEIABgFIAAgbIALAAIAAAcQAAAFgCAFQgBADgDADIgHAEQgEACgEAAQgFAAgEgCgAoLAZQgEgCgEgEQgEgEgCgEIgBgFIgBgGIACgIQACgFAEgEQAEgEAEgCIAKgCQAFAAAFACQAEACAEAEQADAEADAFIACAIIgBAGIgBAFQgDAEgDAEQgEAEgEACQgFACgFAAQgHgBgDgBgAoHgNIgEAEIgEAFIgBAEIABAGIAEAFIAEAEIAGABIAGgBIAEgEIADgFIACgGIgCgEIgDgFIgEgEIgGgBIgGABgApiAZIgHgEQgCgCgCgEQgCgEABgGIAAgcIAKAAIAAAbIABAFIACAEIAEACIAEABIAEgBIADgCIACgEIABgFIAAgbIAMAAIAAAcQgBAFgCAFQgBADgDADIgHAEQgEACgEAAQgEAAgFgCgAt1AZQgFgCgDgEQgEgEgCgEIgBgFIgBgGQAAgCACgGQACgFAEgEQADgEAFgCIAKgCQAFAAAFACQAEACAEAEQADAEACAFIACAIIgBAGIgBAFQgCAEgDAEQgEAEgEACQgFACgFAAQgIgBgCgBgAtxgNIgFAEIgDAFIgBAEIABAGIADAFIAFAEIAGABIAFgBIAFgEIADgFIABgGIgBgEIgDgFIgFgEIgFgBIgGABgAumAZQgFgCgDgEQgDgEgCgEIgCgFIgBgGIADgJQACgFADgDQADgEAFgCQAEgCAGAAIAFABIAFABIAFADIADAEIgGAIQgDgDgDgBQgCgCgEAAIgGABIgFAEIgCAFIgBAEIABAGIACAFIAFAEIAGABQAEAAACgCIAGgEIAGAIIgDAEIgFADIgFABIgFABQgGAAgEgCgAvVAaIgFgCIgEgEIgDgEIAHgGQACADADABQADACAFAAQAEAAACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgDgCIgJgDIgFgDIgEgBIgCgDIgBgGIABgGIAFgFIAEgDIAHgBQAEAAAFACQAEACACAEIgGAHIgEgDIgFgBIgFABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAIAJAEIAFACIAFACIACAEIABAFIgBAGIgEAFQgDACgDABQgEACgFAAIgHgBgAQfAaQgFAAgFgBQgFgCgDgEQgDgDgCgFQgBgFAAgGIABgJQACgFADgDQADgEAFgCQAFgCAFAAQAFAAAEACQAFACADAEQADADACAFIABAJIAAADIgkAAIABAGIACAEIAFACIAFABQAFAAADgBIAGgFIAGAHIgFAFIgEADIgGABgAQrgDIgBgFIgDgDIgDgCIgFgBIgFABIgEACIgDADIgBAFIAZAAIAAAAgAPCAaIgEgCIgEgDIgBgDIAAAHIgLAAIAAhDIALAAIAAAaIABgDIAEgDIAEgCIAGAAQAFAAAEACQAEACAEADQADAEABAFQACAFAAADQAAAGgCAEQgBAFgDAEQgEADgEACQgEACgFAAIgGAAgAPBgMIgFADIgDAFIgBAEIABAGIADAFIAFADIAFABIAFgBIAFgDIADgFIABgGIgBgEIgDgFIgFgDIgFgBIgFABgANWAYQgDgCgEgDQgDgEgCgFQgBgEAAgGQAAgDABgFQACgFADgEQAEgDADgCQAFgCAFAAIAGAAIAEACIADADIACADIAAgHIALAAIAAAwIgLAAIAAgHIgCADIgDADIgEACIgGAAQgFAAgFgCgANcgMIgFADIgCAFIgBAEIABAGIACAFIAFADIAFABIAGgBIAEgDIAEgFIABgGIgBgEIgEgFQgBgCgDgBIgGgBIgFABgAJ0AYQgEgCgEgDQgCgEgCgFQgCgEAAgGQAAgDACgFQACgFACgEQAEgDAEgCQAFgCAFAAIAFAAIAEACIADADIADADIAAgHIALAAIAAAwIgLAAIAAgHIgDADIgDADIgEACIgFAAQgFAAgFgCgAJ6gMQgDABgCACIgDAFIgBAEIABAGIADAFIAFADIAFABIAGgBIAEgDIADgFIABgGIgBgEIgDgFIgEgDIgGgBIgFABgAHNAYQgEgCgDgDQgDgEgCgFQgCgEABgGQgBgDACgFQACgFADgEQADgDAEgCQAFgCAFAAIAFAAIAFACIADADIACADIAAgaIALAAIAABDIgLAAIAAgHIgCADIgDADIgFACIgFAAQgFAAgFgCgAHTgMQgDABgBACIgEAFIgBAEIABAGIAEAFIAEADIAGABIAFgBIAFgDIACgFIABgGIgBgEIgCgFIgFgDIgFgBIgGABgAAkAaQgGAAgEgBQgFgCgDgEQgEgDgBgFQgCgFAAgGIACgJQABgFAEgDQADgEAFgCQAEgCAFAAQAFAAAFACQAEACAEAEQACADACAFIACAJIAAADIglAAIABAGIADAEIAFACIAFABQAEAAADgBIAGgFIAGAHIgEAFIgFADIgFABgAAvgDIgBgFIgCgDIgEgCIgFgBIgEABIgFACIgCADIgCAFIAZAAIAAAAgAjGAaQgGAAgEgBQgFgCgDgEQgEgDgCgFQgBgFAAgGIABgJQACgFAEgDQADgEAFgCQAFgCAFAAQAEAAAFACQAEACAEAEQADADABAFIABAJIAAADIgkAAIABAGIADAEIAEACIAGABQAEAAAEgBIAFgFIAGAHIgEAFIgFADIgFABgAi7gDIgBgFIgCgDIgEgCIgEgBIgGABIgDACIgDADIgCAFIAZAAIAAAAgAllAYQgEgCgDgDQgDgEgCgFQgCgEABgGQgBgDACgFQACgFADgEQADgDAEgCQAFgCAFAAIAFAAIAFACIADADIACADIAAgHIALAAIAAAwIgLAAIAAgHIgCADIgDADIgFACIgFAAQgFAAgFgCgAlfgMIgFADIgDAFIgBAEIABAGIADAFIAFADIAGABIAFgBIAFgDIACgFIABgGIgBgEIgCgFIgFgDIgFgBIgGABgAmOAaQgGAAgFgBQgEgCgDgEQgEgDgCgFQgCgFABgGIABgJQACgFAEgDQADgEAEgCQAFgCAFAAQAFAAAFACQAEACADAEQADADABAFIACAJIAAADIglAAIABAGIAEAEIAEACIAGABQAEAAADgBIAFgFIAHAHIgFAFIgEADIgGABgAmDgDIgBgFIgCgDIgFgCIgEgBIgFABIgEACIgDADIgCAFIAaAAIAAAAgAsHAaQgFAAgFgBQgFgCgDgEQgEgDgCgFQgBgFAAgGIABgJQACgFAEgDQADgEAFgCQAEgCAGAAQAEAAAFACQAEACAEAEQADADABAFIABAJIAAADIgkAAIABAGIADAEIAEACIAGABQAEAAAEgBIAFgFIAGAHIgEAFIgFADIgFABgAr8gDIgBgFIgCgDIgEgCIgEgBIgGABIgDACIgEADIgBAFIAZAAIAAAAgAPnAZIAAgwIALAAIAAAHQACgEADgCIAEgCIAFAAIADAAIAAAMIgEgBIgGABIgDADIgDAEIgBAFIAAAZgAOYAZIAAgwIAMAAIAAAwgAODAZIAAhDIALAAIAABDgAJSAZIAAhDIALAAIAABDgAGtAZIAAhDIAKAAIAABDgAGJAZIAAgwIALAAIAAAHQABgEAEgCIAEgCIAFAAIADAAIAAAMIgFgBIgFABIgEADIgDAEIAAAFIAAAZgAEzAZIgJgeIgKAeIgJAAIgQgwIAMAAIAJAdIAKgdIAIAAIAKAdIAKgdIAKAAIgQAwgADNAZIAAglIgIAAIAAgLIAIAAIAAgDQAAgFABgEQABgDAEgDQADgDAIAAIAFABIAAAKIgEgBQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBACgBADIAAAEIAJAAIAAALIgJAAIAAAlgAgGAZIAAgwIAJAAIAAAwgAgiAZIAAglIgGAAIAAgLIAGAAIAAgTIALAAIAAATIALAAIAAALIgLAAIAAAlgAg6AZIAAgwIALAAIAAAwgAkXAZIAAgbIgBgFIgBgDIgEgDIgEAAIgFAAIgDADIgCAEIgBAEIAAAbIgLAAIAAgwIALAAIAAAHQABgEAEgCIAFgCIAEAAQAFAAADABIAGAEIADAHIABAIIAAAdgAo6AZIAAgwIALAAIAAAHQABgEAEgCIAFgCIAEAAIAEAAIAAAMIgGgBIgEABIgFADIgCAEIgBAFIAAAZgAqiAZIAAhDIAqAAIAAALIgeAAIAAAQIAcAAIAAAMIgcAAIAAARIAfAAIAAALgArpAZIAAgwIALAAIAAAHQACgEADgCIAEgCIAFAAIADAAIAAAMIgEgBIgGABIgDADIgDAEIgBAFIAAAZgAs9AZIgVgwIAMAAIANAgIAOggIALAAIgUAwgAvyAZIAAgwIALAAIAAAwgAw1AZIAAhDIAYAAIAHAAIAHACIAGADIAFAEIADAGIADAFIACAHIABAIIgBAHIgCAFIgDAGIgDAFIgFAEIgGADIgGACIgIAAgAwpAOIALAAIAKgCQAFgBADgEQACgDABgEQACgCAAgFQAAgGgCgEQgBgEgCgDQgDgEgFgBQgGgCgEAAIgLAAgAOagfQgDgCAAgDQAAgDADgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACACAAADQAAADgCACQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgFgfQgCgCAAgDQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAABABAAQABAAAAABQACACAAADQAAADgCACQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAgAg5gfQgCgCAAgDQAAgDACgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAgAvxgfQgCgCAAgDQAAgDACgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQABACAAADQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(0.1,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.7,-3.5,215.7,9.1);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4D036").s().p("AggBDIAAhnIASAAIAAALIACgFIAGgEIAGgCIAIgBQAHAAAHADQAIADAEAFQAGAGACAHQADAHABAGQgBAJgDAHQgCAHgGAGQgEAFgIADQgHADgHAAIgIgBIgGgDQgDgBgDgDIgCgFIAAAogAgCgTIgHAFQgDADgCAEQgCAEAAADQAAAFACAFQACAEADADQADADAEACQADABAEAAQAFAAAEgBQAFgCADgDQADgDABgEQACgFAAgFQAAgDgCgEQgBgEgDgDQgDgDgFgCQgEgCgFAAQgEAAgDACgArUBDIAAhnIASAAIAAALIADgFIAGgEIAHgCIAJgBQAHAAAHADQAHADAFAFQAFAGADAHQADAHAAAGQAAAJgDAHQgDAHgFAGQgFAFgHADQgHADgHAAIgJgBIgHgDQgEgBgCgDIgDgFIAAAogAq2gTIgHAFQgDADgBAEQgCAEAAADQAAAFACAFQABAEADADQAEADADACQAFABAFAAQAEAAAEgBQAFgCADgDQADgDACgEQABgFAAgFQAAgDgBgEQgCgEgDgDQgDgDgFgCQgEgCgEAAQgFAAgFACgAI7AlQgIgDgFgFQgGgGgDgHIgDgHIgBgJQABgDADgLQADgHAGgFQAFgGAIgDQAFgCALgBQAIAAAIADQAIADAFAGQAGAFADAHQAEALgBADIgBAJIgCAHQgDAHgGAGQgFAFgIADQgIAEgIAAQgLgCgFgCgAJCgUIgHAFQgEAEgCAEQgCAEAAADQAAAFACAFQACAEAEADIAHAFQAEACAFAAQAFAAAFgCIAHgFQADgDABgEQACgFAAgFQAAgDgCgEQgBgEgDgEIgHgFQgFgBgFAAQgFAAgEABgAhmAlQgIgDgGgFQgFgGgEgHIgCgHIgBgJQAAgDADgLQAEgHAFgFQAGgGAIgDQAEgCAMgBQAIAAAHADQAIADAGAGQAGAFADAHQADALAAADIgBAJIgCAHQgDAHgGAGQgGAFgIADQgHAEgIAAQgMgCgEgCgAhggUIgHAFQgDAEgCAEQgCAEAAADQAAAFACAFQACAEADADIAHAFQAEACAGAAQAFAAAEgCIAHgFQADgDACgEQACgFAAgFQAAgDgCgEQgCgEgDgEIgHgFQgEgBgFAAQgGAAgEABgAGqAnIgLgDIgJgFIgIgGIgHgIIgGgJQgCgFgBgEIgBgLIABgLQABgGACgFIAGgJIAHgIIAIgGIAJgFIALgDIAKgBIAMABIAKADIAJAFIAIAGIgMAMQgFgFgGgDQgHgCgJAAQgHAAgHACQgHADgFAFQgFAFgDAHQgCAHAAAIQAAAIACAFQADAGAFAFQAFAGAHACQAHADAHAAQAIAAAHgCQAGgDAFgEIAAgRIgdAAIAAgRIAvAAIAAAoQgEAFgFADQgEAEgGADIgMAEIgNABIgKgBgABOAlQgHgCgFgGQgFgFgDgHQgDgHAAgJIAAgBQAAgEADgKQADgHAFgGQAGgFAGgDQAIgDAIAAQAJAAAHADQAHADAEAFQAFAGADAHQADAHAAAHIgBAFIg6AAIACAIQABAEADACIAHAEQAEACAFAAQAHAAAFgDQAFgCAEgEIALAKIgIAHIgHAEIgJACIgIABQgJAAgIgDgABWgVQgDABgDADIgFAFIgCAGIAoAAQABgDgCgDIgEgFIgGgEIgIgBIgIABgAjxAmQgGgCgFgEQgFgEgDgGQgDgGAAgIIAAgsIATAAIAAArIABAHQABADADADQACACADABIAHABIAGgBIAFgDQADgDABgDQABgDAAgEIAAgrIASAAIAAAsQAAAIgCAGQgDAGgFAEQgFAEgHACQgFACgIAAQgHAAgGgCgAoOAlQgIgCgFgGQgGgFgDgHQgDgHAAgJIAAgBQAAgEADgKQADgHAGgGQAFgFAIgDQAHgDAJAAQAIAAAGADQAHADAGAFQAFAGACAHQADAHAAAHIAAAFIg8AAIACAIQACAEADACIAIAEQADACAGAAQAGAAAFgDQAFgCAEgEIAKAKIgHAHIgIAEIgHACIgJABQgJAAgHgDgAoGgVQgEABgDADIgFAFIgCAGIApAAQAAgDgCgDIgEgFIgGgEIgHgBIgIABgAsTAmQgHgCgEgEQgGgEgCgGQgDgGAAgIIAAgsIASAAIAAArIACAHQABADACADQACACAEABIAGABIAGgBIAGgDQACgDABgDQACgDgBgEIAAgrIASAAIAAAsQABAIgDAGQgDAGgEAEQgFAEgHACQgGACgIAAQgGAAgGgCgAtiAnIAAgRQAEABAEAAQAFAAADgBIADgEQACgEAAgIIAAhHIATAAIAABGIgBANQgBAHgCAEQgEAFgGADIgGACIgJABQgGAAgFgBgACkAlQgHgDgFgFQgFgGgDgHQgDgHAAgJQAAgGADgHQADgHAFgGQAFgFAHgDQAHgDAIAAIAJABIAHACIAGAEIACAFIAAgLIASAAIAABKIgSAAIAAgLIgCAFIgGAEIgHADIgJABQgIAAgHgDgACtgTIgHAFQgEADgCAEQgBAEAAADQAAAFABAFIAGAHQACADAFACIAJABQAEAAAFgBQAEgCADgDIAFgHQACgFgBgFQABgDgCgEQgCgEgDgDQgDgDgEgCQgFgCgEAAIgJACgANRAmIAAgqIAAgHIgEgFQgCgDgCgBQgDgBgEAAQgEAAgDABIgFAEIgEAFIgBAIIAAApIgSAAIAAhnIASAAIAAAoQADgGAFgDIAHgCIAIgBQAGAAAFACQAFACAEAEQAEAEACAGQABAFAAAHIAAAtgALxAmIAAg5IgJAAIAAgRIAJAAIAAgdIASAAIAAAdIARAAIAAARIgRAAIAAA5gAK8AmIgPguIgQAuIgOAAIgahKIARAAIAQAuIAQguIANAAIAQAuIAQguIARAAIgZBKgAHvAmIAAhKIASAAIAAAMQACgGAGgEIAHgCIAHgBIAGAAIAAASIgHgBIgJABQgEACgDADQgCACgBAEQgCAEAAAEIAAAmgAEhAmIAAgqIgCgHIgDgFQgBgDgDgBIgHgBQgFAAgDABIgFAEIgEAFIgBAIIAAApIgSAAIAAhKIASAAIAAALQADgFAGgEIAGgCIAIgBQAGAAAGACQAGACADAEQAEAEABAGQACAFABAHIAAAtgAixAmIAAhKIASAAIAAAMQACgGAGgEIAGgCIAIgBIAGAAIAAASIgIgBIgIABQgEACgDADQgDACgBAEQgBAEAAAEIAAAmgAlZAmIAAhnIBDAAIAAARIgwAAIAAAZIAtAAIAAARIgtAAIAAAbIAyAAIAAARgAnNAmIAAhKIASAAIAAAMQADgGAGgEIAHgCIAHgBIAFAAIAAASIgHgBIgJABQgEACgCADQgDACgBAEQgBAEgBAEIAAAmgApQAmIAAg5IgKAAIAAgRIAKAAIAAgdIASAAIAAAdIAQAAIAAARIgQAAIAAA5gAp4AmIAAhKIASAAIAABKgAp2gwQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(-18.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AH2EOIAAhpIALAAIAAAMQAEgGAFgEIAIgDIAKgBQAIAAAHADQAHADAFAGQAGAFACAHQADAIABAIQgBAJgDAHQgCAIgGAFQgFAGgHADQgHADgIAAIgKgCIgIgDQgFgDgEgGIAAAogAIRCwQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAFACAGAAQAGAAAFgCQAFgCADgEQAFgEABgGQACgFAAgHQAAgGgCgFQgBgGgFgEQgDgEgFgCQgFgCgGAAQgGAAgFACgAumEOIAAhpIAMAAIAAAMQADgGAGgEIAHgDIALgBQAIAAAGADQAIADAFAGQAFAFADAHQADAIAAAIQAAAJgDAHQgDAIgFAFQgFAGgIADQgGADgIAAIgLgCIgHgDQgGgDgDgGIAAAogAuLCwQgEACgFAEQgDAEgCAGQgCAFgBAGQABAHACAFQACAGADAEQAFAEAEACQAGACAGAAQAFAAAGgCQAEgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgFQgCgGgEgEQgEgEgEgCQgGgCgFAAQgGAAgGACgATMDxQgIgDgGgGQgFgFgDgIIgDgHIAAgJQAAgFADgLQADgHAFgFQAGgGAIgDQAHgDAIAAQAJAAAHADQAHADAGAGIgHAHQgEgEgGgCQgGgCgGAAQgGAAgGACQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGACAGAAQAGAAAGgCQAGgCAEgFIAHAIQgGAGgHADQgHADgJAAQgIAAgHgDgAQhDxQgHgDgGgGQgFgFgDgIQgDgHAAgJQAAgIADgIQADgHAFgFQAGgGAHgDQAHgDAHAAIAKABIAIADQAGAEADAGIAAgMIAMAAIAABMIgMAAIAAgLQgDAGgGADIgIADQgEACgGAAQgHAAgHgDgAQlCwQgFACgEAEQgEAEgBAGQgDAFAAAGQAAAHADAFQABAGAEAEQAEAEAFACQAFACAFAAQAHAAAFgCQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgFQgCgGgEgEQgEgEgFgCQgFgCgHAAQgFAAgFACgAMZDxQgIgDgFgGQgGgFgDgIIgCgHIAAgJQAAgFACgLQADgHAGgFQAFgGAIgDQAIgDAHAAQAJAAAIADQAGADAGAGQAFAFADAHQAEALAAAFIgBAJIgDAHQgDAIgFAFQgGAGgGADQgIADgJAAQgHAAgIgDgAMdCwQgFACgEAEQgFAEgCAGQgBAFAAAGQAAAHABAFQACAGAFAEQAEAEAFACQAGACAFAAQAHAAAFgCQAFgCAEgEQAFgEABgGQADgFAAgHQAAgGgDgFQgBgGgFgEQgEgEgFgCQgFgCgHAAQgFAAgGACgAEzDxQgIgDgFgGQgGgFgDgIIgCgHIAAgJQAAgFACgLQADgHAGgFQAFgGAIgDQAIgDAHAAQAJAAAIADQAGADAGAGQAFAFADAHQAEALAAAFIgBAJIgDAHQgDAIgFAFQgGAGgGADQgIADgJAAQgHAAgIgDgAE3CwQgFACgEAEQgFAEgCAGQgBAFAAAGQAAAHABAFQACAGAFAEQAEAEAFACQAGACAFAAQAHAAAFgCQAFgCAEgEQAFgEABgGQADgFAAgHQAAgGgDgFQgBgGgFgEQgEgEgFgCQgFgCgHAAQgFAAgGACgABxDxQgIgDgFgGQgGgFgDgIIgCgHIgBgJQAAgFADgLQADgHAGgFQAFgGAIgDQAIgDAIAAQAIAAAHADQAIADAFAGQAFAFAEAHQADALAAAFIgBAJIgCAHQgEAIgFAFQgFAGgIADQgHADgIAAQgIAAgIgDgAB1CwQgFACgFAEQgDAEgCAGQgDAFAAAGQAAAHADAFQACAGADAEQAFAEAFACQAFACAHAAQAGAAAFgCQAGgCAEgEQADgEADgGQACgFAAgHQAAgGgCgFQgDgGgDgEQgEgEgGgCQgFgCgGAAQgHAAgFACgAglDxQgIgDgEgGQgGgFgCgIQgEgHAAgJQAAgIAEgIQACgHAGgFQAEgGAIgDQAHgDAIAAIAKABIAIADQAEAEADAGIAAgpIALAAIAABpIgLAAIAAgLQgDAGgEADIgIADQgFACgFAAQgIAAgHgDgAghCwQgFACgEAEQgDAEgCAGQgCAFAAAGQAAAHACAFQACAGADAEQAEAEAFACQAFACAGAAQAGAAAFgCQAFgCAEgEQACgEACgGQACgFAAgHQAAgGgCgFQgCgGgCgEQgEgEgFgCQgFgCgGAAQgGAAgFACgAi1DxQgIgDgGgGQgFgFgDgIIgDgHIAAgJQAAgFADgLQADgHAFgFQAGgGAIgDQAHgDAIAAQAIAAAIADQAHADAGAGQAFAFADAHQADALAAAFIgBAJIgCAHQgDAIgFAFQgGAGgHADQgIADgIAAQgIAAgHgDgAiyCwQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGACAGAAQAHAAAFgCQAFgCAEgEQAEgEACgGQACgFABgHQgBgGgCgFQgCgGgEgEQgEgEgFgCQgFgCgHAAQgGAAgGACgAkEDxQgHgDgFgGQgGgFgDgIIgCgHIgBgJQAAgFADgLQADgHAGgFQAFgGAHgDQAIgDAIAAQAJAAAHADQAHADAGAGIgHAHQgEgEgGgCQgGgCgGAAQgGAAgFACQgGACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAGACQAFACAGAAQAGAAAGgCQAGgCAEgFIAHAIQgGAGgHADQgHADgJAAQgIAAgIgDgAsGDxQgIgDgFgGQgGgFgDgIIgDgHIAAgJQAAgFADgLQADgHAGgFQAFgGAIgDQAHgDAIAAQAIAAAIADQAHADAGAGQAFAFADAHQAEALgBAFIgBAJIgCAHQgDAIgFAFQgGAGgHADQgIADgIAAQgIAAgHgDgAsDCwQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGACAGAAQAHAAAEgCQAGgCAEgEQAEgEACgGQACgFABgHQgBgGgCgFQgCgGgEgEQgEgEgGgCQgEgCgHAAQgGAAgGACgAwpDxQgHgDgGgGQgFgFgDgIQgDgHAAgJQAAgIADgIQADgHAFgFQAGgGAHgDQAHgDAHAAIAKABIAIADQAGAEADAGIAAgMIAMAAIAABMIgMAAIAAgLQgDAGgGADIgIADQgEACgGAAQgHAAgHgDgAwlCwQgFACgEAEQgEAEgBAGQgDAFAAAGQAAAHADAFQABAGAEAEQAEAEAFACQAFACAFAAQAHAAAFgCQAFgCAEgEQADgEADgGQACgFAAgHQAAgGgCgFQgDgGgDgEQgEgEgFgCQgFgCgHAAQgFAAgFACgAz9DxQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgIADgIQADgHAFgFQAFgGAHgDQAHgDAIAAIAKABIAIADQAGAEADAGIAAgMIALAAIAABMIgLAAIAAgLQgDAGgGADIgIADQgEACgGAAQgIAAgHgDgAz4CwQgGACgDAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQADAEAGACQAFACAFAAQAGAAAFgCQAFgCAEgEQAEgEADgGQABgFAAgHQAAgGgBgFQgDgGgEgEQgEgEgFgCQgFgCgGAAQgFAAgFACgAUXDwQgGgCgFgFQgGgGgCgHQgDgHAAgJIAAAAQAAgJADgIQACgHAGgGQAFgFAGgDQAIgDAIAAQAHAAAHADQAGADAFAFQAEAFADAHQADAHAAAIIAAAFIg+AAQAAAGACAFQACAFAEAEQAEADAEACQAFACAGAAQAIAAAFgDQAFgCAFgFIAHAHQgCAEgFACIgHAEIgIADIgIAAQgIAAgIgDgAUdCvIgIAFQgEADgCAEQgCAEAAAFIAwAAQAAgFgBgEIgFgHQgDgDgEgCQgFgBgEAAQgFAAgFABgAJjDwQgGgCgFgFQgFgGgEgHQgCgHAAgJIAAAAQAAgJACgIQAEgHAFgGQAFgFAGgDQAIgDAIAAQAHAAAHADQAGADAFAFQAFAFACAHQACAHABAIIAAAFIg+AAQAAAGACAFQACAFAEAEQAEADAEACQAFACAGAAQAIAAAFgDQAFgCAGgFIAGAHQgDAEgDACIgIAEIgIADIgIAAQgIAAgIgDgAJpCvIgIAFQgEADgCAEQgCAEgBAFIAxAAQAAgFgBgEIgFgHQgDgDgEgCQgEgBgFAAQgFAAgFABgAGKDxQgFgCgFgEQgEgEgDgGQgCgFAAgIIAAgvIALAAIAAAuQABAFABAEQABAEADADQADADAEABQAEACAEAAQAEAAAEgCQAEgBADgDQADgDABgEQABgEABgFIAAguIALAAIAAAuQAAAIgCAGQgDAGgEAEQgFAEgFACQgHACgHAAQgGAAgGgCgAlYDwQgHgCgFgFQgFgGgDgHQgDgHAAgJIAAAAQAAgJADgIQADgHAFgGQAFgFAHgDQAHgDAIAAQAIAAAGADQAHADAEAFQAFAFACAHQADAHAAAIIAAAFIg9AAQAAAGACAFQACAFADAEQAEADAEACQAGACAGAAQAHAAAGgDQAEgCAGgFIAHAHQgDAEgEACIgIAEIgIADIgHAAQgJAAgHgDgAlTCvIgHAFQgFADgBAEQgCAEgBAFIAxAAQAAgFgBgEIgGgHQgDgDgEgCQgEgBgFAAQgFAAgFABgApqDwQgHgCgFgFQgFgGgDgHQgCgHAAgJIAAAAQAAgJACgIQADgHAFgGQAFgFAHgDQAIgDAHAAQAJAAAGADQAHADAEAFQAFAFACAHQACAHABAIIAAAFIg+AAQAAAGACAFQACAFADAEQAEADAFACQAFACAGAAQAHAAAHgDQAEgCAGgFIAHAHQgEAEgDACIgIAEIgIADIgIAAQgIAAgIgDgApkCvIgIAFQgEADgCAEQgCAEgBAFIAyAAQAAgFgCgEIgFgHQgDgDgFgCQgEgBgFAAQgEAAgFABgAyqDyQgFgBgEgDQgEgCgCgDIgEgIIAJgEQACAFAFADIAGADIAHABQAEAAAEgCIAFgCQADgDAAgFQAAgDgBgCIgDgEQgEgDgLgEIgIgDIgGgFQgDgDgCgDQgBgDAAgFQAAgEABgEQACgEAEgCIAGgEQAFgCAFAAQAIAAAFADQAGAEADAGIgJAFQgCgEgEgCQgDgCgEAAQgFAAgDADQgEADAAAEQAAAFAFADQADADAIADIAKAEIAIAFQADADABAEQACAEAAAEIgCAIQgBAEgEADQgEADgEACQgGACgHAAQgFAAgFgBgAVVDwQgDgCAAgDQAAgDADgDQABgCADAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgDAAgBgCgASaDxIAAguQABgFgCgDQgBgEgCgDQgEgDgDgBQgEgBgFAAQgEAAgEABIgHAEIgEAHQgCAEAAAFIAAAtIgLAAIAAhMIALAAIAAANIAEgFIAGgFIAGgDIAIgBQAHAAAGACQAFACADAEQAEAEACAFQABAFAAAHIAAAwgAPxDxIAAguIgBgIQgBgEgCgDQgCgDgEgBQgDgBgEAAQgEAAgDABIgHAEQgCADgBAEQgCAEAAAFIAAAtIgLAAIAAguIgBgIQgBgEgCgDQgDgDgDgBQgCgBgFAAQgEAAgDABIgFAEIgFAHQgBAEAAAFIAAAtIgLAAIAAhMIALAAIAAANQADgGAFgEIAHgDIAHgBIAHABIAGADIAGAFIADAGIAEgGIAFgFIAHgDIAIgBQAGAAAEACQAFACAEAEQADAEABAFQADAFAAAHIAAAwgANeDxIAAhMIALAAIAAANQAEgGAFgEIAHgDIAIgBIAEABIAAAMIgHgBIgIABQgEACgCADIgFAGQgCAEAAAFIAAAsgALhDxIAAhBIgMAAIAAgLIAMAAIAAgGQABgIABgFQACgEAEgEQAEgEALAAIAGABIAAAKIgHgBQgGAAgCADQgDAEAAAHIAAAHIAOAAIAAALIgOAAIAABBgAKjDxIAAhMIALAAIAAANQADgGAGgEIAGgDIAIgBIAFABIAAAMIgHgBIgIABQgEACgDADIgEAGQgCAEAAAFIAAAsgAHMDxIAAhBIgJAAIAAgLIAJAAIAAgdIAMAAIAAAdIARAAIAAALIgRAAIAABBgAC8DxIAAhBIgMAAIAAgLIAMAAIAAgGQABgIABgFQACgEADgEQAFgEALAAIAGABIAAAKIgHgBQgGAAgCADQgDAEAAAHIAAAHIAOAAIAAALIgOAAIAABBgAhvDxIAAhMIALAAIAAANQACgGAHgEIAGgDIAIgBIAFABIAAAMIgIgBIgIABQgDACgDADIgFAGQgCAEABAFIAAAsgAmbDxIAAhMIALAAIAAANQADgGAGgEIAGgDIAIgBIAFABIAAAMIgHgBIgIABQgEACgDADIgEAGQgCAEAAAFIAAAsgAn1DxIAAguQAAgFgCgDQAAgEgDgDQgDgDgEgBQgDgBgFAAQgEAAgFABIgHAEIgEAHQgBAEAAAFIAAAtIgLAAIAAhMIALAAIAAANIADgFIAGgFIAHgDIAIgBQAGAAAGACQAFACAEAEQADAEACAFQACAFAAAHIAAAwgAqrDxIgghMIAMAAIAYA6IAYg6IANAAIghBMgAtMDxIAAhMIAMAAIAAANQACgGAHgEIAGgDIAIgBIAFABIAAAMIgIgBIgIABQgEACgDADIgEAGQgBAEAAAFIAAAsgA0tDxIAAguIgBgIQgCgEgDgDQgCgDgDgBQgEgBgEAAQgEAAgEABIgHAEQgDADgBAEQgCAEAAAFIAAAtIgLAAIAAhpIALAAIAAAqQADgGAGgEIAGgDIAIgBQAHAAAFACQAFACADAEQAEAEACAFQABAFAAAHIAAAwgAPbAlQgHgDgEgGQgGgFgCgIQgDgHgBgIQABgHADgIQACgHAGgFQAEgGAHgDQAIgDAIAAIAKABIAIADQAFAEAEAGIAAgpIALAAIAABnIgLAAIAAgLQgEAGgFADIgIADQgFACgFAAQgIAAgIgDgAPggaQgFACgEAEQgDAEgCAGQgCAFAAAFQAAAGACAFQACAGADAEQAEAEAFACQAFACAGAAQAFAAAGgCQAFgCAEgEQAEgEACgGQACgFAAgGQAAgFgCgFQgCgGgEgEQgEgEgFgCQgGgCgFAAQgGAAgFACgAM6AlQgFgCgFgEQgEgEgDgGQgCgFAAgIIAAgtIALAAIAAAsQABAFABAEQABAEADADQADADAEABQAEACAEAAQAEAAAEgCQAEgBADgDQADgDABgEQABgEABgFIAAgsIALAAIAAAsQAAAIgCAGQgDAGgFAEQgEAEgFACQgHACgHAAQgGAAgGgCgAOsAlIAAgsQAAgFgCgDQgBgEgDgDQgDgDgDgBQgDgBgGAAQgEAAgEABIgHAEIgEAHQgCAEAAAFIAAArIgLAAIAAhKIALAAIAAANIAEgFIAFgFIAIgDIAIgBQAGAAAFACQAFACAEAEQAEAEACAFQABAFABAHIAAAugAMBAlIAAg/IgNAAIAAgLIANAAIAAgGQAAgIACgFQACgEADgEQAFgEAKAAIAHABIAAAKIgIgBQgFAAgDADQgCAEAAAHIAAAHIAOAAIAAALIgOAAIAAA/gAJEiGQgMgFgFgEIAFgJQAIAFAGADQAHACAKAAIAKgBQAFgBADgDQAEgDADgIIABgNIAAgGQgDAGgGADIgIADQgEACgGAAQgHAAgIgDQgHgDgFgFQgFgGgDgHQgDgHAAgJQAAgIADgIQADgHAFgFQAFgFAHgDQAIgDAHAAIAKABIAIADQAGAEADAFIAAgLIALAAIAAA/QAAAQgBAGIgEAJQgDAEgEADQgEAEgIACQgGACgHAAQgOgBgFgCgAJMjmQgGACgDAEQgEAEgCAGQgCAFAAAGQAAAGACAGQACAFAEAEIAJAGQAFACAFAAQAGAAAGgCIAIgGQAEgEADgFQACgGAAgGQAAgGgCgFQgDgGgEgEQgEgEgEgCQgGgCgGAAQgFAAgFACgAAYilQgHgDgFgFQgGgGgCgHQgDgIAAgIQAAgJADgHQACgHAGgGQAFgFAHgDQAIgDAHAAIAKABIAIADQAGAEADAFIAAgoIALAAIAABpIgLAAIAAgMQgDAGgGAEIgIADQgEABgGAAQgHAAgIgDgAAcjmQgEACgFAFQgDAEgCAFQgCAGAAAGQAAAGACAGQACAFADAEQAFAEAEACQAGADAFAAQAGAAAGgDQAFgCAEgEQADgEADgFQACgGAAgGQAAgGgCgGQgDgFgDgEQgEgFgFgCQgGgCgGAAQgFAAgGACgAh2ilQgIgDgEgFQgGgGgCgHQgEgIAAgIQAAgJAEgHQACgHAGgGQAEgFAIgDQAHgDAIAAIAKABIAIADQAFAEAEAFIAAgLIALAAIAABMIgLAAIAAgMQgEAGgFAEIgIADQgFABgFAAQgIAAgHgDgAhyjmQgFACgEAFQgDAEgCAFQgCAGAAAGQAAAGACAGQACAFADAEQAEAEAFACQAFADAGAAQAGAAAFgDQAFgCAEgEQAEgEACgFQACgGAAgGQAAgGgCgGQgCgFgEgEQgEgFgFgCQgFgCgGAAQgGAAgFACgAk8ilQgIgDgEgFQgGgGgCgHQgEgIAAgIQAAgJAEgHQACgHAGgGQAEgFAIgDQAHgDAIAAIAKABIAIADQAFAEAEAFIAAgLIALAAIAABMIgLAAIAAgMQgEAGgFAEIgIADQgFABgFAAQgIAAgHgDgAk4jmQgFACgEAFQgDAEgCAFQgCAGAAAGQAAAGACAGQACAFADAEQAEAEAFACQAFADAGAAQAGAAAFgDQAFgCAEgEQAEgEACgFQACgGAAgGQAAgGgCgGQgCgFgEgEQgEgFgFgCQgFgCgGAAQgGAAgFACgAnMilQgIgDgEgFQgGgFgCgHQgDgIAAgIIAAgBQAAgJADgIQACgHAGgFQAEgGAIgCQAGgDAJAAQAHAAAHADQAHACAEAGQAEAFADAHQACAHAAAHIAAAFIg9AAQAAAGACAGQACAFADADQAFAEAEACQAFACAGAAQAIAAAFgDQAFgCAFgGIAHAHQgCAEgFADIgHAEIgIACIgIABQgJAAgGgDgAnHjmIgIAFQgEADgCAEQgCAEAAAEIAwAAQABgEgCgEIgFgHQgDgDgEgCQgFgCgEAAQgGAAgEACgAIXikIAAguQAAgFgBgEQgCgEgCgCQgDgDgEgBQgDgCgFAAQgEAAgEACIgHAEIgFAHQgCAEAAAEIAAAuIgKAAIAAhMIAKAAIAAANIAFgGIAFgEIAHgDIAIgBQAGAAAGACQAFACADAEQAEADADAGQABAFAAAGIAAAxgAHGikIAAhMIALAAIAABMgAGqikIAAguQAAgFgCgEQgBgEgCgCQgDgDgEgBQgDgCgFAAQgEAAgFACIgGAEIgFAHQgCAEABAEIAAAuIgLAAIAAhMIALAAIAAANIADgGIAGgEIAHgDIAIgBQAHAAAFACQAFACAEAEQAEADACAGQABAFAAAGIAAAxgAFaikIAAguQAAgFgCgEQgBgEgDgCQgDgDgDgBQgDgCgGAAQgEAAgEACIgHAEIgEAHQgCAEAAAEIAAAuIgLAAIAAhMIALAAIAAANIAEgGIAFgEIAIgDIAIgBQAGAAAFACQAFACAEAEQAEADACAGQABAFABAGIAAAxgAEJikIAAhMIALAAIAABMgADbikIgUg4IgTA4IgHAAIgbhMIALAAIAUA3IASg3IAJAAIASA3IAUg3IALAAIgbBMgAgwikIAAhMIALAAIAAANQACgHAHgDIAGgDIAIgBIAEAAIAAAMIgHgBIgIACQgDABgDADIgFAHQgCAEABAFIAAAsgAi1ikIgSg4IgTA4IgIAAIgbhMIALAAIAUA3IASg3IAIAAIATA3IAUg3IAMAAIgcBMgAn8ikIAAguIgBgJQgBgEgDgCQgDgDgDgBQgDgCgEAAQgFAAgEACIgGAEQgDADgCAEQgBAEgBAEIAAAuIgLAAIAAhpIALAAIAAAqQADgHAGgDIAHgDIAIgBQAHAAAEACQAFACAEAEQAEADACAGQABAFAAAGIAAAxgApkikIAAheIgdAAIAAgLIBFAAIAAALIgdAAIAABegABdjHIAAgKIAtAAIAAAKgAHGj/QgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgCgCgAEJj/QgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgCgCg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.7,-27,275.5,54.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003D6F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.9,-124.9,300,250);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27466D").s().p("AytBiIAAjDMAlbAAAIAADDg");
	this.shape.setTransform(127.3,9.9,1,1,0,0,0,7.4,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239.7,19.8);


(lib.button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADlAjIgHgCIgGgDIgFgFIgFgFIgEgGIgCgHIAAgHIAAgGIACgHIAEgGIAFgFIAFgEIAGgEIAHgCIAIgBIAHABIAHACIAGAEIAGAEIAEAFIAEAGIACAHIABAGIgBAHIgCAHIgEAGIgEAFIgGAFIgGADIgHACIgHABIgIgBgADkgTQgEACgDADQgDADgBAEQgCAEAAADQAAAEACAEQABAEADADQADADAEACQAEACAFAAQAEAAAFgCQADgCADgDIAFgHQACgEgBgEIgBgHIgFgHQgDgDgDgCQgFgCgEAAQgFAAgEACgAhjAjIgGgCIgGgDIgGgFIgEgFIgEgGIgDgHIAAgHIAAgGIADgHIAEgGIAEgFIAGgEIAGgEIAGgCIAIgBIAHABIAIACIAGAEIAFAEIAFAFIADAGIACAHIABAGIgBAHIgCAHIgDAGIgFAFIgFAFIgGADIgIACIgHABIgIgBgAhkgTQgDACgEADQgCADgCAEIgBAHQgBAEACAEQACAEACADQAEADADACQAFACAEAAQAEAAAFgCQAEgCADgDIAEgHQACgEAAgEQAAgDgCgEIgEgHQgDgDgEgCQgFgCgEAAQgEAAgFACgAgaAiQgGgDgDgDIgEgEIgCgFIgDgGIAAgHIAAgnIAPAAIAAAlIABAIIAEAFQABACADABIAGABIAFgBQAEgBABgCIADgFIABgIIAAglIAOAAIAAAnIgBAHIgCAGIgDAFIgEAEIgDADIgEADQgFABgGAAQgGAAgGgBgAFeAiIAAhDIAwAAIAAAOIghAAIAAANIAeAAIAAALIgeAAIAAAPIAhAAIAAAOgAFFAiIgPgXIgKAAIAAAXIgQAAIAAhDIAdAAQAGAAADABQAFACADADQAEADACAEQABAFAAAFIAAAGIgDAEIgEAEIgFADIARAbgAEsgBIAMAAIAEAAIADgCIACgDIABgEQAAgEgDgDQgCgCgEAAIgNAAgACvAiIAAgoIgXAfIgWgfIAAAoIgOAAIAAhDIANAAIAXAhIAYghIAOAAIAABDgAAoAiIAAg1IgTAAIAAgOIA1AAIAAAOIgTAAIAAA1gAjrAiIAAhDIAaAAIAIAAIAIACIAHADIAFAEIAEAGIADAGIABAGIABAGIgBAHIgBAHIgDAGIgEAFIgFAEIgGADIgIACIgJAAgAjcAUIALAAQAFAAAFgBQAEgCADgDQADgCAAgEIABgIIgBgHQAAgEgDgCQgDgDgEgCQgFgBgGAAIgKAAgAkGAiIgigqIAAAqIgOAAIAAhDIANAAIAhApIAAgpIAQAAIAABDgAlVAiIAAhDIAQAAIAABDgAmNAiIAAhDIAtAAIAAAOIgeAAIAAAOIAcAAIAAAMIgcAAIAAAbg");
	this.shape.setTransform(55.3,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgagtIA1AtIg1Aug");
	this.shape_1.setTransform(107.6,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED8030").s().p("AolBbQgbAAgTgSQgTgSAAgaIAAg5QAAgZATgTQATgSAbAAIRLAAQAbAAATASQATATAAAZIAAA5QAAAagTASQgTASgbAAg");
	this.shape_2.setTransform(61.5,9.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.1,18.4);


(lib.out2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwyFLIAAi3MAiWAAFIAAC4g");
	mask.setTransform(112.5,33.7);

	// Layer 2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(115.1,71.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({y:57.4},10).wait(51));

	// <Path>
	this.instance_1 = new lib.Path("synched",0);
	this.instance_1.setTransform(108.9,57.2,0.918,0.929,0,0,0,113.3,9.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({startPosition:0,_off:false},0).to({alpha:0.75},10).wait(61));

	// ltr_e
	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(220.5,26.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(1).to({x:219.6},0).wait(1).to({x:218.7},0).wait(1).to({x:217.9},0).wait(1).to({x:217},0).wait(1).to({x:216.2},0).wait(1).to({x:215.3},0).wait(1).to({x:214.5},0).wait(80));

	// ltr_n
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(189.9,26.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(1).to({x:189.3},0).wait(1).to({x:188.8},0).wait(1).to({x:188.2},0).wait(1).to({x:187.6},0).wait(1).to({x:187},0).wait(1).to({x:186.5},0).wait(1).to({x:185.9},0).wait(82));

	// ltr_i
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(165.7,26.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({x:165.1},0).wait(1).to({x:164.6},0).wait(1).to({x:164},0).wait(1).to({x:163.4},0).wait(1).to({x:162.8},0).wait(1).to({x:162.3},0).wait(1).to({x:161.7},0).wait(84));

	// ltr_h
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(142,26.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(1).to({x:141.3},0).wait(1).to({x:140.6},0).wait(1).to({x:139.9},0).wait(1).to({x:139.1},0).wait(1).to({x:138.4},0).wait(1).to({x:137.7},0).wait(1).to({x:137},0).wait(86));

	// ltr_s
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(112.3,26.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(1).to({x:111.7},0).wait(1).to({x:111.1},0).wait(1).to({x:110.5},0).wait(1).to({x:110},0).wait(1).to({x:109.4},0).wait(1).to({x:108.8},0).wait(1).to({x:108.3},0).wait(88));

	// ltr_t
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(87.4,26.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).wait(1).to({x:86.6},0).wait(1).to({x:85.9},0).wait(1).to({x:85.2},0).wait(1).to({x:84.5},0).wait(1).to({x:83.8},0).wait(1).to({x:83.1},0).wait(1).to({x:82.4},0).wait(90));

	// ltr_u
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(59.1,26.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).wait(1).to({x:58.2},0).wait(1).to({x:57.3},0).wait(1).to({x:56.5},0).wait(1).to({x:55.6},0).wait(1).to({x:54.8},0).wait(1).to({x:53.9},0).wait(1).to({x:53.1},0).wait(92));

	// ltr_o
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(25.2,26.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({x:24.4},0).wait(1).to({x:23.7},0).wait(1).to({x:22.9},0).wait(1).to({x:22.2},0).wait(1).to({x:21.5},0).wait(1).to({x:20.7},0).wait(1).to({x:20},0).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

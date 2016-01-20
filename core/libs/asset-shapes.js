(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
	manifest: []
};



// symbols:



(lib.triangle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZArICAiDIAzCyg");
	this.shape.setTransform(-1.1,-1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-10,18.2,18);


(lib.star_10 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA7IgzAkIASg+Ig5AAIAngfIglgdIA0gBIgVg4IA1AgIAQgyIAOAuIAsggIgQA+IA4ABIgiAZIAoAbIg/ADIASBCIgrggIgMAng");
	this.shape.setTransform(0.6,-1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-11.3,20.8,20.7);


(lib.star = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA2Ig+AsIAXhMIg8gtIBMgBIAYhLIAXBLIBMACIg8AtIAUBNg");
	this.shape.setTransform(0.4,-1.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-11.3,20,20);


(lib.square = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-10,-10,20,20);
	this.shape.setTransform(10,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.reverse_blur_circle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0,0.008,0.886,1,1,1],0,0,0,0,0,11).s().de(-10.8,-10.8,21.7,21.7);
	this.shape.setTransform(0,0,0.922,0.922);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.kirakira2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAcQgMgcgRAAQARAAAMgcQAKgcAAgnQAAAnALAcQANAcAQAAQgQAAgNAcQgLAdAAAnQAAgngKgdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-9.6,8.1,19.3);


(lib.kirakira = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAcQgdgcgoAAQAoAAAdgcQAcgdAAgoQAAAoAdAdQAdAcAoAAQgoAAgdAcQgdAeAAAoQAAgogcgeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-9.8,19.8,19.8);


(lib.heart = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+AfIgOgUQgHgLgEgIIgIgUQgEgLAAgJQABgMAFgJQAEgJAHgGQAJgGAJgDQAJgCAJAAQALgBAJAEQAHADAHAFQAEAFAEAGIAEAJIAFgJQAEgGAFgFQAGgFAHgDQAJgEALABQAKAAAJACQAJAEAIAFQAHAGAFAJQAFAJAAALQgBAJgDALQgCAKgGAKQgEAJgHAKIgOAUIghAlIgeAdQgpgogVgZg");
	this.shape.setTransform(0,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-8.8,20,19.4);


(lib.flower = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBXQgLgLAAgQIAAgMIgBAAIgBAMQAAARgLALQgKALgPAAQgQAAgMgLQgNgMAAgPQAAgMAIgLQAIgKAMgEIALgEIAAgCIgBgBIgLAEIgMABQgRAAgLgKQgKgKAAgOQAAgRAKgLQALgMAPAAQAJAAAJAEQAJAFAGAHIAHAKIABgBIACgBIgHgKQgEgFgCgGQgCgHAAgGQAAgQALgKQALgKAPAAQAQAAALAKQAKAKAAAQQAAAHgBAGQgCAGgEAFIgHAKIACABIABABIAHgKQAGgHAIgFQAJgEAJAAQAQAAAKAMQALALAAARQAAAOgLAKQgKAKgRAAIgMgBIgLgEIgBACIAAABIALAEQAMAFAIAKQAHAKAAAMQAAAPgMAMQgMALgQAAQgPAAgLgMgAgXgRQgKAKAAAMQAAAPAKAKQAKAKANAAQAOAAAKgKQAKgKAAgPQAAgMgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape.setTransform(0.1,-0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.5,20.5,20);


(lib.circle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().de(-10.8,-10.8,21.7,21.7);
	this.shape.setTransform(0,0,0.922,0.922);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.blur_circle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,11).s().de(-10.8,-10.8,21.7,21.7);
	this.shape.setTransform(0,0,0.922,0.922);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


// stage content:
(lib.assetshapes = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.triangle();
	this.instance.setTransform(226.3,21.4,1,1,0,0,0,10,10);

	this.instance_1 = new lib.square();
	this.instance_1.setTransform(192.9,11.3,1,1,0,0,0,10,10);

	this.instance_2 = new lib.kirakira2();
	this.instance_2.setTransform(171.4,11.9);

	this.instance_3 = new lib.kirakira();
	this.instance_3.setTransform(151.6,11.9);

	this.instance_4 = new lib.flower();
	this.instance_4.setTransform(131.1,11.9);

	this.instance_5 = new lib.star_10();
	this.instance_5.setTransform(110.3,11.9);

	this.instance_6 = new lib.star();
	this.instance_6.setTransform(90.3,11.9);

	this.instance_7 = new lib.circle();
	this.instance_7.setTransform(81.5,21.4,1,1,0,0,0,10.8,10.8);

	this.instance_8 = new lib.reverse_blur_circle();
	this.instance_8.setTransform(61.5,21.4,1,1,0,0,0,10.8,10.8);

	this.instance_9 = new lib.blur_circle();
	this.instance_9.setTransform(41.5,20.8,1,1,0,0,0,10.8,10.8);

	this.instance_10 = new lib.heart();
	this.instance_10.setTransform(21.2,21.8,1,1,0,0,0,11.1,12.3);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,200,224.3,21.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
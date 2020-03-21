let cvsWrapper = null;
let x1, y1;
let v_x, v_y;
let a;
let tri_w, tri_h;
let tri_ang;

function preload() {

}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    
    // setup code below
    tri_w = 50;
	tri_h = 40;
	v_x = 0;
	v_y = 0;
	a = 10;
	x1 = width/2 - tri_w/2;
	y1 = (height/2 - tri_h/2)/2;
    
}

function draw() {
    // Render function (called per frame.)
    background(220);
    fill("red");
	v_y += a * 0.01;
	x1 += v_x;
	y1 += v_y;
	tri_ang += 0.035;
	translate(x1, y1);
	rotate(tri_ang);
	// triangle(x1,y1,x1+tri_w,y1,x1+tri_w/2,y1-tri_h);
	triangle(0, 0, tri_w, 0, tri_w/2, -tri_h);
    
    
    
}

function keyPressed() {
if (keyCode === 32) {
		v_y = -2;   
		tri_ang = - PI/4;
}
}
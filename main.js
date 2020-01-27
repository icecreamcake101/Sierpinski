let trpt;
let coord;
let fps // no of frames 

fps=5;



function setup() {

    createCanvas(500, 500);
    background(0,0,0); // changes background of canvas
    stroke(255, 255, 255);  // changes colour of the dots
    noFill();

    coord = [
        createVector(250, 50),    // co ordinates of the initial triangle
        createVector(50, 450),    // change to fit into any triangle
        createVector(450, 450)
    ];

   
    for (let A of coord) {
        ellipse(A.x, A.y, 10);
    }

    trpt = createVector(random(width), random(height));

}

function draw() {

    fill(255);
    for (let i = 0; i < fps ; i++) {
        ellipse(trpt.x, trpt.y, 1);
        let rno = floor(random(coord.length));
        let rcoord = coord[rno];
        trpt.add(rcoord).div(2);
    }

}
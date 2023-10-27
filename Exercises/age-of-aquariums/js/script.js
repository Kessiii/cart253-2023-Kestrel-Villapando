/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let customCursor;

/**
 * Description of preload
*/
function preload() {
  customCursor = loadImage('assets/images/hand.png')
  customCursor.resize(10, 0);
}

//let us set up our fishes!
let school = []; //setting up an empty array
let schoolSize = 9;


/**
 * Description of setup
*/
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  noCursor();

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

//CreateFish(x, y)
//Creating a new Javascript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 1,
  };
  return fish;
}


/**
 * Moves and Display the fishes & draws the background
*/
function draw() {
  background (0);

  image(customCursor, mouseX, mouseY);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

//moveFish(fish)
//This chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.5) {

  // Adding lerp to gradually change the velocity
  let targetVX = random(-fish.speed, fish.speed);
  let targetVY = random(-fish.speed, fish.speed);
    fish.vx = lerp(fish.vx, targetVX, 0.2);
    fish.vy = lerp(fish.vy, targetVY, 0.2);
  }

  //Smooth movements with ease factor
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy; 

  //Constrain the fish to the Canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

//displayFish(fish)
//Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed() {
  let fish = createFish(mouseX, mouseY);

}

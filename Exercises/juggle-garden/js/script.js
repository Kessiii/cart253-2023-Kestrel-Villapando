/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
let gravityForce = 0.0025;
let balls = [];
let numBalls = 20;
let paddle;
let paddleImage; // Variable to hold the custom paddle image
let ballImage; 
let gameIsOver = false; //Variable to track game state
let survivalMessage = "You survived"; // End screen message

function preload() {
    // Load the custom paddle image
    paddleImage = loadImage('assets/images/running.png');
    ballImage = loadImage('assets/images/meteor.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle(paddleImage);
    let ball = new Ball(random(0, width), random(-400, -100), ballImage);


    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y, ballImage); // Pass the ballImage to the Ball constructor
        balls.push(ball); // Push the ball object, not the image
    }
}

function draw() {
    background(25,25,112);

    paddle.move();
    paddle.display();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();

            if (paddle,hits(ball)) {
                //Ball touches the paddle
                gameIsOver = true; // Set game state to over
            }
        }
    }

    if (gameIsOver) {
        // Display end screen with the "You Survived" message
        textAlign(CENTER,CENTER);
        textSize(48);
        fill(255);
        text(survivalMessage, width / 2, height / 2);
    }
}
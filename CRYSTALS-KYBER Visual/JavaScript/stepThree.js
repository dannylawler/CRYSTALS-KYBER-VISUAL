function stepThreeSetup() {
    //Clear Step Two Stuff
    background(220);
    drawAliceAndBob();
    drawKeyContainers();

    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');
    noStroke();

    //Draw private and public keys
    text("(4 , 9)", width - 100, height / 2 + 205);
    text("2", width - 100, height / 2 + 255);
    text("x", 100, height / 2 + 205);
    text("x", 100, height / 2 + 255);

    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    //Redraw the ciphertext in the new position
    text("Ciphertext (u, v) = (13, 3)", width * 0.77, height * 0.65);
    text("Message (m) = 1", width * 0.2, height * 0.65);
}

function drawStepThreeVariablesPosition1() {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');

    let formula = "m\u2099 = (v - u * s) % q"; // Public key formula
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(formula);
    let formulaHeight = 32; // Approximate for size 24

    fill(255, 255, 200); // Light yellow box
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2 - 100,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX,
        formulaHeight + boxPaddingY,
        8
    );

    noStroke();
    fill(0);
    text(formula, width / 2, height - 380);
}

function drawStepThreeVariablesPosition2() {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');
    noStroke();

    fill(220);
    rect(
        width * 0.25,
        height * 0.2,
        500,
        200
    );

    let solution = "6 = (3 - 13 * 2) % 17"; // Solution for m
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(solution);
    let formulaHeight = 32; // Approximate for size 24

    fill(255, 255, 200); // Light yellow box
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2 - 100,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX,
        formulaHeight + boxPaddingY,
        8
    );

    noStroke();
    fill(0);

    // Draw the solution
    text(solution, width / 2, height - 380);

    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    //Redraw the ciphertext in the new position
    text("Message w/ Errors (m\u2099) = 6", width * 0.77, height * 0.7);

    //Code For Arrow
    // Find the position of the '6' in the solution equation
    let solutionX = width / 2;
    let solutionY = height - 380;
    let sixOffset = textWidth("6");
    let sixX = solutionX - (textWidth(solution) / 2) + sixOffset / 2 - 39;
    let sixY = solutionY + 16; // Adjust for vertical alignment

    // Arrow end: left of "Message w/ Errors (mₙ) = 6"
    let msgText = "Message w/ Errors (m\u2099) = 6";
    let msgX = width * 0.77;
    let msgY = height * 0.7;
    let arrowEndX = msgX - textWidth(msgText) / 2 - 18;
    let arrowEndY = msgY - 5;

    // Midpoint: straight down from the '6'
    let midY = arrowEndY;

    // Draw the arrow
    stroke(120, 60, 200);
    strokeWeight(3);
    noFill();

    // Down from '6'
    line(sixX, sixY, sixX, midY);

    // Right to message (stop before arrowhead)
    let arrowSize = 14;
    let arrowExtension = 10; // How much further you want the arrow to go
    let lineEndX = arrowEndX - arrowSize + arrowExtension;
    line(sixX, midY, lineEndX, arrowEndY);

    // Arrowhead at the message, pointing right and further out
    let angle = 0; // Arrow points right
    push();
    translate(arrowEndX + arrowExtension, arrowEndY);
    rotate(angle);
    fill(120, 60, 200);
    noStroke();
    triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    pop();

    strokeWeight(1);
}

function drawStepThreeVariablesPosition3() {
    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    text("m\u2099 % q closer to 0: m = 0", width * 0.5, height * 0.45);
    text("m\u2099 % q closer to q / 2: m = 1", width * 0.5, height * 0.5);
}

function drawStepThreeVariablesPosition4() {
    noStroke();
    fill(220);
    rect(
        width * 0.6,
        height * 0.6,
        310,
        100
    );

    noStroke();
    fill(220);
    rect(
        width * 0.25,
        height * 0.3737,
        500,
        200
    );

    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    text("6 is closer to 8 than 0", width * 0.5, height * 0.45);
    text("The message (m) is 1!", width * 0.5, height * 0.5);
    text("Message (m) = 1", width * 0.8, height * 0.65)

    noStroke();
}
function stepTwoSetup() {
    //Clear Step One Stuff
    noStroke();
    fill(220);
    rect(
        width * 0.25,
        height * 0.2,
        500,
        500
    );
    fill(220);
    rect(
        width * 0.6,
        height * 0.8,
        344,
        100
    )
}

function drawStepTwoVariablesPosition1() {
    // Write the variables for Step Two
    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');
    text("Random Value: r = 3", width / 2, height - 400);
    text("Error One: e\u2081 = 1", width / 2, height - 380);
    text("Error Two: e\u2082 = 2", width / 2, height - 360);
    text("Modulus Wrapper: q = 17", width / 2, height - 340);
}

function drawStepTwoVariablesPosition2() {
    // Move the Variables and draw the message
    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');
    text("Message (m) = 1", width * 0.2, height * 0.65);

    // Clear the variables to move them to the left
    noStroke();
    fill(220);
    rect(
        width * 0.25,
        height * 0.2,
        500,
        200
    );

    //Redraw the variables in the new position
    fill(0); 
    text("Random Value: r = 3", width / 2 - 175, height - 400);
    text("Error One: e\u2081 = 1", width / 2 - 175, height - 380);
    text("Error Two: e\u2082 = 2", width / 2 - 175, height - 360);
    text("Modulus Wrapper: q = 17", width / 2 - 175, height - 340);

    fill(0);
    textSize(20);
    textAlign(CENTER);
    textFont('Cooper');
    noStroke();

    //Esablish dimensions for the formulas
    let formula1 = "u = (A * r + e\u2081) % q"; 
    let formula2 = "v = (b * r + e\u2082 + m * (q / 2)) % q"; 
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(formula1);
    let formulaHeight = 32; 

    //Create the box for the formulas
    fill(255, 255, 200); 
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2 - 60,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX + 125,
        formulaHeight + boxPaddingY + 25,
        8
    );

    //Draw the formulas
    noStroke();
    fill(0);
    text(formula1, width / 2 + 100, height - 380);
    text(formula2, width / 2 + 100, height - 350);
}

function drawStepTwoVariablesPosition3() {
    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    //Write the ciphertext under the message
    let cipherText = "Ciphertext (u, v) = (13, 3)";
    let cipherX = width * 0.2;
    let cipherY = height * 0.70;
    text(cipherText, cipherX, cipherY);

    fill(0);
    textSize(20);
    textAlign(CENTER);
    textFont('Cooper');

    //Establish dimensions for the formula solutions
    let formula1 = "u = (A * r + e\u2081) % q"; 
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(formula1);
    let formulaHeight = 32; 

    //Draw the box for the formula solutions
    fill(255, 255, 200); 
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2 - 60,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX + 125,
        formulaHeight + boxPaddingY + 25,
        8
    );

    //Draw the formula solutions
    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    textFont('Cooper');


    let solution1 = "13 = (4 * 3 + 1) % 17"; 
    let solution2 = "3 = (9 * 3 + 2 + 1 * (17 / 2)) % 17"; 
    let solution1Y = height - 383;
    let solution2Y = height - 353;
    let solutionX = width / 2 + 101;
    text(solution1, solutionX, solution1Y);
    text(solution2, solutionX, solution2Y);

    //Code for 3 Arrow
    // Draw an arrow from the ciphertext to the '3' in the equation
     // Find the position of the '3' in solution2
    let threeOffset = textWidth("3 = ");
    let threeX = solutionX - (textWidth(solution2) / 2) + threeOffset - 28;
    let threeY = solution2Y + 15; // Adjust for vertical alignment

    // Arrow end (center left of ciphertext)
    let arrowEndX = cipherX - textWidth(cipherText) / 2 + 225;
    let arrowEndY = cipherY - 5;

    // Midpoint: straight down from the '3'
    let midY = arrowEndY;

    stroke(120, 60, 200);
    strokeWeight(3);
    noFill();

    // Draw straight down from '3'
    line(threeX, threeY, threeX, midY);
    // Draw straight left to ciphertext
    let lineEndX = arrowEndX + 14; // 14 is arrowSize
    line(threeX, midY, lineEndX, arrowEndY);

    // Draw the arrowhead at the ciphertext
    let angle = PI; // Arrow points left
    let arrowSize = 14;
    push();
    translate(arrowEndX, arrowEndY);
    rotate(angle);
    fill(120, 60, 200);
    noStroke();
    triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    pop();

    //Code for 13 Arrow
    // Find the position of the '13' in solution1
    let thirteenOffset = textWidth("13");
    let thirteenX = solutionX - (textWidth(solution1) / 2) + thirteenOffset / 2;
    let thirteenY = solution1Y - 25; // Adjust for vertical alignment

    // Arrow end (center left of ciphertext)
    let arrowEndX_13 = cipherX - textWidth(cipherText) / 2 - 10;

    // Midpoints: up from 13, then left, then down to ciphertext
    let midY_up = thirteenY - 5; // how far up to go from 13
    let midX_left = arrowEndX_13 + 430; // how far left to go before going down

    stroke(120, 60, 200); // Red arrow for 13
    strokeWeight(3);
    noFill();

    // Up from 13
    line(thirteenX, thirteenY, thirteenX, midY_up);
    // Left to above ciphertext
    line(thirteenX, midY_up, midX_left, midY_up);
    // Down to ciphertext
    line(midX_left, midY_up, midX_left, midY);

    strokeWeight(1);
}

function drawStepTwoVariablesPosition4() {
    //Clear the ciphertext off the canvas to move it
    noStroke();
    fill(220);

    rect(
        width * 0.43,
        height * 0.25,
        20,
        500
    )
    
    rect(
        width * 0.45,
        height * 0.416,
        50,
        300
    )

    rect(
        width * 0.43,
        height * 0.25,
        300,
        28.2
    )

    rect(
        width * 0.125,
        height * 0.655,
        500,
        50
    );

    fill(0); 
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    //Redraw the ciphertext in the new position
    text("Ciphertext (u, v) = (13, 3)", width * 0.77, height * 0.65);
}
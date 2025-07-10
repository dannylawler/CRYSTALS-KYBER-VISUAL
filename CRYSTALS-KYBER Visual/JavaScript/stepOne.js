function drawStepOneVariablesPosition1() {
    fill(0); // Black for text
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');
    text("Random Seed: A = 4", width / 2, height - 400);
    text("Private Key: s = 2", width / 2, height - 380);
    text("Random Error: e = 1", width / 2, height - 360);
    text("Modulus Wrapper: q = 17", width / 2, height - 340);
}

function drawStepOneVariablesPosition2() {
    background(220);
    drawAliceAndBob();
    drawKeyContainers();

    fill(0); // Black for text
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');

    text("Random Seed: A = 4", width / 2 - 100, height - 400);
    text("Private Key: s = 2", width / 2 - 100, height - 380);
    text("Random Error: e = 1", width / 2 - 100, height - 360);
    text("Modulus Wrapper: q = 17", width / 2 - 100, height - 340);

    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');

    let formula = "b = A * s + e"; // Public key formula
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(formula);
    let formulaHeight = 32; // Approximate for size 24

    fill(255, 255, 200); // Light yellow box
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX,
        formulaHeight + boxPaddingY,
        8
    );

    noStroke();
    fill(0);
    text(formula, width / 2 + 100, height - 380);
}

function drawStepOneVariablesPosition3() {
    noStroke();
    fill(220);

    let formula = "b = A * s + e"; // Public key formula
    let formulaX = width / 2 + 100;
    let formulaY = height - 380;
    let boxPaddingX = 20;
    let boxPaddingY = 10;
    let formulaWidth = textWidth(formula);
    let formulaHeight = 32; // Approximate for size 24

    //Clear the box of any text
    fill(255, 255, 200); 
    stroke(0);
    rect(
        formulaX - formulaWidth / 2 - boxPaddingX / 2,
        formulaY - formulaHeight / 2 - boxPaddingY / 2 - 6,
        formulaWidth + boxPaddingX,
        formulaHeight + boxPaddingY,
        8
    );

    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');
    noStroke();

    text("9 = 4 * 2 + 1", width / 2 + 100, height - 380);
    text("(4 , 9)", width - 100, height / 2 + 205);
    text("2", width - 100, height / 2 + 255);

    // Arrow path: straight down, then straight right
    let startX = formulaX + 20;
    let startY = formulaY + 17;
    let midX = startX;
    let midY = height / 2 + 250;
    let endX = width - 140;
    let endY = midY;

    stroke(120, 60, 200);
    strokeWeight(3);
    noFill();

    //Code For 2 Arrow
    let arrowSize = 14;
    // Draw downwards
    line(startX, startY, midX, midY);
    // Shorten the rightward line so it doesn't go under the arrowhead
    let lineEndX = endX - arrowSize;
    line(midX, midY, lineEndX, endY);

    // Draw the arrowhead at the end
    // Draw the arrowhead at the end of the rightwards line
    push();
    translate(endX, endY);
    rotate(0); // Arrow points right
    fill(120, 60, 200);
    noStroke();
    triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    pop();

    //Code for 4 Arrow
    // Draw downwards
    stroke(220, 0, 0);
    line(startX - 40, startY, midX - 40, midY - 50);
    // Shorten the rightward line so it doesn't go under the arrowhead
    line(midX - 40, midY - 50, lineEndX, endY - 50);

    // Draw the arrowhead at the end
    // Draw the arrowhead at the end of the rightwards line
    push();
    translate(endX, endY - 50);
    rotate(0); // Arrow points right
    fill(220, 0, 0)
    noStroke();
    triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    pop();

    //Code for 9 Arrow
    stroke(220, 0, 0);
    line(startX - 80, startY, midX - 80, midY - 50);
    // Shorten the rightward line so it doesn't go under the arrowhead
    line(midX - 80, midY - 50, lineEndX, endY - 50);

    // Draw the arrowhead at the end
    // Draw the arrowhead at the end of the rightwards line
    push();
    translate(endX, endY - 50);
    rotate(0); // Arrow points right
    fill(220, 0, 0)
    noStroke();
    triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    pop();

    strokeWeight(1);
}

function drawStepOneVariablesPosition4() {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    textFont('Cooper');
    noStroke();

    text("x", 100, height / 2 + 205);
    text("x", 100, height / 2 + 255);
}
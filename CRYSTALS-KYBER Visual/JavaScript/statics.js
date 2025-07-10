function drawKeyContainers() {

    //Box dimensions and spacing
    let boxWidth = 80;
    let boxHeight = 40;
    let boxSpacing = 10;

    // Alice's Key Boxes
    let aliceBoxY = height / 2 + 180;

    // Public Key Box
    fill(255);
    stroke(0);
    rect(60, aliceBoxY, boxWidth, boxHeight, 8);
    fill(0);
    noStroke();
    textSize(14);
    textFont('Arial');
    text("Public", 30, aliceBoxY + boxHeight / 2 + 3);

    // Private Key Box
    fill(255);
    stroke(0);
    rect(60, aliceBoxY + boxHeight + boxSpacing, boxWidth, boxHeight, 8);
    fill(0);
    noStroke();
    textSize(14);
    textFont('Arial');
    text("Private", 30, aliceBoxY + boxHeight + boxSpacing + boxHeight / 2 + 3);

    // --- Bob's Key Boxes ---
    let bobBoxY = height / 2 + 180;

    // Public Key Box
    fill(255);
    stroke(0);
    rect(width - 140, bobBoxY, boxWidth, boxHeight, 8);
    fill(0);
    noStroke();
    textSize(14);
    textFont('Arial');
    text("Public", width - 30, bobBoxY + boxHeight / 2 + 3);

    // Private Key Box
    fill(255);
    stroke(0);
    rect(width - 140, bobBoxY + boxHeight + boxSpacing, boxWidth, boxHeight, 8);
    fill(0);
    noStroke();
    textSize(14);
    textFont('Arial');
    text("Private", width - 30, bobBoxY + boxHeight + boxSpacing + boxHeight / 2 + 3);
}

function drawAliceAndBob() {
    stroke(0); // Set stroke color to black

    // Draw Alice (left side)
    fill(255, 182, 193); // Light pink for Alice's body
    ellipse(100, height / 2 + 20, 80, 80); // Head
    rect(70, height / 2 + 60, 60, 100); // Body
    line(70, height / 2 + 60, 50, height / 2 + 140); // Left Arm
    line(130, height / 2 + 60, 150, height / 2 + 140); // Right Right Arm

    // Style Label for Alice
    fill(0); // Black for text
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');
    text("Alice", 100, height / 2 - 40); 

    //Style Role for Alice
    textSize(30);
    textFont('Arial');
    text("Sender", 100, height / 2 - 70); 

    // Draw Bob (right side)
    fill(135, 206, 250); // Light blue for Bob's body
    ellipse(width - 100, height / 2 + 20, 80, 80); // Head
    rect(width - 130, height / 2 + 60, 60, 100); // Body
    line(width - 130, height / 2 + 60, width - 150, height / 2 + 140); // Left Arm
    line(width - 70, height / 2 + 60, width - 50, height / 2 + 140); // Right Arm

    // Style Label for Bob
    fill(0); // Black for text
    textSize(16);
    textAlign(CENTER);
    textFont('Arial');
    text("Bob", width - 100, height / 2 - 40); 

    // Style Role for Bob
    textSize(30);
    textFont('Arial');
    text("Reciever", width - 100, height / 2 - 70); 
}
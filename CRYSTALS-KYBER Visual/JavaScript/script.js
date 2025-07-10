let canvas;
let mainContainer = document.getElementById('main-container');
let borderSize = 10;
let width = mainContainer.offsetWidth - borderSize;
let height = mainContainer.offsetHeight - borderSize;
let isDrawn = false;
let nextButtonClickCount = 0;
let typingTimeout = null;
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let startMessage = document.getElementById('start-message');
let stepMessage = document.getElementById('step-message');
let scriptElement = document.getElementById('script');

let script = 
["The session data is generated, including a\nrandom seed, the recipient's (Bob's) private\nkey, a random error value, and a modulus range.",
"Bob uses the data, A, s, and e\nto compute his public key\nwith the public key formula.",
"Once b is computed, Bob's public key (A, b)\nand private key (s) are stored so Alice\nand Bob can use them to send messages.",
"Since CRYSTALS-Kyber only requires one\ncommunication and Alice is sending a\nmessage to Bob, Alice's keys aren't needed.",
"For the encapsulation step, a random value\nand more error values are generated\nto add variance, enhancing security.",
"Alice wants to send a message (m = 1) to Bob, so\nshe uses Bob's public key (A, b) to compute\nthe ciphertext (u, v) using the encapsulation formulas.",
"The ciphertext for the message is then generated,\nessentially encoding the plaintext message into a\nsequence of characters that can be transmitted securely.",
"Alice sends the ciphertext to Bob, who\ncan now decipher it using his private\nkey with the decapsulation formula.",
"Now that Bob has the ciphertext,\nhe uses his private key (s)\nto compute the plaintext message.",
"As you can observe, m\u2099 is\nnot the fully-decrypted message,\nwhich is due to the error values added.",
"If m\u2099 % q is closer to 0, the message\nrepresents the bit 0, and if it is closer\nto q/2, the message represents the bit 1.",
"Since 6 is closer to 8 than 0, the\nmessage is revealed as the bit 1, which\nis 1 in decimal, and 1 is the correct message!"
];

function setup() {    
    // Create a canvas with the same width and height as the container
    canvas = createCanvas(width, height);

    // Attach the canvas to the main container
    canvas.parent('main-container');
    
    // Set the background color to light gray
    background(220); 

    nextButton.addEventListener('click', function() {
        if (!isDrawn && nextButtonClickCount === 0) 
        {
            background(220);
            drawAliceAndBob();
            drawKeyContainers();

            isDrawn = true;
            nextButton.textContent = "Next Animation";

            startMessage.style.display = 'none'; // Hide the start message
            stepMessage.style.display = 'block'; // Show the step one message
            scriptElement.innerHTML = null;
        }  
        else if (nextButtonClickCount === 1) {
            drawStepOneVariablesPosition1();
            scriptElement.style.display = 'block'; // Show the script element
            typeScriptText(scriptElement, script[0]); 
        }
        else if (nextButtonClickCount === 2) {
            drawStepOneVariablesPosition2();
            typeScriptText(scriptElement, script[1]); 
        }
        else if (nextButtonClickCount === 3) {
            drawStepOneVariablesPosition3();
            typeScriptText(scriptElement, script[2]);        
        }
        else if (nextButtonClickCount === 4) {
            drawStepOneVariablesPosition4();
            typeScriptText(scriptElement, script[3]); // Update the script text
        }
        else if (nextButtonClickCount === 5) {
            stepTwoSetup();
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
            }
            scriptElement.innerHTML = "";
            scriptElement.style.display = 'none';
            stepMessage.textContent = "Step 2: Encapsulation";
        }
        else if (nextButtonClickCount === 6) {
            drawStepTwoVariablesPosition1();
            scriptElement.style.display = 'block'; 
            typeScriptText(scriptElement, script[4]); // Update the script text
        }
        else if (nextButtonClickCount === 7) {
            drawStepTwoVariablesPosition2();
            typeScriptText(scriptElement, script[5]); // Update the script text
        }
        else if (nextButtonClickCount === 8) {
            drawStepTwoVariablesPosition3();
            typeScriptText(scriptElement, script[6]); // Update the script text
        }
        else if (nextButtonClickCount === 9) {
            drawStepTwoVariablesPosition4();
            typeScriptText(scriptElement, script[7]); // Update the script text
        }
        else if (nextButtonClickCount === 10) {
            stepThreeSetup();
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
            }
            scriptElement.innerHTML = "";
            scriptElement.style.display = 'none';
            stepMessage.textContent = "Step 3: Decapsulation";
        }
        else if (nextButtonClickCount === 11) {
            drawStepThreeVariablesPosition1();
            scriptElement.style.display = 'block'; // Show the script element
            typeScriptText(scriptElement, script[8]); // Update the script text
        }
        else if (nextButtonClickCount === 12) {
            drawStepThreeVariablesPosition2();
            typeScriptText(scriptElement, script[9]); // Update the script text
        }
        else if (nextButtonClickCount === 13) {
            drawStepThreeVariablesPosition3();
            typeScriptText(scriptElement, script[10]); // Update the script text
        }
        else if (nextButtonClickCount === 14) {
            drawStepThreeVariablesPosition4();
            typeScriptText(scriptElement, script[11]); // Update the script text
        }
        else if (nextButtonClickCount === 15) {
            background(220);

            startMessage.style.display = 'block'; // Show the start message
            startMessage.textContent = "Click \"Restart Animation\" to Try Again!";
            stepMessage.style.display = 'none'; // Hide the step message
            scriptElement.style.display = 'none'; // Hide the script elements

            nextButton.style.display = 'none'; // Hide the next button
        }
        nextButtonClickCount++;

        noStroke();
    });

    restartButton.addEventListener('click', function() {
        background(220);

        isDrawn = false;
        nextButton.textContent = "Start Animation";
        nextButtonClickCount = 0;
    
        startMessage.style.display = 'block'; // Show the start message
        startMessage.textContent = "Click \"Start Animation\" to Begin!";
        stepMessage.style.display = 'none'; // Hide the step one message
        scriptElement.style.display = 'none'; // Hide the script elements
        stepMessage.textContent = "Step 1: Key Generation"; // Reset step message 
        nextButton.style.display = 'block'; // Show the next button

        noStroke();
    });
}

function draw() {
    return;
}

function typeScriptText(element, text, speed = 30) {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    element.innerHTML = "";
    let i = 0;
    nextButton.disabled = true; // Disable at start

    function type() {
        if (i < text.length) {
            if (text[i] === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text[i];
            }
            i++;
            typingTimeout = setTimeout(type, speed);
        } else {
            nextButton.disabled = false; // Re-enable when done
        }
    }
    type();
}


/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/
let guestCount = 3;

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Write your code here
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

//let submitRSVPbutton = document.getElementById("rsvp-button");

const form = document.getElementById('rsvp-form');

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    let participantName = document.getElementById('rsvp-name').value;
    let participantEmail = document.getElementById('rsvp-email').value;
    let participantPlusOnes = Number(document.getElementById('rsvp-plus-ones').value);
    
    const newParticipant = document.createElement("p");
    const node = document.getElementsByClassName('rsvp-participants');
    newParticipant.innerHTML = "🎟️ " + participantName + " from California has RSVP'd";
    if (participantPlusOnes != 0){
        newParticipant.innerHTML += " with " + participantPlusOnes + " plus one(s).";
    }
    else{
        newParticipant.innerHTML += ".";
    }
    //document.getElementById("rsvp-participants").appendChild(newParticipant);
    node[0].appendChild(newParticipant);
    console.log(participantName + participantEmail + participantPlusOnes);
    console.log("submitted");
    console.log(node[0]);
    
    const guestCountText = document.getElementById('guest-count');
    guestCount += Number(1 + participantPlusOnes);
    guestCountText.innerHTML = "" + guestCount + " guests attending";
    console.log(guestCount);
    event.preventDefault();
}



form.addEventListener("submit", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/


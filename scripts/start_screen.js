
// attach an event listener to the button
document.getElementById("continue_button").addEventListener('click', continueButtonFunc);

const SUBMIT_STATES = {
    INITIAL: 0,
    LOGIN: 1,
    SIGNUP: 2,
}

const REF = {
    INITIAL: 0,
    LOGIN: 1,
    SIGNUP: 2,
}

var currentSubmitState = SUBMIT_STATES.INITIAL;

/**
 * function that handles continue button
 */
function continueButtonFunc()
{
    // check the current submit state
    switch (currentSubmitState)
    {
        case SUBMIT_STATES.INITIAL:
            // save the initial input element
            const initialUsernameEmailElmnt = document.getElementById("username_email_first");

            // get the user input
            const userInput = initialUsernameEmailElmnt.value;

            if (isInputEmail(userInput))
            {
                // check if email is connected to an existing account
                if (isEmailLinkedToAccount(userInput))
                {
                    // email is linked to an existing account
                    loginProtocol();
                }
            }
            else // input is username
            {
                // check username legality
            }
            break;
        case SUBMIT_STATES.LOGIN:
            break;
        case SUBMIT_STATES.SIGNUP:
            break;
    }
    
}

function somethingWentWrong(ref) {
    switch (ref) {
        case REF.INITIAL:
            return false;
            break;
        case REF.LOGIN:

    }
}

/**
 * function that checks whether the input is an email or not
 * @param {string} input the input to check
 * @returns boolean value that indicates whether the input is an email or not
 */
function isInputEmail(input)
{
    // return whether the input is an email
    //return input.includes("@");
    return true;
}


/**
 * 
 * @param {string} email the email
 * @returns whether the email is linked to an existing account
 */
function isEmailLinkedToAccount(email)
{
    // for the time being, just return true
    return true;
}

/**
 * 
 * @param {string} username the username
 * @returns whether the username is linked to an existing account
 */
function isUsernameLinkedToAccount(username)
{
    // for the time being, just return true
    return true;
}

function loginProtocol() {

    // clear all elements regarding signup (if they exist)
    clearSignupHTML();

    // set the current submit state to login
    //currentSubmitState = SUBMIT_STATES.LOGIN;

    // change the login div accordingly
    document.getElementById('loginDiv').innerHTML = `
  <div class="push_right" id="loginDiv">
    <input type="password" id="passwordInput" placeholder="Enter Password" />
    <span id="togglePasswordEye" style="cursor: pointer;">👁️</span>
  </div>
`;

    // attach an event listener for the password toggle eye
    document.getElementById("togglePasswordEye").addEventListener('click', function () {
        // get the password input element
        const passwordInput = document.getElementById("passwordInput");

        // get the new type it should be
        const newType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

        // set the new type
        passwordInput.setAttribute('type', newType); // Toggle between text and password type

    });
}


function clearLoginHTML() {
    return false;
}

function signupProtocol() {
    return false;
}

function clearSignupHTML() {
    return false;
}
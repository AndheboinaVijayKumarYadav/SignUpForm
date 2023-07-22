// variables to access DOM tree

const form = document.getElementById('form');
const userFirstName = document.getElementById('first_name');
const userLastName = document.getElementById('last_name');
const emailAddress = document.getElementById('user_email');
const password = document.getElementById('user_password');
const submitBtn = document.getElementById('submit');


// function expressions
// its check whether value is empty or not . if empty assigns false to isRequired or else true
const isRequired = value => value === ''? false: true;

// here it checks the length of the required value 
const isBetween = (length,min,max) => length <min || length > max ? false : true;

/* here it checks whether the given email is valid */

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/* here it checks whether the given password  has at least 8 character lenght with at least one lower case , one uppercase , one special character and one number */
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


form.addEventListener('submit', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // validating form 
    let isUsernameValid = checkUserName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid ;

    if(isFormValid){
        alert('form submitted successfully');
    }

});

// functions
const addClass = (input) => {
    input.classList.add('error');
   
}


// here we are checking the user name is empty along with length
const checkUserName = () => {
    let success = false,
        min = 3,
        max = 25;
    
    const firstName = userFirstName.value.trim();
    const lastName = userFirstName.value.trim();

    if(!isBetween(firstName.length,3,25) || !isBetween(lastName.length,3,25)){
        addClass(userFirstName);
        addClass(userLastName);
        return false;
    }
    success = true;
    return success;
}

const checkEmail = () => {
    let success = false;
    const email = emailAddress.value.trim();

    if(!isEmailValid(email)){
        addClass(emailAddress);
        return false;
    } 
    success = true;
    return true;
}

const checkPassword = () => {
    let success = false;

    const userpassword = password.value.trim();

    if(!isPasswordSecure(userpassword)){
        addClass(password);
        return false;
    }
    success = true;
    return success;
}
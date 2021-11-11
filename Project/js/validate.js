// on load add listener for submit and call validateForm function
window.addEventListener('load', function () {
  if(document.querySelector("form")) {
    document.querySelector("form").addEventListener("submit", validateForm);
  }
});

// after validation has passed submit
// create a new url and collect the form data
// add query string params to new url
// navigate window to the new url
const handleSubmit = () => {
  let myForm = document.getElementById('rform');
  let formData = new FormData(myForm);
  let queryString = new URLSearchParams(formData).toString();
  let newUrl = (new URL("confirm.html?", document.location)).href;
  newUrl = newUrl + queryString;
  window.location.href = newUrl;
}


// Validate the form
const validateForm = (e) => {
  // prevent the submission from browser default 
  e.preventDefault();

  // declare variables
  var checkev = 0;
  var userName = document.rform.userName.value;
  var password = document.rform.password.value;
  var passwordVerify = document.rform.passwordVerify.value;
  var firstName = document.rform.firstName.value;
  var lastName = document.rform.lastName.value;
  var email = document.rform.email.value;
  var phoneNumber = document.rform.phoneNumber.value;

  // check vars against validation rules //
  // if empty string add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (userName == "") {
    document.getElementById('userName').innerHTML = "Your user name is required.";
    setInvalid("userName");
    checkev = 0;
  } else {
    document.getElementById('userName').innerHTML = "";
    clearInvalid("userName");
    checkev++;
  }

  // if empty string add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (password == "") {
    document.getElementById('password').innerHTML = "Your password is required.";
    setInvalid("password");
    checkev = 0;
  } else {
    document.getElementById('password').innerHTML = "";
    clearInvalid("password");
    checkev++;
  }

  // if empty string or length is less than requirement add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (password == "" || password.length < 8) {
    document.getElementById('password').innerHTML = "Your password must be a minimum of 8 characters.";
    setInvalid("password");
    checkev = 0;
  } else {
    document.getElementById('password').innerHTML = "";
    clearInvalid("password");
    checkev++;
  }

  // if empty string add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (passwordVerify == "") {
    document.getElementById('passwordVerify').innerHTML = "Please verify password.";
    setInvalid("passwordVerify");
    checkev = 0;
  } else {
    document.getElementById('passwordVerify').innerHTML = "";
    clearInvalid("passwordVerify");
    checkev++;
  }

  // if NOT empty string, check if both passwords match, if not add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (passwordVerify != "") {
    if (passwordVerify != password) {
      document.getElementById('passwordVerify').innerHTML = "Password does not match.";
      setInvalid("passwordVerify");
      checkev = 0;
    } else {
      document.getElementById('passwordVerify').innerHTML = "";
      clearInvalid("passwordVerify");
      checkev++;
    }
  }

  // if empty string add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (firstName == "") {
    document.getElementById('firstName').innerHTML = "Your first name is required.";
    setInvalid("firstName");
    checkev = 0;
  } else {
    document.getElementById('firstName').innerHTML = "";
    clearInvalid("firstName");
    checkev++;
  }

  // if empty string add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (lastName == "") {
    document.getElementById('lastName').innerHTML = "Your last name is required.";
    setInvalid("lastName");
    checkev = 0;
  } else {
    document.getElementById('lastName').innerHTML = "";
    clearInvalid("lastName");
    checkev++;
  }

  // if empty string or format is invalid add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1  
  if (email == "" || !validateEmail(email)) {
    document.getElementById('email').innerHTML = "Email address not valid.";
    setInvalid("email");
    checkev = 0;
  } else {
    document.getElementById('email').innerHTML = "";
    clearInvalid("email");
    checkev++;
  }

  // if format invalid add error message, call setInvalid and checkev to 0
  // else clear the error message if exists and clear invalid
  // increment checkev by 1
  if (phoneNumber.length > 0 && !validatePhoneNumber(phoneNumber)) {
    document.getElementById('phoneNumber').innerHTML = "Phone number not valid.";
    setInvalid("phoneNumber");
    checkev = 0;
  } else {
    document.getElementById('phoneNumber').innerHTML = "";
    clearInvalid("phoneNumber");
    checkev++;
  }

  // all fields have been validated, if any errors checkev is 0, 
  // if all passed checkev is 9 since there are 9 validation rules being evaluated
  // call handleSubmit to send form
  // if checkev is not 9 something failed validation and set focus needs to be called
  if (checkev == 9) {
    handleSubmit();
  } else {
    setFocus();
    return false;
  }

}
// sets the focus on the first element in the html collection with an invalid class
const setFocus = () => {
  var els = document.getElementsByClassName("invalid");
  if (els.length > 0) {
    els[0].focus();
  }
}
// uses name passed in to find that element on the form
// sets invalid class attribute on the form element 
const setInvalid = (name) => {
  var el = document.getElementById("rform").elements[name];
  el.setAttribute("class", "invalid");
}

// uses name passed in to find that element on the form
// clears the invalid class from the element if it exists
const clearInvalid = (name) => {
  var el = document.getElementById("rform").elements[name];
  if (el.classList.contains("invalid")) {
    el.classList.remove("invalid");
  }
}

// uses a regular expression to evaluate the format of email passed in
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// uses a regular expression to evaluate the format of phone number
// xxxxxxxxxx
// xxx-xxx-xxxx
// (xxx) xxx-xxxx
// xxx.xxx.xxxx
function validatePhoneNumber(phoneNumber) {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(phoneNumber);
}

const getPassedInParams = () => {
      //Store values passed from form 1 into variables
      var userName = getUrlParams('userName');
      var password = getUrlParams('password');
      var passwordVerify = getUrlParams('passwordVerify');
      var firstName = getUrlParams('firstName');
      var lastName = getUrlParams('lastName');
      var email = getUrlParams('email');
      var phoneNumber = getUrlParams('phoneNumber');
      var signUpNewsletter = getUrlParams('signUpNewsletter');

      // Create Cookies
      document.cookie = "userName=" + userName + ";";
      document.cookie = "password=" + password + ";";
      document.cookie = "passwordVerify=" + passwordVerify + ";";
      document.cookie = "firstName=" + firstName + ";";
      document.cookie = "lastName=" + lastName + ";";
      document.cookie = "email=" + email + ";";
      document.cookie = "phoneNumber=" + phoneNumber + ";";
      document.cookie = "signUpNewsletter=" + signUpNewsletter + ";";

      getPassedInParamsFromCookie();
}

//  parse data from url with regex
//  returns empty string or decoded value
const getUrlParams = (val) => {
  val = val.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + val + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// get the cookie values and set innerHTML value of the element
const getPassedInParamsFromCookie = () => {
  var x = document.cookie;
  document.getElementById('node-id').innerHTML = x;
}

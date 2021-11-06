window.addEventListener('load', function() {
  document.querySelector("form").addEventListener("submit", validateForm);
});

const handleSubmit = () => {

    let myForm = document.getElementById('rform');
    let formData = new FormData(myForm);
    let firstName = formData.get("firstName");

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "multipart/form-data" },
      body: new URLSearchParams(formData).toString()
    }).then((res) => {
      console.log('Form successfully submitted')
      console.log("response is", res);
      formSubmittedSuccess(firstName);
      return false;
  }).catch((error) =>
      alert("There was a problem submitting your form"));
}

const formSubmittedSuccess = (firstName) => {
    let myForm = document.getElementById('rform');
    myForm.reset();
    let successMsg = document.createElement("p");
    let msg = document.createTextNode(`Thanks for registering, ${firstName}!`);
    successMsg.append(msg);
    successMsg.setAttribute("class", "thankyou-message");
    myForm.appendChild(successMsg);
    return false;
}

const validateForm = (e) => {
  e.preventDefault();
  var checkev = 0;
    var userName = document.rform.userName.value;
    var password = document.rform.password.value;
    var passwordVerify = document.rform.passwordVerify.value;
    var firstName = document.rform.firstName.value;
    var lastName = document.rform.lastName.value;
    var email = document.rform.email.value;
    var phoneNumber = document.rform.phoneNumber.value;
    var signUpNewsletter = document.rform.signUpNewsletter.value;


    if (userName == "") {
        document.getElementById('userName').innerHTML = "Your user name is required.";
        setInvalid("userName");
        checkev = 0;
      } else {
        document.getElementById('userName').innerHTML = "";
        clearInvalid("userName");
        checkev++;
      }

      if (password == "") {
        document.getElementById('password').innerHTML = "Your password is required.";
        setInvalid("password");
        checkev = 0;
      } else {
        document.getElementById('password').innerHTML = "";
        clearInvalid("password");
        checkev++;
      }

      if (password == "" || password.length < 8) {
        document.getElementById('password').innerHTML = "Your password must be a minimum of 8 characters.";
        setInvalid("password");
        checkev = 0;
      } else {
        document.getElementById('password').innerHTML = "";
        clearInvalid("password");
        checkev++;
      }

      if (passwordVerify == "") {
        document.getElementById('passwordVerify').innerHTML = "Please verify password.";
        setInvalid("passwordVerify");
        checkev = 0;
      } else {
        document.getElementById('passwordVerify').innerHTML = "";
        clearInvalid("passwordVerify");
        checkev++;
      }

      if(passwordVerify != "") {
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

      if (firstName == "") {
        document.getElementById('firstName').innerHTML = "Your first name is required.";
        setInvalid("firstName");
        checkev = 0;
      } else {
        document.getElementById('firstName').innerHTML = "";
        clearInvalid("firstName");
        checkev++;
      }

      if (lastName == "") {
        document.getElementById('lastName').innerHTML = "Your last name is required.";
        setInvalid("lastName");
        checkev = 0;
      } else {
        document.getElementById('lastName').innerHTML = "";
        clearInvalid("lastName");
        checkev++;
      }

      if (email == "" || !validateEmail(email)) {
        document.getElementById('email').innerHTML = "Email address not valid.";
        setInvalid("email");
        checkev = 0;
      } else {
        document.getElementById('email').innerHTML = "";
        clearInvalid("email");
        checkev++;
      }

      if (phoneNumber.length > 0 && !validatePhoneNumber(phoneNumber)) {
        document.getElementById('phoneNumber').innerHTML = "Phone number not valid.";
        setInvalid("phoneNumber");
        checkev = 0;
      } else {
        document.getElementById('phoneNumber').innerHTML = "";
        clearInvalid("phoneNumber");
        checkev++;
      }

      if(checkev == (document.getElementById("rform").elements.length - 1)) {
          handleSubmit();
      } else {
        setFocus();  
      }
      return false;
}

function setFocus() {
    document.getElementsByClassName("invalid")[0].focus();
}

function setInvalid(name) {
    var el = document.getElementById("rform").elements[name];
    el.setAttribute("class", "invalid");
}

function clearInvalid(name) {
    var el = document.getElementById("rform").elements[name];
    if(el.classList.contains("invalid")) {
        el.classList.remove("invalid");
    }
} 

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phoneNumber);
}

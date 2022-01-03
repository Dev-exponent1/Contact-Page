var password = document.getElementById("psw")
var confirm_password = document.getElementById("cpsw");
var length = document.getElementById("length");
 var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

password.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  password.onblur = function() {
    document.getElementById("message").style.display = "none";
  }  


  
  
  password.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }


  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }


  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  

  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}






var pass = document.getElementById("psw1")
var confirm_pass = document.getElementById("cpsw1");

function validatePass(){
  if(pass.value != confirm_pass.value) {
    confirm_pass.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_pass.setCustomValidity('');
  }
}

pass.onchange = validatePass;
confirm_pass.onkeyup = validatePass;








var passy = document.getElementById("psw2")
var confirm_passy = document.getElementById("cpsw2");

function validatePassy(){
  if(passy.value != confirm_passy.value) {
    confirm_passy.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_passy.setCustomValidity('');
  }
}

passy.onchange = validatePassy;
confirm_passy.onkeyup = validatePassy;

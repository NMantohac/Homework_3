var passwordLength = document.querySelector("#password-length-input");
var lowercaseCheckBox = document.querySelector("#lowercase-checkbox");
var uppercaseCheckBox = document.querySelector("#uppercase-checkbox");
var numbersCheckBox = document.querySelector("#numbers-checkbox");
var symbolsCheckBox = document.querySelector("#symbols-checkbox");
var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~"
};

copyBtn.addEventListener("click", function () {
  var passwordValue = document.querySelector("#password");
  if (passwordValue.value === "" || passwordValue.value === "Please determine a correct password length and select at least one character type(s) option!") {
    alert("Please generate a valid password to copy!");
  } 
  else {
    passwordValue.select();
    document.execCommand("copy");
    alert("Password Copied!");
  }
});

generateBtn.addEventListener("click", function() {
  var passwordLengthValue = +passwordLength.value;
  var lowercaseActive = lowercaseCheckBox.checked;
  var uppercaseActive = uppercaseCheckBox.checked;
  var numbersActive = numbersCheckBox.checked;
  var symbolsActive = symbolsCheckBox.checked;

  generateRandomPassword(lowercaseActive, uppercaseActive, numbersActive, symbolsActive, passwordLengthValue);
});

function generateRandomPassword(lower, upper, num, sym, length) {
  var mainString = "";
  var password = "";

  var options = {
    lowercase: lower,
    uppercase: upper,
    numbers: num,
    symbols: sym
  };

  var objectKeys = Object.keys(options)
  var objectValues = Object.values(options)

  for (var i = 0; i < objectKeys.length; i++) {
    if (objectValues[i]) {
      mainString += passwordCriteria[objectKeys[i]];
    }
    else {
      mainString += "";
    }
  }

  var confirmPassword = confirm("Are you sure about your choices and wish to proceed?")

  if (confirmPassword) {
    if (mainString != "" && length >= 8 && length <= 128) {
      for (var j = 0; j < length; j++) {
        password += mainString[Math.floor(Math.random() * mainString.length)];
      }
      
      document.querySelector("#password").value = password;
    }
    else {
      document.querySelector("#password").value = "Please determine a correct password length and select at least one character type(s) option!";
    }
  }
  else {}
}
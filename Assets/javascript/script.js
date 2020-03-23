var passwordLength = document.querySelector("#password-length-input");
var lowercaseCheckBox = document.querySelector("#lowercase-checkbox");
var uppercaseCheckBox = document.querySelector("#uppercase-checkbox");
var numbersCheckBox = document.querySelector("#numbers-checkbox");
var symbolsCheckBox = document.querySelector("#symbols-checkbox");
// var passwordResult = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

const passwordCriteria = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

generateBtn.addEventListener("click", () => {
  var length = +passwordLength.value;
  var lowercaseActive = lowercaseCheckBox.checked;
  var uppercaseActive = uppercaseCheckBox.checked;
  var numbersActive = numbersCheckBox.checked;
  var symbolsActive = symbolsCheckBox.checked;

  generateRandomPassword(lowercaseActive, uppercaseActive, numbersActive, symbolsActive, length);
});

function generateRandomPassword(lower, upper, num, sym, length) {
  let mainString = "";
  let password = "";

  const options = {
    lowercase: lower,
    uppercase: upper,
    numbers: num,
    symbols: sym
  };

  for (var i = 0; i < Object.keys(options).length; i++) {
    mainString += (Object.values(options)[i]) ? passwordCriteria[Object.keys(options)[i]] : "";
  }

  if (mainString != "" && length >= 8 && length <= 128) {
    for (var j = 0; j < length; j++) {
      password += mainString[Math.floor(Math.random() * mainString.length)];
    }

    document.querySelector("#password").value = password;
  }
  else {
    document.querySelector("#password").value = "Please determine password length and select at least one character type(s) option!";
  }
}
  
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }





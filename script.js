var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var finalPassword = "";

//Click button to promp action

var generateBtn = document.querySelector("#generate");
var securePassword = document.querySelector("#password");

generateBtn.addEventListener("click", function () {
  var passLength = passwordLenght();
  if (passLength) {
    var lowerCase = lowerCa();
    var upperCase = upperCa();
    var numChac = numChrts();
    var specChac = specChrts();
    console.log(passLength, lowerCase, upperCase, numChac, specChac);
    var isValid = validation(lowerCase, upperCase, numChac, specChac);

    if (isValid) {
      // Selection of true criterias/adding objects to passwordCriteria var
      var passwordCriteria = "";
      if (lowerCase) {
        passwordCriteria = passwordCriteria.concat(lowerCasedCharacters);
      }
      if (upperCase) {
        passwordCriteria = passwordCriteria.concat(upperCasedCharacters);
      }
      if (numChac) {
        passwordCriteria = passwordCriteria.concat(numericCharacters);
      }
      if (specChac) {
        passwordCriteria = passwordCriteria.concat(specialCharacters);
      }
      console.log(passwordCriteria);
      console.log(passLength);
      // Loop to create finalPassword (random characters from passwordCriteria)
      for (var i = 0; i < passLength; i++) {
        var abc = Math.floor(Math.random() * passwordCriteria.length);
        finalPassword += passwordCriteria.substring(abc);
        console.log(finalPassword);
      }
      securePassword.textContent = finalPassword;
    }
  } else {
    return;
  }
});

//Validate: at least one character type should be selected
function validation(lowerCase, upperCase, numChac, specChac) {
  if (!lowerCase && !upperCase && !numChac && !specChac) {
    window.alert(
      "You must select at least one criteria:\nLowercase\nUppercase\nNumeric characters\nSpecial characters"
    );
    return false;
  }
  return true;
}

// Selection of the length of the passowrds
//    Criteria: at leat 8 characters no more then 182 charactes

function passwordLenght() {
  var pLength = window.prompt(
    "How many characters do you want your password to be?\n(Please select between 8 and 182)"
  );

  if (isNaN(pLength)) {
    window.alert("Please only type numeric characters");
    return false;
  } else if (pLength < 8 || pLength > 182) {
    window.alert("Password must have a lenght of between 8 and 182 characters");
    return false;
  } else {
    return parseInt(pLength);
  }
}

//  Selection of characters:
//    Criteria: include lowercase
function lowerCa() {
  var lowCa = confirm(
    "Do you want your password to have lowercase characters?"
  );
  if (lowCa) {
    return true;
  } else {
    return false;
  }
}

//  Selection of characters:
//    Criteria: include uppercase

function upperCa() {
  var uppCa = confirm(
    "Do you want your password to have uppercase characters?"
  );
  if (uppCa) {
    return true;
  } else {
    return false;
  }
}

//  Selection of characters:
//    Criteria: include numeric characters
function numChrts() {
  var numerCh = confirm(
    "Do you want your password to have numeric characters?"
  );
  if (numerCh) {
    return true;
  } else {
    return false;
  }
}

//  Selection of characters:
//    Criteria: include special characters
function specChrts() {
  var SpecCh = confirm("Do you want your password to have special characters?");
  if (SpecCh) {
    return true;
  } else {
    return false;
  }
}

//5. Password matches the criteria and is generated
//6. Passwords shows in

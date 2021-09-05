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

//Click button to promp alert to action

var generateBtn = document.getElementById("generate");

generateBtn.onclick = function () {
  var length = passwordLenght();
  var lowerCase = lowerCa();
  var upperCase = upperCa();
  var numspeCar = numAndSpec();
  if (length) {
    console.log(length);
    console.log(lowerCase);
    console.log(upperCase);
    console.log(numspeCar);
  } else {
    return;
  }
};

// Selection of the length of the passowrds
//    Criteria: at leat 8 characters no more then 182 charactes

passwordLenght = function () {
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
};

//  Selection of characters:
//    Criteria: include lowercase
lowerCa = function () {
  var lowCa = confirm(
    "Do you want your password to have lowercase characters?"
  );
  if (lowCa) {
    return true;
  } else {
    return false;
  }
};

//  Selection of characters:
//    Criteria: include uppercase

upperCa = function () {
  var uppCa = confirm(
    "Do you want your password to have uppercase characters?"
  );
  if (uppCa) {
    return true;
  } else {
    return false;
  }
};

//  Selection of characters:
//    Criteria: include numeric and/or special character
numAndSpec = function () {
  var numSpec = confirm(
    "Do you want your password to have numeric and/or special characters?"
  );
  if (numSpec) {
    return true;
  } else {
    return false;
  }
};

//4. Validate: at least one character type should be selected
//5. Password matches the criteria and is generated
//6. Passwords shows in HTML

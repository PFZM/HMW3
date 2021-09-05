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
  passwordLenght();
};

// Selection of the lenght of the passowrds
//    Criteria: at leat 8 characters no more then 182 charactes

passwordLenght = function () {
  window.prompt(
    "How many characters do you want your password to be?\n(Please select between 8 and 182"
  );

  if (passwordLenght != numericCharacters) {
    return window.prompt("Please only type numeric characters");
  } else if (passwordLenght < 8 || passwordLenght > 182) {
    return window.prompt(
      "Password must have a lenght of between 8 and 182 characters"
    );
  } else {
  }
};

// 3. Selection of characters:
//    Criteria: inlcude/note include: lowercase, uppercase, numeric, and/or special character
//4. Validate: at least one character type should be selected
//5. Password matches the criteria and is generated
//6. Passwords shows in HTML

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

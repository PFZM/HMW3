//Steps for development:
// 1. click button to promp alert to action

var generateBtn = document.getElementById("#generate");

generateBtn = function () {
  numCharacters = window.prompt(
    "How many characters do you want touy password to be?"
  );
  numCharacters = console.log(
    "How many characters do you want touy password to be?"
  );
};

// 2. Selection of the lenght of the passowrds
//    Criteria: at leat 8 characters no more then 182 charactes
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

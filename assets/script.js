// Creates funtion for password generating
function generatePassword() {

// Creating variables for password
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "+","=", "?", ";"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// prompts to confirm input
 var uppercaseChecker = confirm('Click OK to include uppercase characters.');
 var lowercaseChecker =confirm('Click OK to include lowercase characters.');
 var symbolChecker = confirm('Click OK to include symbols.');
 var number = confirm('Click OK to include numbers.');

// Creates prompt to enter value 
var passwordValue = window.prompt("Please select length between 8 and 128 characters.");
// Creates if fuction

if (passwordValue >=8 && passwordValue <=128) {
  console.log(passwordValue)
}
}
// Writes password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Creates variable for generate id
var generateBtn = document.querySelector("#generate");

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
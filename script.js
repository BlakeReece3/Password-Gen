// Creates funtion for password generating
function generatePassword() {

// Creating variables for password
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "+","=", "?", ";"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// prompts to confirm input
var uppercaseChecker = 
var lowercaseChecker =
var symbolChecker = 
var number = 

// Creates prompt to enter value 
var passwordLength = window.prompt("Please select length between 8 and 128 characters.");
// Creates if fuction
if (passwordLength >=8 && passwordLength <=128) {
  
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
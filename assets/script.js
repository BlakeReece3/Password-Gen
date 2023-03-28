
// Creates variable for generate id
var generateBtn = document.querySelector("#generate");


// Writes password
function writePassword() {
  var password = generatePassword();
  var passwordPrint = document.querySelector("#password");
  passwordPrint.value = password;
}
// Adds event listener to button
generateBtn.addEventListener("click", writePassword);

// Creates password generating function
function generatePassword() {

  // Creating variables for password
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "+","=", "?", ";"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Creates prompt to enter value 
  var passwordValue = window.prompt("Please select between 8 and 128 characters.");

  // Prompts to confirm input
  var lowercaseCheck = confirm('Click OK to include lowercase characters.');
  var uppercaseCheck = confirm('Click OK to include uppercase characters.');
  var symbolCheck = confirm('Click OK to include symbols.');
  var numberCheck = confirm('Click OK to include numbers.');

  
  // Creates if fuction

  if (passwordValue >=8 && passwordValue <=128) {
  console.log(passwordValue)

  const finalChoices = [];

  if (lowercaseCheck === true) {
    finalChoices.push.apply(finalChoices, lowercase);
  }
  if (uppercaseCheck === true) {
    finalChoices.push.apply(finalChoices, uppercase);
  }
  if (symbolCheck === true) {
    finalChoices.push.apply(finalChoices, symbol);
  }
  if (numberCheck === true) {
    finalChoices.push.apply(finalChoices, number);
  }

  var userPassword = ""

  for (i = 0; i < passwordValue; i++) {
    userPassword += finalChoices[Math.floor(Math.random() * finalChoices.length)]
  };

  return userPassword;
  }
};


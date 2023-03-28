
// Creates variable for generate id
var createBtn = document.querySelector("#generate");

// Creates password generating function
function generatePassword() {

  // Creating variables for password
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var symbol = '!@#$%^&*~`+=?;';
  var number = '1234567890';
  
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

  if (lowercaseCheck) {
    finalChoices.push(...lowercase);
  }
  if (uppercaseCheck) {
    finalChoices.push(...uppercase);
  }
  if (symbolCheck) {
    finalChoices.push(...symbol);
  }
  if (numberCheck) {
    finalChoices.push(...number);
  }

  var userPassword = ""

  for (i = 0; i < passwordValue; i++) {
    userPassword += finalChoices[Math.floor(Math.random() * finalChoices.length)]
  };

  return userPassword;
  }
};
// Adds event listener to button
createBtn.addEventListener("click", writePassword);
// Writes password
function writePassword() {
  var password = generatePassword();
  var passwordPrint = document.querySelector("#password");
  passwordPrint.value = password;
}
// Assignment code here

console.dir(document);



var generatePassword = function () {
var passLength = prompt("Enter amount of characters")
if (passLength < 8){
  window.alert("Your selection is too short!");
  return generatePassword();
}
else if (passLength > 128){
  window.alert("Your selection is too long!");
  return generatePassword();
}
var numericPass = confirm("Did you want to add numbers?")
var alphabetical = confirm("Did you want to add letters?")
var capitals = confirm("Did you want to add capital letters?")
var specialChars = confirm("Did you want to add special characters?")
}

var password = function () {
 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



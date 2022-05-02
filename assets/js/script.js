// Assignment code here

// variables with arrays to insert into password
var numericalArr = ['0','1','2','3','4','5','6','7','8','9']
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[',']','{','}',',','.','/','<','>','?']

// function to generate password and to get the length of said password from user
function generatePassword() {
  var passwordOptions = []
var passLength = prompt("Enter amount of characters.")
if (passLength < 8 || isNaN(passLength)){
  window.alert("Your selection is too short and/or has to be a number!");
  return generatePassword();
}
else if (passLength > 128){
  window.alert("Your selection is too long!");
  return generatePassword();
}

// variables confirming the password parameters
var numerical = confirm("Did you want to include numbers?")
var lowerCase = confirm("Did you want to include letters?")
var upperCase = confirm("Did you want to include capital letters?")
var specialChars = confirm("Did you want to include special characters?")

// concatenation of arrays
if (numerical === true) {
  passwordOptions = passwordOptions.concat (numericalArr)
}
if (lowerCase === true) {
  passwordOptions = passwordOptions.concat (lowerCaseArr)
}
if (upperCase === true) {
  passwordOptions = passwordOptions.concat (upperCaseArr)
}
if (specialChars === true) {
  passwordOptions = passwordOptions.concat (specialCharArr)
}
var password = ("")
for (i = 0; i < passLength; i++) {
password = password + passwordOptions [Math.floor(Math.random()*passwordOptions.length)]
}

// returns the final result after selections and arrays
return password;
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

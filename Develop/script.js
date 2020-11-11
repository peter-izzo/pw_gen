// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Find How long the User would like their password to be
  var passLength = prompt("How long would you like this password to be? (type a number between 8 - 128)");


  //User is prompted for which character types thye would like to include
  var upperCase = confirm("Would you like capital letters included?");
  var lowerCase = confirm("Wold you like lower case letters included?");
  var numbers = confirm("Would you like numbers included?");
  var special = confirm("Would you like Special Characters added?");

  /*
    * if the password is a letter, space, longer or shorter than req. 
    * or they hit cancel the function will run again
  */
  if (passLength === null || passLength === " " || parseInt(passLength) < 8 || parseInt(passLength) > 128 || isNaN(passLength)) {
    alert("Please pick a valid number");
    generatePassword();
  }

  //This variable is the chosen length of password
  //adjusted so they can't use decimals
  passLength = Math.floor(passLength);
  //console.log(passLength);


  //Array of special characters
  var specChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\\", "\]", "^", "_", "`", "\{", "\|", "\}", "~"];

  //Array of uppercase letters
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //Array of lower case letter
  var lowerArray = upperArray.map(function(i){return i.toLowerCase();}); 

  //Array of numbers
  var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  //This loop will run through all the arrays 
  for (let i = 0; i < specChar.length; i++) {
    const element = specChar[i];
    console.log(element);
    
  }


  //Return the random values to display the password generated
  return "Final Password";



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

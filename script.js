// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Find How long the User would like their password to be
  var passLength = prompt("How long would you like this password to be? (type a number between 8 - 128)");

  /*
    * if the password is a letter, space, longer or shorter than req. 
    * or they hit cancel the function will run again
  */
  if (passLength === null || passLength === " " || parseInt(passLength) < 8 || parseInt(passLength) > 128 || isNaN(passLength)) {
    alert("Please pick a valid number");
    generatePassword();
  }


  //User is prompted for which character types thye would like to include
  var upperCase = confirm("Would you like capital letters included?");
  var lowerCase = confirm("Wold you like lower case letters included?");
  var numbers = confirm("Would you like numbers included?");
  var special = confirm("Would you like Special Characters added?");

  
  passLength = parseInt(passLength);
  //This variable is the chosen length of password
  //adjusted so they can't use decimals
  passLength = Math.floor(passLength);
  //console.log(passLength);


  //Array of special characters
  var specChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\\", "\]", "^", "_", "`", "\{", "\|", "\}", "~"];

  //Array of uppercase letters
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //Array of lower case letters
  var lowerArray = upperArray.map(function(i){return i.toLowerCase();}); 

  //Array of numbers
  var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


  /**
   * This set of switch statements will cover the users pw
   * parameters and create a big ol array with every option
   * they request and will pump out the pw from there
   */

  if(upperCase && lowerCase && numbers && special){
    console.log("Do Everything");
    z = upperArray.concat(lowerArray, numArray, specChar);
    z = z.join('');
    console.log(z);
  } else if(upperCase === false && lowerCase && numbers && special) {
    console.log("lower, numbers, special");
    z = lowerArray.concat(numArray, specChar);
    console.log(z);
  } else if (upperCase && lowerCase === false && numbers && special) {
    console.log("upper, numvers, special");
    z = upperArray.concat(numArray, specChar);
    console.log(z);
  } else if(upperCase && lowerCase && numbers === false && special) {
    console.log("upper, lower, special");
      z = upperArray.concat(lowerArray, specChar);
      console.log(z);
  } else if(upperCase && lowerCase && numbers && special === false) {
    console.log("upper, lower, numvers");
    z = upperArray.concat(lowerArray, numArray);
    console.log(z);
  } else if(upperCase === false && lowerCase === false && numbers && special){
    console.log("numbers, special");
    z = numArray.concat(specChar);
    console.log(z);
  } else if(upperCase === false && lowerCase && numbers === false && special) {
    console.log("lower, special");
    z = lowerArray.concat(specChar);
    console.log(z);
  } else if(upperCase === false && lowerCase && numbers && special === false){
     console.log("lower, numbers");
    z = lowerArray.concat(numArray);
    console.log(z);
  } else if(upperCase && lowerCase === false && numbers === false && special){
    console.log("upper, special");
    z = upperArray.concat(specChar);
    console.log(z);
  } else if (upperCase && lowerCase === false && numbers && special === false){
    console.log("upper, numbers");
    z = upperArray.concat(numArray);
    console.log(z);
  } else if(upperCase && lowerCase && numbers === false && special === false) {
    console.log("upper, lower");
    z = upperArray.concat(lowerArray);
    console.log(z);
  } else if(upperCase && lowerCase === false && numbers === false && special === false){
    z = upperArray;
    console.log("upper");
    console.log(upperArray);
  } else if(upperCase === false && lowerCase && numbers === false && special === false){
    z = lowerArray;
    console.log("lower");
      console.log(lowerArray);
  } else if(upperCase === false && lowerCase === false && numbers && special === false){
    z = numArray;
    console.log("numbers");
      console.log(numArray);
  } else if(upperCase === false && lowerCase === false && numbers === false && special){
    z = specChar;
    console.log("special");
      console.log(specChar);
  } else{
    console.log("Please try again");
  };

  //initializes the pw into an empty array so...
  password = []

  /**
   * we can loop through the z array we created earlier
   * that included all the options chosen, 
   * taking a random element from z and pushing it
   * to the password array until the length chosen at the beginning is met
   */
  for (let i = 0; i < passLength; i++) {
    var random = z[Math.floor(Math.random() * z.length)];
    password.push(random);
    
  }

  //writes to the screen the password created
  return password.join('');



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

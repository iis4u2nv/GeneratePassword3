// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = [">8 <128"];
  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var characters = "@#$%^&*()_+?><:{}[]'";
  var lengthPrompt = prompt ("How many characters do you want your password to be? between 8 and 128 characters");
  if (lengthPrompt <8 || lengthPrompt > 128) {
    alert ("numbers of characters must be between 8 and 128 characters in length")
    return ""
  }
  var lowerCasePrompt = confirm ("Do you want to use lower case in your password?");
  var charactersPrompt = confirm ("Do you want to use characters in your password?");
  var upperCasePrompt = confirm ("Do you want to use upper case in your password?");
  var numbersPrompt = confirm ("Do you want to use numbers in your password?");
  var password = "";
  var charactersPool = "";


  console.log(lowerCasePrompt); 
  console.log(charactersPrompt);
  console.log(lowerCasePrompt);
  console.log(numbersPrompt);
  console.log(numbers);



if (numbersPrompt) {
    charactersPool += numbers;
} 

if (upperCasePrompt) {
  charactersPool += upperCase;
}

if (lowerCasePrompt) {
  charactersPool += lowerCase;
}

if (charactersPrompt) {
  charactersPool += characters;
}

console.log (charactersPool);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
for (var i = 0 ; i < lengthPrompt; i++) {
var charIndex = getRandomInt(0, charactersPool.length);
console.log(charIndex);
var characters = charactersPool[charIndex];
console.log(characters);
password += characters;
console.log("New Password", password); 
}




  // for (let i = 0; i < generatePassword; i++)
  return password
}
// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  


  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}
//<button onclick="document.getElementById('demo').innerHTML = getRndInteger(0,10)">Click Me</button>
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

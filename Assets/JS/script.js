// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function promtPassworedDetails() {
  do{
    var length = prompt("Please enter desired password length (8-128)");
    if (length == null){
      return;
    }
    if (length<8 || length>128) {
      alert("Invalid!!! PLEASE CHOOSE A NUMBER BETWEEN 8 AND 128");
    }
  } while (length<8 || length>128)
  do {
    var lowercase= confirm("Do you want lowercase letters in your password?");
    var uppercase = confirm("Do you want uppercase letters in your password?");
    var number = confirm("Do you want numbers in your password?");
    var symbol = confirm("Do you want special characters in your password?");
    if (!(lowercase || uppercase || number || symbol)){
      alert ("Please choose atleast one password atttribute!")
    }
  } while (!(lowercase || uppercase || number || symbol))
  writePassword(length, lowercase, uppercase, number, symbol)
}
function writePassword(length, hasLowercase, hasUppercase, hasNumber, hasSymbol) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChars = [];
  if (hasLowercase) {
    possibleChars = possibleChars.concat(lowerCase);
  }
  if (hasUppercase) {
    possibleChars = possibleChars.concat(upperCase);
  }
  if (hasNumber) {
    possibleChars = possibleChars.concat(numbers);
  }
  if (hasSymbol) {
    possibleChars = possibleChars.concat(special);
  }
  var password = "";
  for (var i = 0; i < length; i++){
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", promtPassworedDetails);
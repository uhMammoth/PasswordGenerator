// prompts the user what characters and length they want for the password
function userPrompt() {
  var userChoices = {
    upper: true,
    lower: true,
    num: true,
    special: true,
    len: 8
  };
  userChoices.upper = confirm("Press 'OK' if you want uppercase letters.");
  userChoices.lower = confirm("Press 'OK' if you want lowercase letters.");
  userChoices.num = confirm("Press 'OK' if you want numbers.");
  userChoices.special = confirm("Press 'OK' if you want special characters.");
  //if user enters number outside range, check will push value to nearest accepted value
  userChoices.len = prompt("Enter the desired password length (8-128):");
  if (userChoices.len < 8) {
    userChoices.len = 8;
  } else if (userChoices.len > 128){
    userChoices.len = 128;
  }
  
  //if user declines all characters generator will cancel
  var userError = 0;
  for (let i in userChoices){
    if (!userChoices[i]){
      userError++;
    }
  }
  if (userError === 4){
      return userError;
  } else {
    return userChoices;
  }
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
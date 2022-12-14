// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for types of characters options
function getTypeOfCharacters() {
  
  //Array to store input options
  var characters = [];

  // Loop keep asking until at least 1 type of character was chosen
  while (characters.length == 0) {

    //Character type: Lowercase 
    var lowercase = confirm("Select OK if you want to include LOWERCASE characters in the password.\nSelect Cancel if you don't want to include them.");
    if (lowercase) {
      // The letter l (l for lowercase) will be added and used later for randomization
      characters.push('l');
    }

    //Character type: Uppercase
    var uppercase = confirm("Select OK if you want to include UPPERCASE characters in the password.\nSelect Cancel if you don't want to include them.");
    if (uppercase) {
      // The letter u (u for uppercase) will be added and used later for randomization
      characters.push('u');
    }

    //Character type: Numeric
    var numeric = confirm("Select OK if you want to include NUMERIC characters in the password.\nSelect Cancel if you don't want to include them.");
    if (numeric) {
      //The letter n (n for numeric) will be added and used later for randomization
      characters.push('n');
    }

    //Character type: Special characters
    var special = confirm("Select OK if you want to include SPECIAL characters in the password.\nSelect Cancel if you don't want to include them.");
    if (special) {
      //The letter s (s for special) will be added and used later for randomization
      characters.push('s');
    }

    // If no type of character was chosen will start again
    if (characters.length == 0) {
      alert('Please choose at least one type of character to generate the password');
    }
  }
  //Returns array with type of characters chosen
  return characters;

}


// Function to prompt user for password options
function getPasswordOptions() {

  //Object to store and return input values
  var passwordChosen = {
    length: 0,
    characterTypes: [],
  }

  //Gets user input for length of password - At least 10 characters but no more than 64.
  //Loop keeps asking if a number outside limits, a letter or any other character was chosen       
  //Loop finish if cancel button was selected.
  while ((isNaN(passwordChosen.length) || (passwordChosen.length < 10) || (passwordChosen.length > 64)) && (passwordChosen.length !== null)) {
    passwordChosen.length = prompt("Please, enter the number of characters for the password. Must be a number between 10 and 64.\nSelect Cancel if you want to finish.");
  }

  //Checks if cancel button was selected and finish
  if (passwordChosen.length === null) {
    alert('Please, select Generate Password button to start again.')
  }
  else {
    //Call function to get impit for type of characters
    passwordChosen.characterTypes = getTypeOfCharacters();
  }

  //Returns an object with the length of the password and types of characters chosen
  return passwordChosen;
}



// Function for getting a random element from an array
function getRandom(arr) {
  // Returns a random integer from 0 to arr length:
  var index = Math.floor(Math.random() * arr.length);

  //Returns element from array 
  return (arr[index]);

}

// Function to generate password with user input
function generatePassword() {
  //Object to store all password information: length , characters chosen and text generated
  var password = {
    text: '',
    length: 0,
    characterTypes: [],
  }
  //Object to store password Options 
  var options = getPasswordOptions();

  //Loop to generate the password text
  for (var i = 0; i < options.length; i++) {

    // Call for getting a random element from the array of chosen characters 
    var randomCharacter = getRandom(options.characterTypes);

    //Call function with array for getting a character base on the random selection of the type of character previously chosen
    //Case l is for lowercase
    //Case u is for uppercase
    //Case n is for Numeric Characters
    //Case s is for Special Characters

    switch (randomCharacter) {
      case 'l':
        password.text += getRandom(lowerCasedCharacters);
        break;
      case 'u':
        password.text += getRandom(upperCasedCharacters);
        break;
      case 'n':
        password.text += getRandom(numericCharacters);
        break;
      case 's':
        password.text += getRandom(specialCharacters);
        break;
    }
  }
  //Returns the text of the generated password
  return password.text
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
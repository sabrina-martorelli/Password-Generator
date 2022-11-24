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






// Function to prompt user for password options
function getPasswordOptions() {

//Function internal variables
var passwordLength = 0; 
var charactersChosen= [];
  


  // Prompt to get the user input for the length of password - At least 10 characters but no more than 64.
  // Will keep asking until a number within the limits is chosen
  while ((passwordLength < 10 ) || (passwordLength > 64))
  {
   var passwordLength = prompt("Please, enter the length of password (between 10 and 64)");
  }

  //Prompt to get Character type: Lowercase

  var lowercase= prompt("Do you want to include lowercase characters on your password?");

    //If the user want to include lowercases characters on the password
    if (lowercase) {
        // the letter l (l for lowercase) will be added to the charactersChosen array that will be used for randomization
       charactersChosen.push('l');      
    }

  //Prompt to get Character type: Uppercase

  var uppercase= prompt("Do you want to include uppercase characters on your password?");

  //If the user want to include uppercase characters on the password
  if (uppercase) {
      // the letter u (u for uppercase) will be added to the charactersChosen array that will be used for randomization
     charactersChosen.push('u');      
  }

  //Prompt to get Character type: Numeric


  var numeric= prompt("Do you want to include numeric characters on your password?");

  //If the user want to include numeric characters on the password
  if (numeric) {
      //the letter n (n for numeric) will be added to the charactersChosen array that will be used for randomization
     charactersChosen.push('n');      
  }


   //Prompt to get Character type: Special characters


   


 //Returns an array with the chosen types of characters to generate the password
           
       return   charactersChosen;
}

// Function for getting a random element from an array
function getRandom(arr) {
    // Returns a random integer from 0 to arr length:
    var index = Math.floor(Math.random() * arr.lenght);

    //Returns element from array 
    return (arr[index]);
}

// Function to generate password with user input
function generatePassword() {




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
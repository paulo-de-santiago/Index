// array with all characters
const fullCharacterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "<", ">", "?", "[", "]", "{", "}"]

/* //creates an array with all the passwords
let passarray = [];
console.log(passarray) */

let newPass = false

// If possible, use const. If not, use let.

// PASSWORD GENERATOR
function passwordGenerator2() {

  //variables to store generated passwords
  let randompassone = ''
  let randompasstwo = ''
  let randompassthree = ''
  let randompassfour = ''

  //gets value of text box with the id ="passlength"
  let passlength = document.getElementById("passlength").value

  

  //checks whether passlength is a number
  if (isNaN(passlength)) {
    newPass;
    return alert("Input must be a whole number between 5 and 15.")
  }
  else if (passlength === "") {
    return alert("Please input a value. ")
  }
/*   else if (
    typeof passlength === 'number' &&
    !Number.isInteger(passlength)  
  ) {
    newPass;
    return alert("Input number must be an integer.")
  } */
  //checks whether passlength is whithin the range of 5 and 15 digits
  else if (passlength < 5) {
    newPass;
    return alert("Password must have a minimum of 5 digits.")
  }
  else if (passlength > 15) {
    newPass;
    return alert("Password must have a max of 15 digits.")
  } 

   
/*   //checks whether passlength is not an integer
  else if (typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)) {
    return alert("Input must be a positive integer.")
  }  */


//generates a assword with the number of characters of passlength. 
//Same cycle generates four different passwords

  for (let i = 0; i < passlength; i++) {
    randompassone += fullCharacterArr[Math.floor(Math.random() * fullCharacterArr.length)];
    randompasstwo += fullCharacterArr[Math.floor(Math.random() * fullCharacterArr.length)];
    randompassthree += fullCharacterArr[Math.floor(Math.random() * fullCharacterArr.length)];
    randompassfour += fullCharacterArr[Math.floor(Math.random() * fullCharacterArr.length)];
     
    newPass = true

  /*   passarray = [randompassone, randompasstwo, randompassthree, randompassfour] */
    
  }


//assigns generated passwords to the text boxes
  document.querySelector("#firstPass").value = randompassone  
  document.querySelector("#secondPass").value = randompasstwo
  document.querySelector("#thirdPass").value = randompassthree
  document.querySelector("#fourthPass").value = randompassfour
   
  

}


function printPasswordsOne() {
// gets the the text field to be copied

let textPassOne = document.getElementById("firstPass"); 
if (newPass === false) {
  alert("Please generate password")
}
else if (newPass === true) {
  //Select the text field
textPassOne.select(); 
textPassOne.setSelectionRange(0, 99999); 
 
navigator.clipboard.writeText(textPassOne.value); 

alert("Password One: " + textPassOne.value)
}


}

function printPasswordsTwo() {

  let textPassTwo = document.getElementById("secondPass");
  
  if (newPass === false) {
    alert("Please generate password")
  }
  else if (newPass === true) {
  textPassTwo.select(); 
  textPassTwo.setSelectionRange(0, 99999); 
   
  navigator.clipboard.writeText(textPassTwo.value); 
  
  alert("Password Two: " + textPassTwo.value)
  }
  
  
  }


  function printPasswordsThree() {
    if (newPass === false) {
      alert("Please generate password")
    }
    else if (newPass === true) {
    let textPassThree = document.getElementById("thirdPass"); 
    textPassThree.select(); 
    textPassThree.setSelectionRange(0, 99999); 
     
    navigator.clipboard.writeText(textPassThree.value); 
    
    alert("Password Three: " + textPassThree.value)
    
    }
  }


    function printPasswordsFour() {
      if (newPass === false) {
        alert("Please generate password")
      }
      else if (newPass === true) {
      let textPassFour = document.getElementById("fourthPass"); 
      textPassFour.select(); 
      textPassFour.setSelectionRange(0, 99999); 
       
      navigator.clipboard.writeText(textPassFour.value); 
      
      alert("Password Four: " + textPassFour.value)
      
      }
    }

/*       //Printing all four passwords to clipboard
      function printFourPasswords() {
      let passarrayOne = printPasswordsOne()
      let passarrayTwo = printPasswordsTwo()
      let passarrayThree = printPasswordsThree()
      let passarrayFour = printPasswordsFour()

      let passArray =[passarrayOne, passarrayTwo, passarrayThree, passarrayFour]

      for (let i = 0; i < passArray.length; i++) {
          
    } 


      
      }

*/

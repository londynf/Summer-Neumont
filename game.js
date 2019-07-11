let randomNum = Math.floor(Math.random() * 99);
let counter = 0;
let gif = "/WebsitePictures/youwin.gif";
makeGuess = (form) => {
    let guessedNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = ""; 
    document.getElementById("response").innerHTML = "You Guessed: " + guessedNum;
    
    let bodyClass = "";
    
    if (isNaN(guessedNum)) {
        bodyClass='<br> Invalid Please enter a valid input.'
    }
    else if (guessedNum === randomNum) {
        bodyClass= '<br> CORRECT!'
document.getElementById("gif").src = gif;
    }
    else if (guessedNum < randomNum) {
       bodyClass = '<br> Too low, guess again!'
       counter++;
   }
    else if (guessedNum > randomNum) {
       bodyClass = '<br> Too high, guess again!'
       counter++;
   }
   
   document.getElementById("answer").innerHTML = bodyClass;
   document.getElementById("counterid").innerHTML = counter;
   
   

}
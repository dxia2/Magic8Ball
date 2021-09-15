// Magic 8 Ball

// Set Varibles
let userInputEl = document.getElementById("userInput");
let magic8BallButtonEl = document.getElementById("magic8BallButton");
let answerResultEl = document.getElementById("answerResult");

// Event Listeners
magic8BallButtonEl.addEventListener("click", generateResponse)

//Event function
function generateResponse(){
    //check if the user has inputed anything
    if(userInputEl.value != ""){

        //check if input is equal to set responses
        if(userInputEl.value.toLowerCase() === "does a magic 8 ball actually work?"){
            answerResultEl.innerHTML = "How dare you doubt me!";
        }else if(userInputEl.value.toLowerCase() === "is javascript awesome?"){
            answerResultEl.innerHTML = "Of Course!";
        }else if(userInputEl.value.toLowerCase() === "is david cool?"){
            answerResultEl.innerHTML = "YES";
        }else{
            //If input is not equal to any set responses, generate a random response
            let randomNumber = Math.random();

            //Decide answers based on random number
            if(randomNumber < 0.2){
                answerResultEl.innerHTML = "Without a Doubt.";
            }else if(randomNumber < 0.4){
                answerResultEl.innerHTML = "As I see it, yes.";
            }else if(randomNumber < 0.6){
                answerResultEl.innerHTML = "Concentrate and ask again.";
            }else if(randomNumber < 0.8){
                answerResultEl.innerHTML = "Don't count on it.";
            }else{
                answerResultEl.innerHTML = "Outlook not so good.";
            }
        }

        
    }else{
        // If user did not input anything, display message
        answerResultEl.innerHTML = "Please ask a question...";
    }
 
}
// keyboard press handle button clicked
// function handleKeyboardButtonPress(){
//     console.log('button press')
// }
// document.addEventListener('keyup', handleKeyboardButtonPress);

// document.addEventListener('keyup',handleKeyboardButtonPress);

// function keyboardPressHandleButton(){
//              console.log("keyboard press button for the clicked");
// };
// document.addEventListener('keyup',keyboardPressHandleButton);

 function handleKeyboardButtonPress(event){
     const playerKeyPress = event.key;
     console.log('playerPressed',playerKeyPress);
    //  get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('Your Final Alphabet',playerKeyPress,expectedAlphabet);
    if(playerKeyPress === expectedAlphabet){
        console.log("you are lucky ");
    }
    else{
        console.log("no lucky man again try");
    }



 }
 document.addEventListener('keyup',handleKeyboardButtonPress);
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
//     handleKeyboardButtonPress();
 }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log("Your Random Number Your Number", alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}
// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame();

// }
// function continueGame(){
//     const alphabet = getARandomAlphabet();
//      console.log("Your Random Alphabet",alphabet);

//     // set randomly generated alphabet to the screen
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;
    
// }
// // function play(){
// //     elementHideById('home-screen');
// //     showElementById('play-ground');
// // }

// // function continueGame(){
// //     //  step one generate a random alphabet
// //     const alphabet = getARandomAlphabet();
// //     console.log("your random alphabet",alphabet);
// // }
// // // function continueGame(){
// // //         //  step one generate a random alphabet
// // //         const alphabet = getARandomAlphabet();
// // //         console.log('your random alphabet', alphabet);
// // // }

// // // function play(){
// // //     hideElementById('home-screen');
// // //     showElementById('play-ground');
// // //     continueGame();
// // // }
// the all node this project 
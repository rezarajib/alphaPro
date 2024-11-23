function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
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
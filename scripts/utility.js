function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet; 
}
// function getARandomAlphabet(){
//         const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//         const alphabets = alphabetString.split('');
//         const randomNumber = Math.random()*25;
//         const index = Math.round(randomNumber);
//         const alphabet = alphabets[index];
//          // console.log(alphabet,index);
//          return alphabet;
// }
// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     const randomNumber = Math.random()*25;
//     const random = Math.random(randomNumber);
//     const index = Math.round(random);
//     const alphabet = alphabets[index];
//     return alphabet;
// }
// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }
// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');

// }

// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(alphabet,index);
//     return alphabet;

// }
// // function elementHideById(elementId){
// //     const element = document.getElementById(elementId);
// //     element.classList.add("hidden");
// // }

// // function showElementById(elementId){
// //     const element = document.getElementById(elementId);
// //     element.classList.remove('hidden');
// // }


// // function getARandomAlphabet(){
// //     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
// //     const alphabets = alphabets.split('');
// //     const randomNumber = Math.random()*25;
// //     const index = Math.round(randomNumber);
// //     const alphabet = alphabets[index];
// //     console.log(alphabet,index);
// //     return alphabet;


    
// // }
// // // function hideElementById(elementId){
// // //     const element = document.getElementById(elementId);
// // //     element.classList.add('hidden');
// // // }

// // // function showElementById(elementId){
// // //     const element = document.getElementById(elementId);
// // //     element.classList.remove('hidden');
// // // }

// // // function getARandomAlphabet(){
// // //     // get or create an alphabet array
// // //     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

// // //     const alphabets = alphabetString.split('');
// // //     // console.log(alphabets);
// // //     //  get a random index between o-25
// // //     const randomNumber = Math.random()*25;
// // //     const index = Math.round(randomNumber);

// // //     const alphabet = alphabets[index]
// // //     // console.log(index,alphabet);
// // //     return alphabet; 
// // // }
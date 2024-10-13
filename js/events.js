// *****Option 1:derectly set on the html element
{/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button> */}


// *****Option--1:  Add onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// ****Option 3:
const makeBlueButton =document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;//function k call na kore sudu nam ta likhbo
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// ****Option 3.1 : derect declaration without function name declare
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple';//sorasori function declar
};

console.log(purpleButton);
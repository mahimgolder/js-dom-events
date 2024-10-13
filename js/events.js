// *****Option 1:derectly set on the html element
{/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button> */}


// *****Option 2:  Add onclick function on the html element
// IMPORTENT: ***********[We will use this sometimes]
{/* <button onclick="makeRed()">Make Red</button> */}

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


// **option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
        
function makePink(){
    document.body.style.backgroundColor = 'pink'; 
}

// Option : 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
} );


// Option: 4 Final***********[We will use this sometimes]
// IMPORTENCE: ***********[We will use this sometimes]
// document.getElementById('make-goldenrod').addEventListener ('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})
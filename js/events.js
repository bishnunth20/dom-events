function makeRed() {
  document.body.style.backgroundColor = 'red';
}


// by setting function name, handle blue button click
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}


// using anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {
  document.body.style.backgroundColor = 'green';
}


// add event listener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenrod);

function makeGoldenrod() {
  document.body.style.backgroundColor='goldenrod';
}


const hotpinkButton = document.getElementById('make-hotpink');
hotpinkButton.addEventListener('click', function () {
  document.body.style.backgroundColor='hotpink';
})


document.getElementById('make-lightblue').addEventListener('click', function () {
  document.body.style.backgroundColor='lightblue';
})
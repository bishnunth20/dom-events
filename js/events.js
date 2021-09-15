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

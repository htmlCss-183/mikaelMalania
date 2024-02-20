// var someDataFromHTML = document.getElementById('someData').innerHTML;

// alert(someDataFromHTML);

// document.querySelectorAll("#someData")

var newParagraph = document.createElement('p');

newParagraph.innerHTML = 'This is a new paragraph';

document.querySelector('body').appendChild(newParagraph);
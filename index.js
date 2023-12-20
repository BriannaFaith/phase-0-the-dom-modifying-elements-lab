
const main = document.querySelector('main#main');
main.remove();

// New header element with an id of 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// content of the new header element
const yourName = 'Faith Ogendi';
newHeader.textContent = `${yourName} is the champion`;

// Adds the new header element to the document
const body = document.querySelector('body');
// Set the nodeName property of the new element
body.appendChild(newHeader);

'use strict';

function getGreeting(name = 'World') {
  if (name === '') name = 'nobody';
  return `Hello, ${name}!`;
}

function handleGreet(nameInput, messageDiv, event) {
  event.preventDefault();
  messageDiv.textContent = getGreeting(nameInput.value);
}

function handleNameChange(nameInput, greetButton) {
  const name = nameInput.value;
  greetButton.disabled = name.length === 0;
}

function onLoad(document) {
  const nameInput = document.getElementById('nameInput');
  const greetButton = document.getElementById('greetButton');
  const messageDiv = document.getElementById('message');

  nameInput.onkeyup = handleNameChange.bind(null, nameInput, greetButton);
  greetButton.onclick = handleGreet.bind(null, nameInput, messageDiv);
}

// immediately invoked function expression (IIFE)
(() => (window.onload = onLoad.bind(null, document)))();

const inNode = typeof module !== 'undefined';
// istanbul ignore next
if (inNode) module.exports = {
  getGreeting,
  handleGreet,
  handleNameChange,
  onLoad
};

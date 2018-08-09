export function getGreeting(name = 'World') {
  if (name === '') name = 'nobody';
  return `Hello, ${name}!`;
}

export function handleGreet(nameInput, messageDiv, event) {
  event.preventDefault();
  messageDiv.textContent = getGreeting(nameInput.value);
}

export function handleNameChange(nameInput, greetButton) {
  const name = nameInput.value;
  greetButton.disabled = name.length === 0;
}

export function onLoad(document) {
  const nameInput = document.getElementById('nameInput');
  const greetButton = document.getElementById('greetButton');
  const messageDiv = document.getElementById('message');

  // istanbul ignore next
  if (!nameInput) throw new Error('nameInput not found');
  // istanbul ignore next
  if (!greetButton) throw new Error('greetButton not found');

  nameInput.onkeyup = handleNameChange.bind(null, nameInput, greetButton);
  greetButton.onclick = handleGreet.bind(null, nameInput, messageDiv);
}

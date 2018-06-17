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
  // $FlowFixMe
  const nameInput = document.getElementById('nameInput');
  // $FlowFixMe
  const greetButton = document.getElementById('greetButton');
  // $FlowFixMe
  const messageDiv = document.getElementById('message');

  // istanbul ignore next
  if (!nameInput) throw new Error('nameInput not found');
  // istanbul ignore next
  if (!greetButton) throw new Error('greetButton not found');

  nameInput.onkeyup = handleNameChange.bind(null, nameInput, greetButton);
  greetButton.onclick = handleGreet.bind(null, nameInput, messageDiv);
}

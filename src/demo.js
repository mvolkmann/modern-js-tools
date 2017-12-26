// @flow

export function getGreeting(name: string = 'World'): string {
  if (name === '') name = 'nobody';
  return `Hello, ${name}!`;
}

export function handleGreet(
  nameInput: HTMLInputElement,
  messageDiv: HTMLDivElement,
  event: Event
): void {
  event.preventDefault();
  messageDiv.textContent = getGreeting(nameInput.value);
}

export function handleNameChange(
  nameInput: HTMLInputElement,
  greetButton: HTMLButtonElement
): void {
  const name = nameInput.value;
  greetButton.disabled = name.length === 0;
}

export function onLoad(document: Document) {
  // $FlowFixMe
  const nameInput: HTMLInputElement = document.getElementById('nameInput');
  // $FlowFixMe
  const greetButton: HTMLButtonElement = document.getElementById('greetButton');
  // $FlowFixMe
  const messageDiv: HTMLDivElement = document.getElementById('message');

  if (!nameInput) throw new Error('nameInput not found');
  if (!greetButton) throw new Error('greetButton not found');

  nameInput.onkeyup = handleNameChange.bind(null, nameInput, greetButton);
  greetButton.onclick = handleGreet.bind(null, nameInput, messageDiv);
}

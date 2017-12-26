const {
  getGreeting,
  handleGreet,
  handleNameChange,
  onLoad
} = require('./demo.js');

describe('demo', () => {
  test('getGreeting', () => {
    expect(getGreeting('Mark')).toBe('Hello, Mark!');
    expect(getGreeting('')).toBe('Hello, nobody!');
    expect(getGreeting()).toBe('Hello, World!');
  });

  test('handleGreet', () => {
    const nameInput = {value: 'Mark'};
    const messageDiv = {textContent: ''};
    const event = {preventDefault: jest.fn()};
    handleGreet(nameInput, messageDiv, event);
    expect(messageDiv.textContent).toBe('Hello, Mark!');
    expect(event.preventDefault).toBeCalled();
  });

  test('handleNameChange', () => {
    const nameInput = {value: 'Mark'};
    const greetButton = {disabled: true};
    handleNameChange(nameInput, greetButton);
    expect(greetButton.disabled).toBe(false);

    nameInput.value = '';
    handleNameChange(nameInput, greetButton);
    expect(greetButton.disabled).toBe(true);
  });

  test('onLoad', () => {
    const greetButton = {};
    const message = {};
    const nameInput = {};
    const idMap = {greetButton, message, nameInput};
    const document = {
      getElementById: id => idMap[id]
    };
    onLoad(document);
    expect(typeof nameInput.onkeyup).toBe('function');
    expect(typeof greetButton.onclick).toBe('function');
  });
});

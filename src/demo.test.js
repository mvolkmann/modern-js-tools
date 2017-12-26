// @flow

import {getGreeting, handleGreet, handleNameChange, onLoad} from './demo.js';

describe('demo', () => {
  test('getGreeting', () => {
    expect(getGreeting('Mark')).toBe('Hello, Mark!');
    expect(getGreeting('')).toBe('Hello, nobody!');
    expect(getGreeting()).toBe('Hello, World!');
  });

  test('handleGreet', () => {
    //const nameInput = new HTMLInputElement();
    const nameInput = document.createElement('input');
    nameInput.value = 'Mark';
    //const messageDiv = new HTMLDivElement();
    const messageDiv = document.createElement('div');
    messageDiv.textContent = '';
    const event = new Event('click');
    // $FlowFixMe - allow replacing this method
    event.preventDefault = jest.fn();

    handleGreet(nameInput, messageDiv, event);
    expect(messageDiv.textContent).toBe('Hello, Mark!');
    expect(event.preventDefault).toBeCalled();
  });

  test('handleNameChange', () => {
    //const nameInput = new HTMLInputElement();
    const nameInput = document.createElement('input');
    nameInput.value = 'Mark';
    //const greetButton = new HTMLButtonElement();
    const greetButton = document.createElement('button');
    greetButton.disabled = true;

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
    const document = new Document();
    // $FlowFixMe - allow replacing this method
    document.getElementById = id => idMap[id];

    onLoad(document);
    expect(typeof nameInput.onkeyup).toBe('function');
    expect(typeof greetButton.onclick).toBe('function');
  });
});

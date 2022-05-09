import getGuess from './functions/guess/index.js';
import displayFunctions from './functions/display/index.js';

document.addEventListener("DOMContentLoaded", () => displayFunctions.generateDisplay());

const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", (event) => getGuess(event));

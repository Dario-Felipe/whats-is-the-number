import constants from './constants.js';

import getRightNumber from './services/api.js';

import guessFunctions from "./functions/guess/index.js";
import displayFunctions from './functions/display/index.js';

var rightNumber;
const sendButton = document.querySelector(`#${constants.classes.SEND_BUTTON}`);
const playAgainButton = document.querySelector(`.${constants.classes.PLAY_AGAIN_BUTTON}`);

async function initialize()  {
  const resultsContent = document.querySelector(`.${constants.classes.RESULTS_CONTENT}`);
  const searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);

  displayFunctions.generateDisplay();

  document.querySelector(`.${constants.classes.DISPLAY_TITLE}`)?.remove();
  resultsContent.classList.remove( constants.classes.SUCCESS, constants.classes.ERROR);
  playAgainButton.classList.add(constants.classes.HIDDEN);

  sendButton.disabled = false;
  searchInput.disabled = false;

  rightNumber = await getRightNumber();

  if(!rightNumber.value) {
    guessFunctions.validateGuess("ERRO", constants.guessStatus.ERROR);
    displayFunctions.generateDisplay(rightNumber.StatusCode);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

playAgainButton.addEventListener("click", () => initialize());
sendButton.addEventListener("click", (event) => guessFunctions.getGuess(event, rightNumber.value));

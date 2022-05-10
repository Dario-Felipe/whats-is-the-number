import constants from './constants.js';
import getRightNumber from './services/api.js';
import getGuess from './functions/guess/index.js';
import displayFunctions from './functions/display/index.js';

var rightNumber;
const sendButton = document.querySelector(`#${constants.classes.SEND_BUTTON}`);
const playAgainButton = document.querySelector(`.${constants.classes.PLAY_AGAIN_BUTTON}`);

async function initialize()  {
  const resultsContent = document.querySelector(`.${constants.classes.RESULTS_CONTENT}`);

  displayFunctions.generateDisplay();

  document.querySelector(`.${constants.classes.DISPLAY_TITLE}`)?.remove();
  resultsContent.classList.remove( constants.classes.SUCCESS, constants.classes.ERROR);
  playAgainButton.classList.add(constants.classes.HIDDEN);

  let searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);

  sendButton.disabled = false;
  searchInput.disabled = false;

  rightNumber = await getRightNumber();

  if(!rightNumber.value) {
    displayFunctions.generateDisplay(rightNumber.StatusCode);
    resultsContent.classList.add(constants.classes.ERROR);
    playAgainButton.classList.toggle(constants.classes.HIDDEN);

    sendButton.disabled = true;
    searchInput.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

playAgainButton.addEventListener("click", () => initialize());
sendButton.addEventListener("click", (event) => getGuess(event, rightNumber.value));

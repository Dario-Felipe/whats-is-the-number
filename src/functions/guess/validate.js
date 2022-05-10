import constants from "../../constants.js";

export default function validateGuess(message, status = '') {
  document.querySelector(`.${constants.classes.DISPLAY_TITLE}`)?.remove();

  const sendButton = document.querySelector(`#${constants.classes.SEND_BUTTON}`);
  const searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);
  const resultsContent = document.querySelector(`.${constants.classes.RESULTS_CONTENT}`);

  const displayTitle = document.createElement('h5');
  displayTitle.classList.add(constants.classes.DISPLAY_TITLE);

  if(status.length) {
    resultsContent.classList.add(status);

    document.querySelector(`.${constants.classes.PLAY_AGAIN_BUTTON}`).classList.toggle(constants.classes.HIDDEN);

    searchInput.disabled = true;
    sendButton.disabled = true;
  }

  displayTitle.textContent = message
  resultsContent.prepend(displayTitle);
}
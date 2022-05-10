import displayFunctions from "../display/index.js";
import constants from "../../constants.js";

export default function getGuess(event, rightNumber) {
  event.preventDefault();

  const numberMask = /^[0-9]+$/;
  let sendButton = document.querySelector(`#${constants.classes.SEND_BUTTON}`);
  let searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);

  searchInput.value = Number(searchInput.value);

  if (!searchInput.value.match(numberMask)) {
    alert("Apenas números são permitidos");

    searchInput.value = "";
    return;
  }

  if (searchInput.value < 1 || searchInput.value > 300) {
    alert("Palpite mínimo: 1, Palpite máximo: 300");

    searchInput.value = "";
    return;
  }

document.querySelector(`.${constants.classes.DISPLAY_TITLE}`)?.remove();

const resultContent = document.querySelector(`.${constants.classes.RESULTS_CONTENT}`);

const displayTitle = document.createElement('h5');
displayTitle.classList.add("display-title");

let message;

 if(searchInput.value > rightNumber) {
  message = constants.guessResults.NUMBER_IS_SMALL;
 } else if(searchInput.value < rightNumber) {
  message = constants.guessResults.NUMBER_IS_BIG;
 } else {
  message = constants.guessResults.NUMBER_IS_RIGHT;

  resultContent.classList.add("success");

  document.querySelector(`.${constants.classes.PLAY_AGAIN_BUTTON}`).classList.toggle(constants.classes.HIDDEN);

  searchInput.disabled = true;
  sendButton.disabled = true;
 }

  displayTitle.textContent = message
  resultContent.prepend(displayTitle);

  displayFunctions.generateDisplay(searchInput.value);
  searchInput.value = "";
}
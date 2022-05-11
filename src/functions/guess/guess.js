import constants from "../../constants/index.js";
import displayFunctions from "../display/index.js";

import validateGuess from "./validate.js";

export default function getGuess(event, rightNumber) {
  event.preventDefault();

  const numberMask = /^[0-9]+$/;
  let searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);

  searchInput.value = Number(searchInput.value);

  if (!searchInput.value.match(numberMask)) {
    alert(constants.alertMessages.ONLY_NUMBERS);

    searchInput.value = "";
    return;
  }

  if (searchInput.value < constants.api.params.MIN || searchInput.value > constants.api.params.MAX) {
    alert(constants.alertMessages.NUMBER_MIN_MAX);

    searchInput.value = "";
    return;
  }

let message;
let status;

 if (searchInput.value > rightNumber) {
  message = constants.guessResults.NUMBER_IS_SMALL;
 } else if(searchInput.value < rightNumber) {
  message = constants.guessResults.NUMBER_IS_BIG;
 } else {
  message = constants.guessResults.NUMBER_IS_RIGHT;
  status = constants.guessStatus.SUCCESS;
 }

  validateGuess(message, status);

  displayFunctions.generateDisplay(searchInput.value);
  searchInput.value = "";
}
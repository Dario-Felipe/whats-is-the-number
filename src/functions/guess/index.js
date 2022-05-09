import displayFunctions from "../display/index.js";
import constants from "../../constants.js";

export default function getGuess(event) {
  event.preventDefault();

  const numberMask = /^[0-9]+$/;
  let searchInput = document.querySelector(`.${constants.classes.SEARCH_INPUT}`);

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
  
  displayFunctions.generateDisplay(searchInput.value);
  searchInput.value = "";
}
import constants from "../../constants.js";

export default function clearDisplays() {
  document.querySelector(`.${constants.classes.DISPLAY_CONTENT}`).innerHTML = "";
}
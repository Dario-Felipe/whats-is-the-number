import constants from "../../constants/index.js";

export default function clearDisplays() {
  document.querySelector(`.${constants.classes.DISPLAY_CONTENT}`).innerHTML = "";
}
import constants from "../../constants/index.js";

import clearDisplays from './clear.js';
import fillSegments from "./fillSegments.js";

export default function generateDisplay(number = 0) {
  const displaysNumbers = Array.from(number.toString());
  const segments = ["A", "B", "C", "D", "E", "F", "G", "H"];

  clearDisplays();

  displaysNumbers.forEach((displayNumber) => {
    let newDisplay = document.createElement("div");
    newDisplay.classList.add(constants.classes.DISPLAY);

    segments.forEach((segment) => {
      let newSegment = document.createElement("div");
      newSegment.classList.add(constants.classes.SEGMENT);
      newSegment.classList.add(segment);

      newDisplay.appendChild(newSegment);
    });

    fillSegments(displayNumber, newDisplay);

    document.querySelector(`.${constants.classes.DISPLAY_CONTENT}`).appendChild(newDisplay);
  });
}
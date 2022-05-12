import generateDisplay from "./generate.js";
import fillSegments from "./fillSegments.js";
import clearDisplays from './clear.js';

const displayFunctions = {
  generateDisplay,
  fillSegments,
  clearDisplays
}

export default displayFunctions;

/*
  generateDisplay() - Function responsible for generating a seven-segment number with divs. For each number you must create a display.

  fillSegments() - Function responsible for "painting" the displays from a recipe for each number.

  clearDisplays() - Function responsible for clearing all seven-segment displays that are rendered on screen.
*/

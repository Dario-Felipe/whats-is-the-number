import getGuess from "./guess.js";
import validateGuess from "./validate.js";

const guessFunctions = {
  getGuess,
  validateGuess
}

export default guessFunctions;

/*
  getGuess() - Function responsible for taking guesses (only numbers) and validating according to the minimum and maximum value.

  validateGuess() - Function responsible for validating where the guesses are in relation to the correct value coming from the API. It also validates in case of success or error.
*/

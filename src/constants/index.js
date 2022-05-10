const constants = {
  api: {
    URL: 'https://us-central1-ss-devops.cloudfunctions.net/',
    params: {
      MIN: 1,
      MAX: 300
    }
  },
  classes: {
    RESULTS_CONTENT: 'results-content',
    DISPLAY_CONTENT: 'display-content',
    DISPLAY_TITLE: 'display-title',
    DISPLAY: 'display',
    SEGMENT: 'segment',
    FILLED: 'filled',
    PLAY_AGAIN_BUTTON: 'play-again-button',
    HIDDEN: 'hidden',
    ERROR: 'error',
    SUCCESS: 'success',
    SEARCH_INPUT: 'search-input',
    SEND_BUTTON: 'send-button'
  },
  guessResults: {
    NUMBER_IS_BIG: 'É maior',
    NUMBER_IS_SMALL: 'É menor',
    NUMBER_IS_RIGHT: 'Você acertou!!!'
  },
  guessStatus: {
    SUCCESS: 'success',
    ERROR: 'error'
  },
  alertMessages: {
    ONLY_NUMBERS: 'Apenas números são permitidos',
    NUMBER_MIN_MAX: 'Palpite mínimo: 1, Palpite máximo: 300',
    SOMETHING_IS_WRONG: 'Deu algo errado, tente novamente mais tarde :(',
  }
}

export default constants;
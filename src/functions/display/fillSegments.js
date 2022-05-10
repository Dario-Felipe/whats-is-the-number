import constants from "../../constants/index.js";

export default function fillSegments(number, display) {
  let segmentsToFill = [];

  switch (number) {
    case "0":
      segmentsToFill = ["A", "B", "C", "D", "E", "F"];
      break;

    case "1":
      segmentsToFill = ["B", "C"];
      break;

    case "2":
      segmentsToFill = ["A", "B", "D", "E", "G", "H"];
      break;

    case "3":
      segmentsToFill = ["A", "B", "C", "D", "G", "H"];
      break;

    case "4":
      segmentsToFill = ["B", "C", "F", "G", "H"];
      break;

    case "5":
      segmentsToFill = ["A", "C", "D", "F", "G", "H"];
      break;

    case "6":
      segmentsToFill = ["A", "C", "D", "E", "F", "G", "H"];
      break;

    case "7":
      segmentsToFill = ["A", "B", "C"];
      break;

    case "8":
      segmentsToFill = ["A", "B", "C", "D", "E", "F", "G", "H"];
      break;

    case "9":
      segmentsToFill = ["A", "B", "C", "D", "F", "G", "H"];
      break;

    default:
      segmentsToFill = [];
  }

  const segments = Array.from(display.childNodes);

  segments.forEach((segment) => {
    if (segmentsToFill.includes(segment.getAttribute("class").split(" ")[1])) {
      segment.classList.add(constants.classes.FILLED);
    }
  });
}
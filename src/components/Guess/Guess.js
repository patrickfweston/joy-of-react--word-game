import React from "react";

import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

const EMPTY_CELLS = range(0, WORD_LENGTH).map(() => ({
  letter: "",
  status: "",
}));

function Guess({ word }) {
  word = word ?? EMPTY_CELLS;

  return (
    <p className="guess">
      {word.map(({ letter, status }, index) => (
        <span key={index} className={`${status} cell`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

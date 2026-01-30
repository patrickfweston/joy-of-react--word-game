import React from "react";

import { WORD_LENGTH } from "../../constants";

function GuessForm({ handleGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const input = event.target.elements["guess-input"];
        const guess = input.value;
        input.value = "";
        handleGuess(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern={`.{${WORD_LENGTH},${WORD_LENGTH}}`}
        title={`You must enter a ${WORD_LENGTH} letter word`}
        maxLength={WORD_LENGTH}
        required
        onChange={(event) => {
          event.target.value = event.target.value.toUpperCase();
        }}
      />
    </form>
  );
}

export default GuessForm;

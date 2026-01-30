import React from "react";

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
        pattern=".{5,5}"
        title="You must enter a five letter word"
        maxLength={5}
        required
        onChange={(event) => {
          event.target.value = event.target.value.toUpperCase();
        }}
      />
    </form>
  );
}

export default GuessForm;

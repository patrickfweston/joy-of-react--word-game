import React from "react";

import { sample } from "../../utils";
import Guess from "../Guess/Guess";
import GuessForm from "../GuessForm/GuessForm";
import { WORDS } from "../../data";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import StatusBanner from "../StatusBanner/StatusBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => ""),
  );
  const [currentGuessCount, setCurrentGuessCount] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("");

  function handleGuess(guess) {
    // Update the guesses array with the new guess.
    const newGuesses = [...guesses];
    newGuesses[currentGuessCount] = guess;
    setGuesses(newGuesses);

    // Increment the current guess count.
    setCurrentGuessCount(currentGuessCount + 1);

    // Check for win/loss condition.
    if (guess === answer) {
      setGameStatus("won");
    } else if (currentGuessCount + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <Guess key={index} word={checkGuess(guess, answer)} />
        ))}
      </div>

      <GuessForm handleGuess={handleGuess} />

      <StatusBanner
        gameStatus={gameStatus}
        numGuesses={currentGuessCount}
        answer={answer}
      />
    </>
  );
}

export default Game;

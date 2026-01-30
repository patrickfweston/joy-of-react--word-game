import React from "react";

import { GAME_STATUS } from "../../constants";

function StatusBanner({ gameStatus, numGuesses, answer }) {
  if (gameStatus === GAME_STATUS.PLAYING) {
    return null;
  }

  if (gameStatus === GAME_STATUS.WON) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default StatusBanner;

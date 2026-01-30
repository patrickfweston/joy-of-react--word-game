import React from "react";

function StatusBanner({ gameStatus, numGuesses, answer }) {
  return (
    <>
      {gameStatus &&
        (gameStatus === "won" ? (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{numGuesses} guesses</strong>.
            </p>
          </div>
        ) : (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        ))}
    </>
  );
}

export default StatusBanner;

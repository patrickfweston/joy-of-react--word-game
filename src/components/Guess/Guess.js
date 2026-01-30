import React from "react";

function Guess({ word }) {
  word = word ?? [
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
  ];

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

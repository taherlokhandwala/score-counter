import React, { useState, useEffect } from "react";

const PlayerScore = ({
  playerName,
  value,
  isReset,
  resetComplete,
  modalActionShow,
}) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isReset) {
      setScore(0);
      resetComplete();
    }
  });

  const increase = () => {
    setScore(score + value);
  };

  const decrease = () => {
    if (score - value >= 0) setScore(score - value);
  };

  const deletePlayer = () => {
    modalActionShow(
      playerName,
      "Deleting a player will reset all scores. <br />Do you want to delete Player ?"
    );
  };

  return (
    <div className="score-container">
      <h2>{playerName}</h2>
      <div className="score">
        <p className="fas fa-minus" onClick={decrease}></p>
        <h2>{score}</h2>
        <p className="fas fa-plus" onClick={increase}></p>
        <button type="button" className="delete-button" onClick={deletePlayer}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default PlayerScore;

import React, { useState } from "react";
import "./css/App.css";
import "./css/all.css";

import PlayerScore from "./PlayerScore";
import Modal from "./Modal";
import ModalReset from "./ModalReset";

function App() {
  const [name, setName] = useState("");
  const [increment, setIncrement] = useState(0);
  const [players, setPlayers] = useState([]);
  const [resetScores, setResetScores] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalReset, setShowModalReset] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };

  const addPlayer = (event) => {
    if (event.key === "Enter") {
      setPlayers((prevPlayers) => [...prevPlayers, name]);
      setName("");
    }
  };

  const updateIncrements = (event) => {
    const value = event.target.value;
    if (value < 0) setIncrement(0);
    else setIncrement(event.target.value);
  };

  const resetPlayerScores = () => {
    setResetScores(true);
  };

  const resetComplete = () => {
    setResetScores(false);
  };

  const deletePlayer = (playerName) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((player) => {
        if (player !== playerName) {
          return true;
        } else return false;
      });
    });
    setResetScores(true);
  };

  const modalActionShow = (playerName) => {
    setShowModal(true);
    setPlayerToDelete(playerName);
  };

  const modalActionHide = () => {
    setShowModal(false);
  };

  const modalActionHideReset = () => {
    setShowModalReset(false);
  };

  return (
    <div className="App">
      <Modal
        show={showModal}
        modalActionHide={modalActionHide}
        playerToDelete={playerToDelete}
        deletePlayer={deletePlayer}
      />
      <ModalReset
        show={showModalReset}
        modalActionHide={modalActionHideReset}
        resetPlayerScores={resetPlayerScores}
      />
      <div className="header">
        <h2>Score Counter</h2>
      </div>
      <div className="info-container">
        <input
          type="text"
          placeholder="Enter Player's Name"
          value={name}
          onChange={updateName}
          onKeyPress={addPlayer}
        />
        <input
          type="number"
          placeholder="Increments"
          value={increment}
          onChange={updateIncrements}
        />
        <button
          type="button"
          className="reset-score-button"
          onClick={() => {
            setShowModalReset(true);
          }}
        >
          Reset Scores
        </button>
      </div>
      <div className="scores-container">
        {players &&
          players.map((player, index) => (
            <PlayerScore
              playerName={player}
              value={increment === "" ? 0 : parseInt(increment)}
              key={index}
              isReset={resetScores}
              resetComplete={resetComplete}
              modalActionShow={modalActionShow}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

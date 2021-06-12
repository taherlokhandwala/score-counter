import React from "react";

export default function Modal({
  show,
  modalActionHide,
  playerToDelete,
  deletePlayer,
}) {
  if (show) {
    return (
      <div className="modal-container">
        <div className="modal">
          <h3>
            Deleting a player will reset all scores. <br />
            Do you want to delete Player ?
          </h3>
          <div className="action-button-container">
            <button
              className="yes-button"
              onClick={() => {
                modalActionHide();
                deletePlayer(playerToDelete);
              }}
            >
              Yes
            </button>
            <button
              className="cancel-button"
              onClick={() => {
                modalActionHide();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
}

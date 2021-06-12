import React from "react";

export default function Modal({ show, modalActionHide, resetPlayerScores }) {
  if (show) {
    return (
      <div className="modal-container">
        <div className="modal">
          <h3>Do you want to reset all scores?</h3>
          <div className="action-button-container">
            <button
              className="yes-button"
              onClick={() => {
                modalActionHide();
                resetPlayerScores();
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

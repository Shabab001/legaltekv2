import React from "react";
import ReactDOM from "react-dom";
import "../../assets/css/confirmModal.css";

function ConfirmModal(props) {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div className="confirmModalOverlay">
      <div className="confirmModal">
        <div className="confirmModalHeader">
          {props.headerText && props.headerText}{" "}
          <div className="confirmModalCloseBtn" onClick={() => props.onClose()}>
            <i className="fa fa-close" />
          </div>
        </div>
        <div className="confirmModalBody">
          {props.bodyText && props.bodyText}
        </div>
        <div className="confirmModalFooter">
          <button
            className=""
            onClick={props.acceptMethod && props.acceptMethod}
          >
            {props.acceptText ? props.acceptText : "Yes"}
          </button>
          <button className="" onClick={props.onClose && props.onClose}>
            {props.declineText ? props.declineText : "No"}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ConfirmModal;

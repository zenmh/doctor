import React from "react";

const ConfirmationModal = ({
  title,
  info,
  actionBtnName,
  action,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{info}</p>
          <div className="modal-actionn flex justify-evenly">
            <label
              htmlFor="confirmation-modal"
              className="btn btn-outline btn-warning btn-sm"
            >
              Cancel
            </label>
            <label
              htmlFor="confirmation-modal"
              className="btn btn-error btn-sm"
              onClick={() => action(modalData)}
            >
              {actionBtnName}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

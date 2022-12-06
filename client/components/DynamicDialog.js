import React from "react";
import PropTypes from "prop-types";

const DynamicDialog = ({
  title,
  message,
  confirmButtonText,
  onConfirm,
  onClose,
}) => {
  return (
    <div className="sectionWrapper">
      <div className="modalWrapper">
        <div className="modalData">
          <div className="closeButtonWrapper">
            <div className="closeButton" onClick={() => onClose()}></div>
          </div>
          <div className="modalTitle">{title}</div>
          <div className="modalMessage">{message}</div>
          <div className="buttonWrapper">
            <button className="confirmButton" onClick={() => onConfirm()}>
              {confirmButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DynamicDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DynamicDialog;

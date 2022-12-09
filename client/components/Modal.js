import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  if (!props.open) return null;
  return (
    <div onClick={props.onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        
        className="modalContainer" >
        <div>
          <p className="closeBtn" onClick={props.onClose}>
            X
          </p>
          <div className="content">
            <p className="title">FARM AND TURF SALE!</p>
            <p className="paragraph">
              Start your path to becoming a virtual kingpin by generating SEED
              and BUD! Get all you need in the upcoming Turf and Farm sale!
            </p>
            <a target="_blank" href="https://www.linkedin.com/">
                <img src='/images/Group1.png'/>
            </a>
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const CallToAction = ({
  Title,
  Message,
  ConfirmButtonText,
  ConfirmCallBack,
}) => {
  return (
    <div className="sectionWrapper">
      <div className="modalWrapper">
        <div className="modalData">
          <div className="modalTitle">{Title}</div>
          <div className="modalMessage modalMessage">{Message}</div>
          <Button
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log("clicked");
            }}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  Title: PropTypes.string.isRequired,
  Message: PropTypes.string.isRequired,
  ConfirmButtonText: PropTypes.string.isRequired,
  ConfirmCallBack: PropTypes.func.isRequired,
};

export default CallToAction;

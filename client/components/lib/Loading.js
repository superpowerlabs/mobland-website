// eslint-disable-next-line no-undef
import React from "react";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line no-undef
export default class Loading extends React.Component {
  render() {
    const { variant, animation } = this.props;
    return (
      <div className={"centered"}>
        <Spinner
          variant={variant}
          animation={animation || "border"}
          role="status"
        ></Spinner>
      </div>
    );
  }
}

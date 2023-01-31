/* eslint-disable react/prop-types */
import React from "react";

function TwoColumns(props) {
  return (
    <div className={"two-columns"} style={props.style || {}}>
      {props.center ? (
        <div style={{ textAlign: "center", color: props.color || "inherit" }}>
          {props.bold ? <b>{props.center}</b> : props.center}
        </div>
      ) : props.empty ? (
        <div className={"two-columns-left"} style={{ color: "transparent" }}>
          -
        </div>
      ) : (
        <div>
          <div
            className={"two-columns-left"}
            style={{ color: props.color || "inherit" }}
          >
            {typeof props.left === "undefined" ? "" : props.left}
          </div>
          <div
            className={"two-columns-right"}
            style={{ color: props.color || "inherit" }}
          >
            {typeof props.right === "undefined" ? "" : props.right}
          </div>
        </div>
      )}
    </div>
  );
}
export default TwoColumns;

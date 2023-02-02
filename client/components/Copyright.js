/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Link from "@mui/material/Link";

class Copyright extends Component {
  render() {
    return (
      <div className={"centered"}>
        {this.props.children}
        <div className={"footerNote"}>
          <Link color="#e0e0e0" href={"https://mob.land"}>
            MOBLAND © 2023, All rights reserved
          </Link>
        </div>
      </div>
    );
  }
}

export default Copyright;

/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Link from "@mui/material/Link";

class Copyright extends Component {
  render() {
    return (
      <div className={"centered"}>
        <img
          alt={"logo"}
          src={"/images/logo-m.png"}
          style={{ width: 44, marginBottom: 8 }}
        />
        {this.props.children}
        <div className={"footerNote"}>
          <Link color="inherit" href={"https://mob.land"}>
            Copyright © 2022 MOBLAND - All right reserved
          </Link>
        </div>
      </div>
    );
  }
}

export default Copyright;

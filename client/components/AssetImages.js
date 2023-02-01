import React, { Component } from "react";

class AssetImages extends Component {
  render() {
    return (
      <div className="assetImages">
        <img
          alt={"Turf"}
          src={"/images/turf.png"}
          style={{ position: "relative", zIndex: "5" }}
        />
        <img
          alt={"Blueprint"}
          src={"/images/blueprint.png"}
          style={{
            marginTop: "-43%",
            width: "70%",
            zIndex: "1",
            position: "relative",
            left: "-25%",
          }}
        />
        <img
          alt={"Genesis Pass"}
          style={{
            width: "36%",
            marginTop: "-30%",
            position: "relative",
            left: "18%",
            transform: "rotate(45deg)",
          }}
          src={"/images/genesis-pass.png"}
        />
      </div>
    );
  }
}

export default AssetImages;
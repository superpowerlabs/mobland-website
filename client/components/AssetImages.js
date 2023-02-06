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
            marginTop: "-51%",
            zIndex: "1",
            position: "relative",
            left: "-31%",
          }}
        />
        <img
          alt={"Genesis Pass"}
          style={{
            width: "39%",
            marginTop: "-56%",
            position: "relative",
            left: "-19%",
            transform: "rotate(30deg)"
          }}
          src={"/images/genesis-pass.png"}
        />
      </div>
    );
  }
}

export default AssetImages;

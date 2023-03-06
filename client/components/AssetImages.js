import React, { Component } from "react";

import Turf from "../assets/images/turf.png.webp";
import Blueprint from "../assets/images/blueprint-tilted.png.webp";
import GenesisPass from "../assets/images/genesis-pass.png.webp";
class AssetImages extends Component {
  render() {
    return (
      <div className="assetImages">
        <img
          alt="Turf"
          src={Turf}
          style={{ position: "relative", zIndex: "5" }}
        />
        <img
          alt="Blueprint"
          src={Blueprint}
          style={{
            marginTop: "-51%",
            zIndex: "1",
            position: "relative",
            left: "-31%",
          }}
        />
        <img
          alt="Genesis Pass"
          src={GenesisPass}
          style={{
            width: "39%",
            marginTop: "-56%",
            position: "relative",
            left: "-19%",
            transform: "rotate(30deg)",
          }}
        />
      </div>
    );
  }
}

export default AssetImages;

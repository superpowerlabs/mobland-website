import React, { Component } from "react";
import SynrDouble from "../assets/images/optimized/synr-double.png.webp";
import SsynrSingle from "../assets/images/optimized/ssynr-single.png.webp";
import SeedSingle from "../assets/images/optimized/seed-single-coin.png.webp";
class Coins extends Component {
  render() {
    return (
      <div className="coins">
        <img alt="Synr Coins" src={SynrDouble} style={{ paddingTop: "10%" }} />
        <img
          alt="sSynr Coin"
          src={SsynrSingle}
          style={{
            marginTop: "-30%",
            width: "75%",
            zIndex: "1",
            position: "relative",
            left: "20%",
          }}
        />
        <img
          alt="Seed Coin"
          src={SeedSingle}
          style={{
            width: "60%",
            marginTop: "-30%",
            position: "relative",
            left: "-25%",
            marginBottom: "-10%",
          }}
        />
      </div>
    );
  }
}

export default Coins;

import React, { Component } from "react";

class Coins extends Component {
  render() {
    return (
      <div className="coins">
        <img alt={"Synr Coins"} src={"/images/synr-double.png"} />
        <img
          alt={"sSynr Coin"}
          src={"/images/ssynr-single.png"}
          style={{
            marginTop: "-25%",
            width: "60%",
            zIndex: "1",
            position: "relative",
            left: "25%",
          }}
        />
        <img
          alt={"Seed Coin"}
          style={{
            width: "45%",
            marginTop: "-25%",
            position: "relative",
            left: "15%",
          }}
          src={"/images/seed-single-coin.png"}
        />
      </div>
    );
  }
}

export default Coins;

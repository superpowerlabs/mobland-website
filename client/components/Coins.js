import React, { Component } from "react";

class Coins extends Component {
  render() {
    return (
      <div className="coins">
        <img
          alt={"Synr Coins"}
          src={"/images/synr-double.png"}
          style={{ paddingTop: "10%" }}
        />
        <img
          alt={"sSynr Coin"}
          src={"/images/ssynr-single.png"}
          style={{
            marginTop: "-30%",
            width: "75%",
            zIndex: "1",
            position: "relative",
            left: "20%",
          }}
        />
        <img
          alt={"Seed Coin"}
          style={{
            width: "60%",
            marginTop: "-30%",
            position: "relative",
            left: "-25%",
            marginBottom: "-10%",
          }}
          src={"/images/seed-single-coin.png"}
        />
      </div>
    );
  }
}

export default Coins;

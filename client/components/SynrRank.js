import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class SynrRank extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("/images/grafiti-wall.png")',
        }}
      >
        <Grid container className={"stats"}>
          <Grid item xs={4}>
            <img
              alt={"Gangster"}
              src={"/images/gangster-five.png"}
              style={{ width: "100%", marginTop: "-21%" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={"Center"}>
              <div className={"wrong"}>500k+</div>
              <div className={"underWrong"}>
                SYNNERS in our community <br />
                and growing every day!
              </div>
            </div>{" "}
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={"Center"}>
              <div className={"wrong"}>#1 IN Vol</div>
              <div className={"underWrong"}>
                Ranked #1 on Binance NFT
                <br />
                all-time volume
              </div>
            </div>{" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SynrRank;

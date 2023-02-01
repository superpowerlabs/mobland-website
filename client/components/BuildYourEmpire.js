import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class BuildYourEmpire extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            borderTop: "#404143 solid",
            borderBottom: "#404143 solid",
            backgroundImage: 'url("/images/woodland-bg.jpg")',
          }}
        >
          <Grid container>
            <Grid item xs={false} md={1} />
            <Grid item xs={12} md={7}>
              <Grid item xs={12} md={12}>
                <div className="title">BUILD YOUR EMPIRE </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <p className="textSub">
                  Own TURF. Grow BUD. Run MOBLAND. <br />
                  <br /> With ground-breaking cross-chain functionality and
                  headed up by Chief Grow Officers, Snoop Dogg and Champ Medici,
                  we’re proud to announce the{" "}
                  <span style={{ color: "#ffee03", fontWeight: "bold" }}>
                    SHADOW MARKET
                  </span>
                  . Stake SEED, grow digital weed and defend your territory from
                  other players and mercenaries!{" "}
                </p>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="empireButtonDiv">
                  <a
                    className="empireButton"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    Shadow Market
                  </a>{" "}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                alt={"Farm"}
                src={"/images/farm-night.png"}
                style={{
                  width: "115%",
                  marginLeft: "-20%",
                  paddingTop: "18px",
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default BuildYourEmpire;

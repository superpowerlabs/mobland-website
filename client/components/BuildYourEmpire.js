import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class BuildYourEmpire extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            // marginTop: "-4%",
            border: "#404143 solid",
            backgroundImage: 'url("/images/woodland-bg.jpg")',
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={7}>
              <Grid item xs={12}>
                <div className="welcome">BUILD YOUR EMPIRE </div>
              </Grid>
              <Grid item xs={12}>
                <div className="welcomeSub">
                  Own TURF. Grow BUD. Run MOBLAND. <br /> With ground-breaking
                  cross-chain functionality and headed up by Chief Grow
                  Officers, Snoop Dogg and Champ Medici, we’re proud to announce
                  the SHADOW MARKET. Stake SEED, grow digital weed and defend
                  your territory from other players and mercenaries!{" "}
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    Shadow Market
                  </a>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img
                alt={"Farm"}
                src={"/images/farm-night.png"}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default BuildYourEmpire;

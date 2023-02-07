import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class BuildYourEmpire extends Component {
  render() {
    return (
      <div
        style={{
          borderTop: "#404143 solid",
          borderBottom: "#404143 solid",
          backgroundImage: 'url("/images/woodland-bg.jpg")',
          zIndex: "1",
          position: "relative",
          // clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      >
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={5}>
            <Grid item xs={12} sm={12}>
              <div className="title">BUILD YOUR EMPIRE </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <p className="textSub">
                Own TURF. Grow BUD. Run MOBLAND. <br />
                <br /> With ground-breaking cross-chain functionality and headed
                up by Chief Grow Officers, Snoop Dogg and Champ Medici, we’re
                proud to announce the{" "}
                <span style={{ color: "#ffee03", fontWeight: "bold" }}>
                  SHADOW MARKET
                </span>
                . Stake SEED, grow digital weed and defend your territory from
                other players and mercenaries!{" "}
              </p>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div className="empireButtonDiv">
                <a className="button" href="https://shadowmarket.mob.land">
                  SHADOW MARKET
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={"overFarm"}>
            <img
              alt={"Farm"}
              src={"/images/farm-night.png"}
              className="farmImage"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BuildYourEmpire;

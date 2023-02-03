import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";
import { Player, ControlBar } from "video-react";

class StakingPools extends Component {
  render() {
    return (
      <div>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          autoPlay={true}
          muted={true}
          loop={isMobileOnly ? true : false}
          src={
            isMobileOnly
              ? "/images/header-gangster-mobile.mp4"
              : "/images/header-gangster.mp4"
          }
        >
          <ControlBar className="controlbar" />
        </Player>
        <Grid
          container
          style={{
            marginTop: isMobileOnly ? "-73%" : "-20%",
            zIndex: "1",
            position: "relative",
            marginBottom: "3%",
          }}
        >
          <Grid item xs={false} sm={6} />
          <Grid item xs={12} sm={6}>
            <Grid item xs={12}>
              <div className="welcome">ENTER THE MAFIA METAVERSE</div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="welcomeSub">
                Step into MOBLAND and take on the world of a modern crime
                syndicate.
              </div>
            </Grid>
            <Grid container style={{ marginTop: 40 }}>
              <Grid item xs={false} sm={2} />
              <Grid
                style={{
                  display: "flex",
                  justifyContent: isMobileOnly ? "center" : "right",
                  paddingRight: isMobileOnly ? 0 : 20,
                }}
                item
                xs={6}
                sm={4}
              >
                <a
                  className="button"
                  href="https://staking.mob.land/core/dashboard"
                >
                  CORE POOL
                </a>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: isMobileOnly ? "center" : "left",
                  paddingLeft: isMobileOnly ? 0 : 20,
                }}
                item
                xs={6}
                sm={4}
              >
                <a
                  className="button buttonSeed"
                  href="https://staking.mob.land/seed/dashboard"
                >
                  SEED POOL
                </a>
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Grid>
        </Grid>
      </div>
      // </div>
    );
  }
}

export default StakingPools;

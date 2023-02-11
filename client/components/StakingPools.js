import React from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import { Player, ControlBar } from "video-react";
import Base from "./Base";

class StakingPools extends Base {
  constructor(props) {
    super(props);

    this.state = {
      videoEnded: isMobileOnly ? true : false,
    };
    this.bindMany(["handleVideoEnded"]);
  }

  handleVideoEnded() {
    this.setState({ videoEnded: true });
  }

  render() {
    if (!this.state.videoEnded) {
      return (
        <div>
          <Player
            ref={(player) => {
              this.player = player;
            }}
            autoPlay={true}
            muted={true}
            loop={false}
            src={
              isMobileOnly
                ? "https://assets.mob.land/videos/header-gangster-mobile.mp4"
                : "https://assets.mob.land/videos/header-gangster.mp4"
            }
            onEnded={this.handleVideoEnded}
          >
            <ControlBar className="controlbar" />
          </Player>{" "}
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: 'url("/images/justicia-dark.jpg")',
            paddingTop: "10%",
          }}
        >
          <Grid
            container
            style={{
              zIndex: "1",
              position: "relative",
            }}
          >
            {isMobileOnly ? null : (
              <Grid
                style={{ display: "flex", justifyContent: "flex-end" }}
                item
                xs={false}
                sm={5}
              >
                <img
                  alt={"Uzi Gangster"}
                  src={"/images/gangster-uzi.png"}
                  className="gangsterUzi"
                />
              </Grid>
            )}
            <Grid item xs={10} sm={7}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <img
                  alt={"Banner"}
                  src={"/images/banner.png"}
                  className="banner"
                />
                <Grid item xs={12}>
                  <div className="welcome">ENTER THE MAFIA METAVERSE</div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div className="welcomeSub">
                    Step into MOBLAND and take on the world of a modern crime
                    syndicate.
                  </div>
                </Grid>
              </div>
            </Grid>
            {isMobileOnly ? (
              <Grid
                style={{ display: "flex", justifyContent: "flex-end" }}
                item
                xs={12}
                sm={false}
              >
                <img
                  alt={"Uzi Gangster"}
                  src={"/images/gangster-uzi.png"}
                  className="gangsterUzi"
                />
              </Grid>
            ) : null}
          </Grid>
        </div>
      );
    }
  }
}

export default StakingPools;

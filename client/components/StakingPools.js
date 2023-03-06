import React from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import { Player, ControlBar } from "video-react";
import Base from "./Base";

import JusticiaDark from "../assets/images/optimized/justicia-dark.jpg.webp";
import GangsterUzi from "../assets/images/optimized/gangster-uzi.png.webp";
import Banner from "../assets/images/optimized/banner.png.webp";
import GangsterHeaderPoster from "../assets/images/optimized/header-ganster-poster.png.webp";
import "../assets/css/video-react.css";

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
    return (
      <div>
        {isMobileOnly ? null : (
          <div style={{ display: this.state.videoEnded ? "none" : "inherit" }}>
            <Player
              ref={(player) => {
                this.player = player;
              }}
              preload="auto"
              autoPlay={true}
              muted={true}
              loop={false}
              onEnded={this.handleVideoEnded}
              poster={GangsterHeaderPoster}
            >
              <source src="https://static.mob.land/videos/header-gangster.mp4" />
              <ControlBar className="controlbar" disableCompletely="true" />
            </Player>{" "}
          </div>
        )}

        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${JusticiaDark})`,
            paddingTop: "10%",
            display: !this.state.videoEnded ? "none" : "inherit",
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
                  src={GangsterUzi}
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
                <img alt={"Banner"} src={Banner} className="banner" />
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
                  src={GangsterUzi}
                  className="gangsterUzi"
                />
              </Grid>
            ) : null}
          </Grid>
        </div>
      </div>
    );
  }
}

export default StakingPools;

// eslint-disable-next-line no-undef
import React, { Component } from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";

class Browse extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/grafiti-wall.jpg")',
            position: "relative",
            zIndex: "1",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={1} />
            {isMobileOnly ? null : (
              <Grid item sm={5} className={"browseGangsterDiv"}>
                <img
                  alt={"Gangster"}
                  src={"/images/gangster-three.png"}
                  className={"thirdGangster"}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={5}>
              <Grid item xs={12}>
                <div className={isMobileOnly ? "title" : "titleRight"}>
                  Browse the Roster{" "}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div
                  className={"textSub " + (isMobileOnly ? "" : "alignRight")}
                >
                  We recently released our custom Blueprint Reveal App which
                  unveiled to the world the range of dynamic (and dangerous)
                  gangsters of MOBLAND for Blueprint NFT holders to use in-game.
                  Check them out and if you see one you want - make ‘em an offer
                  they can’t refuse!{" "}
                </div>
              </Grid>
              <Grid item xs={12} className="browseButtonDiv">
                <a className="button" href="https://avatar.mob.land/">
                  REVEAL APP
                </a>
              </Grid>
            </Grid>
            {isMobileOnly ? (
              <Grid item xs={12} sm={false}>
                <img
                  alt={"Gangster"}
                  src={"/images/gangster-three.png"}
                  className="gangster3"
                />
              </Grid>
            ) : null}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Browse;

// eslint-disable-next-line no-undef
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";

class Browse extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/grafiti-wall.png")',
          }}
        >
          <Grid container>
            <Grid item xs={false} sm={1} />
            {isMobileOnly ? null : (
              <Grid item xs={12} sm={4}>
                <img
                  alt={"Gangster"}
                  src={"/images/gangster-three.png"}
                  style={{
                    width: "100%",
                    marginTop: "-10%",
                    marginBottom: "-3.5%",
                    zIndex: "1",
                    position: "relative",
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={7}>
              <Grid item xs={12}>
                <div className={isMobileOnly ? "title" : "titleRight"}>
                  Browse the Roster{" "}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="browseSub">
                  We recently released our custom Blueprint Reveal App which
                  unveiled to the world the range of dynamic (and dangerous)
                  gangsters of MOBLAND for Blueprint NFT holders to use in-game.
                  Check them out and if you see one you want - make ‘em an offer
                  they can’t refuse!{" "}
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={false} sm={4} />
                <Grid item xs={12} sm={6} className="browseButtonDiv">
                  <a className="buttonBrowse" href="https://avatar.mob.land/">
                    {" "}
                    REVEAL APP
                  </a>{" "}
                </Grid>
              </Grid>
            </Grid>
            {!isMobileOnly ? null : (
              <Grid item xs={12} sm={4}>
                <img
                  alt={"Gangster"}
                  src={"/images/gangster-three.png"}
                  className="gangster3"
                />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Browse;

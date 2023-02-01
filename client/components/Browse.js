// eslint-disable-next-line no-undef
import React, { Component } from "react";
import { Grid } from "@material-ui/core";

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
            <Grid item xs={1} />
            <Grid item xs={4}>
              <img
                alt={"Gangster"}
                src={"/images/gangster-three.png"}
                style={{
                  width: "100%",
                  marginTop: "-10%",
                  marginBottom: "-2%",
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <Grid item xs={12}>
                <div className="welcome" style={{ marginRight: "-8%" }}>
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
                <Grid item xs={4} />
                <Grid
                  item
                  xs={6}
                  style={{
                    paddingTop: "40px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <a
                    className="buttonBrowse"
                    href="https://blueprints.mob.land/"
                  >
                    {" "}
                    REVEAL APP
                  </a>{" "}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Browse;

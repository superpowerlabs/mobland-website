import React from "react";
import { Grid } from "@material-ui/core";
import { isMobile } from "react-device-detect";

class Leaks extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/mob-leak.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={7} style={{ paddingBottom: "11%" }}>
              <Grid item xs={12} sm={12}>
                <div className="welcomeLeak">In The Works </div>
              </Grid>
              <br />
              <Grid item xs={12} sm={12}>
                <div className="textSub">
                  We’re always working on something new, from innovations and
                  improvements to the economy, to ground-breaking and immersive
                  games for you to play and dominate. Hit the button below to
                  see our plans for the future.
                </div>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3} sm={false} />
                <Grid
                  item
                  xs={6}
                  sm={12}
                  className={isMobile ? "leakMobile" : ""}
                >
                  <a
                    className="buttonLeaks"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    ROADMAP
                  </a>
                </Grid>
                <Grid item xs={3} sm={false} />
              </Grid>
              <br />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Leaks;

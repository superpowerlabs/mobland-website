import React from "react";
import { Grid } from "@material-ui/core";

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
            <Grid item xs={1} />
            <Grid item xs={7} style={{ paddingBottom: "11%" }}>
              <Grid item xs={12} style={{ display: "flex" }}>
                <div className="welcome">In The Works </div>
              </Grid>
              <Grid item xs={12}>
                <div className="textSub">
                  We’re always working on something new, from innovations and
                  improvements to the economy, to ground-breaking and immersive
                  games for you to play and dominate. Hit the button below to
                  see our plans for the future.
                </div>
              </Grid>
              <br />
              <Grid item xs={4}>
                <a
                  className="button"
                  href="https://staking.mob.land/core/dashboard"
                >
                  Road Map
                </a>
              </Grid>
              <br />
            </Grid>

            <Grid item xs={4}>
              <div className="coins">Image needed</div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Leaks;

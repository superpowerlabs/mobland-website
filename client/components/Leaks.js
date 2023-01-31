import React from "react";
import { Grid } from "@material-ui/core";

class Leaks extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/ml-city2.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={7}>
              <Grid item xs={12}>
                <div className="welcome">In The Works </div>
              </Grid>
              <Grid item xs={12}>
                <div className="welcomeSub">
                  We’re always working on something new, from innovations and
                  improvements to the economy, to ground-breaking and immersive
                  games for you to play and dominate. Hit the button below to
                  see our plans for the future.
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <a
                    className="whitepaper"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    Road Map
                  </a>
                </Grid>
              </Grid>
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

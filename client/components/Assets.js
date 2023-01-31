import React from "react";
import { Grid } from "@material-ui/core";

class Assets extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/grafiti-wall.png")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={4}>
              <div className="coins">Assets (Suggested to be ANIMATED</div>
            </Grid>
            <Grid item xs={7}>
              <Grid item xs={12}>
                <div className="welcome">Your Assets </div>
              </Grid>
              <Grid item xs={12}>
                <div className="welcomeSub">
                  As well as the token economy, there are many types of NFTs
                  that you can utilise on your path to becoming a MOBLAND
                  Kingpin. Hit the button below to learn all about these assets
                  and how you get put them to work!
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <div>Links to Assets</div>
                </Grid>
                <Grid item xs={6}>
                  <a
                    className="whitepaper"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    CORE POOL
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

export default Assets;

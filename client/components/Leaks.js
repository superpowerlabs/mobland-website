import React from "react";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";

class Leaks extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/mob-leak.jpg")',
            backgroundSize: "cover",
            border: "1px #606060 solid",
            position: "relative",
            zIndex: "2",
          }}
        >
          <Grid container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={5} style={{ paddingBottom: "11%" }}>
              <Grid item xs={12} sm={12}>
                <div className="welcomeLeak">In The Works</div>
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
                  className={isMobileOnly ? "leakMobile" : ""}
                >
                  <a className="button">ROADMAP</a>
                </Grid>
                <Grid item xs={3} sm={false} />
              </Grid>
              <br />
            </Grid>
            <grid item xs={false} sm={6} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Leaks;

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";

class StakingPools extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/city.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <div
                  className="welcome"
                  style={{ paddingTop: isMobileOnly ? 30 : "15%" }}
                >
                  ENTER THE MAFIA METAVERSE
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="welcomeSub">
                  Step into MOBLAND and take on the world of a modern crime
                  syndicate.
                </div>
              </Grid>
              <Grid container style={{ marginTop: 40 }}>
                <Grid item xs={false} sm={2} />
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: isMobileOnly ? "center" : "right",
                    paddingRight: isMobileOnly ? 0 : 20,
                  }}
                  item
                  xs={12}
                  sm={4}
                >
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    CORE POOL
                  </a>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: isMobileOnly ? "center" : "left",
                    paddingLeft: isMobileOnly ? 0 : 20,
                  }}
                  item
                  xs={12}
                  sm={4}
                >
                  <a
                    className="button buttonSeed"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    SEED POOL
                  </a>
                </Grid>
                <Grid item xs={false} sm={2} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container>
                <Grid item xs={3} sm={false} />
                <Grid item xs={6} sm={12}>
                  <img
                    alt={"Gangster"}
                    src={"/images/gangster-two.png"}
                    className="gangster1"
                  />
                </Grid>
                <Grid item xs={3} sm={false} />
              </Grid>
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default StakingPools;

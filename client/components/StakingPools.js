import React, { Component } from "react";
import { Grid } from "@material-ui/core";

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
            <Grid item xs={12} sm={8}>
              <Grid item xs={12}>
                <div className="welcome">ENTER THE MAFIA METAVERSE </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="welcomeSub">
                  Step into Mobland and take on the world of a modern crime
                  syndicate.{" "}
                </div>
              </Grid>
              <br />
              <br />
              <Grid container>
                <Grid item xs={false} sm={3} />
                <Grid
                  style={{ display: "flex", justifyContent: "center" }}
                  item
                  xs={12}
                  sm={3}
                >
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    {" "}
                    CORE POOL
                  </a>{" "}
                </Grid>
                <br />
                <Grid
                  style={{ display: "flex", justifyContent: "center" }}
                  item
                  xs={12}
                  sm={3}
                >
                  <a
                    className="buttonSeed"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    {" "}
                    SEED POOL
                  </a>
                </Grid>
                <Grid item xs={false} sm={3} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
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
          </Grid>
        </div>
      </div>
    );
  }
}

export default StakingPools;

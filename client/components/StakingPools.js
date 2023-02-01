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
            <Grid item xs={1} />
            <Grid item xs={8}>
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
              <Grid container style={{ marginLeft: "8%" }}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    {" "}
                    CORE POOL
                  </a>{" "}
                </Grid>
                <Grid item xs={3}>
                  <a
                    className="buttonSeed"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    {" "}
                    SEED POOL
                  </a>
                </Grid>
                <Grid item xs={3} />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <img
                alt={"Gangster"}
                src={"/images/gangster-two.png"}
                style={{ width: "120%", marginTop: "-5%" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default StakingPools;

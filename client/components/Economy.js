// eslint-disable-next-line no-undef
import React from "react";
import { Grid } from "@material-ui/core";

function Economy() {
  return (
    <div>
      <div
        style={{
          marginTop: "-2%",
          backgroundImage: 'url("/images/grafiti-tunnel.png")',
          backgroundSize: "cover"
        }}
      >
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={7}>
            <Grid item xs={12}>
              <div className="welcome">Game Economy </div>
            </Grid>
            <Grid item xs={12}>
              <div className="welcomeSub">
                Synthetic SYNR, SEED, BUD… MOBLAND boasts an intricate economy
                with a range of commodities, but it all starts with SYNR.
              </div>
            </Grid>
            <Grid container>
            <Grid item xs={4}>
                  <a
                    className="whitepaper"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    {" "}
                    CORE POOL
                  </a>{" "}
                </Grid>
                <Grid item xs={4}>
                  <a
                    className="whitepaper"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    {" "}
                    SEED FARM
                  </a>
                </Grid>
              <Grid item xs={4}>
               <div>Links to Exchanges</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
           <div className= "coins">Coins  (Suggested to be ANIMATED</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Economy;

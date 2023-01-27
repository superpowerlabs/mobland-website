// eslint-disable-next-line no-undef
import React from "react";
import { Grid } from "@material-ui/core";

function Links() {
  return (
    <div className="welcomeBackground">
      <Grid container>
        <Grid item xs={6} className="corePool">
          <div className="stakingPools">
            Stake your SYNR tokens to earn rewards in SYNR, sSYNR, or both!{" "}
          </div>
          <a
            className="whitepaper"
            href="https://staking.mob.land/core/dashboard"
          >
            {" "}
            CORE POOL
          </a>
        </Grid>
        <Grid item xs={6} className="seedPool">
          <div className="stakingPools">
            SEED fuels the cross-chain MOBLAND economy and is a key asset to
            generate revenue for GameFi 2.0 participants.
          </div>
          <a
            className="whitepaper"
            href="https://staking.mob.land/seed/dashboard"
          >
            {" "}
            SEED FARM
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Links;

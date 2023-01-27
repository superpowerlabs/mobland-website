// eslint-disable-next-line no-undef
import React from "react";
import { Grid } from "@material-ui/core";

function Blueprints() {
  return (
    <div className="welcomeBackground">
      <Grid container>
        <Grid item xs={12}>
          <div className="stakingPools">Blueprints</div>
        </Grid>
        <Grid item xs={12}>
          <div className="stakingPools">
            Genesis Blueprints represent crew members in MOBLAND. They have a
            variety of appearance, statistical and ability traits that make them
            unique, with literally hundreds of billions of possible
            combinations. When you open the game with a Genesis Blueprint NFT in
            your wallet, you will see a full 3D version of the crew member
            in-game ready for your orders.
          </div>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <div> BluePrint Pictures</div>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <div>
            {" "}
            <a
              className="whitepaper"
              href="https://blueprints.mob.land/overview"
            >
              {" "}
              Go To Blueprint Showcase
            </a>{" "}
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default Blueprints;

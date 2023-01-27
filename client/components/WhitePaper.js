// eslint-disable-next-line no-undef
import React from "react";
import { Grid } from "@material-ui/core";

function WhitePaperSummary() {
  return (
    <div className="welcomeBackground">
      <Grid container>
        <Grid item xs={6}>
          <div className="welcome">Welcome To Mobland </div>
        </Grid>
        <Grid item xs={6}>
          <div className="summary">
          <a className="whitepaper" href="https://mobland.gitbook.io/mobland/"> Mobland</a> is the first-ever Mafia Metaverse. <br/> <br/>
            Here you fight, loot, build and lead. Here you join a syndicate and
            run businesses, tax your underlings, and pay tribute to your bosses
            through blockchain-backed resources. With enough Ambition, Power,
            and Swagger you can sit at the head of a syndicate and help chart
            the course of the Mafia Metaverse. <br /> <br/>
            We are all in a decentralized degen universe. It's good to be bad.
          </div>
         
        </Grid>
      </Grid>
    </div>
  );
}

export default WhitePaperSummary;

// eslint-disable-next-line no-undef
import React, { Component } from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";

import ClockCountDown from "./lib/ClockCountDown";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endsAt: "2023-03-02T04:00:00Z",
      // Wed Mar 01 2023 07:00:pm PST
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            borderTop: "#404143 solid",
            backgroundImage: 'url("/images/mobhunt-scene.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5}>
              <Grid item xs={12}>
                <div
                  style={{ textShadow: "3px 2px 0px black" }}
                  className={isMobileOnly ? "title" : "titleRight"}
                >
                  Welcome to the HOOD{" "}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div
                  className={"textSub " + (isMobileOnly ? "" : "alignRight")}
                >
                  Enter the #MafiaMetaverse and explore the Mafia’s Playground!
                  Take control of your GENESIS BLUEPRINT and cause chaos in the
                  city with your character! Meet up with friends, chat in
                  real-time text and speech, play games and win BUD
                  {Date.now() > new Date(this.state.endsAt).getTime() ? (
                    "."
                  ) : (
                    <span>
                      {" "}
                      in
                      <ClockCountDown
                        endsAt={this.state.endsAt}
                        extraClass={"cityCountDown"}
                      />
                    </span>
                  )}
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                className="browseButtonDiv"
                style={{ marginBottom: 22 }}
              >
                <a className="button" href="https://play.mob.land/">
                  ENTER THE CITY
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={1} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default City;

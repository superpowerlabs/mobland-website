import React, { Component } from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";

class SynrRank extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("/images/grafiti-wall.jpg")',
        }}
      >
        <Grid container className={"stats"}>
          {isMobileOnly ? null : (
            <Grid item xs={12} sm={4}>
              <img
                alt={"Gangster"}
                className={"femaleGangster"}
                src={"/images/gangster-five.png"}
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={4}
            className={"ranking"}
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   marginLeft: isMobileOnly ? null : "-6%",
            // }}
          >
            <div className={"centered"}>
              <div className={isMobileOnly ? "wrongMobile top" : "welcome"}>
                500,000+
              </div>
              <div className={"underWrong"}>
                <span style={{ whiteSpace: "nowrap" }}>
                  SYNNERS in our community
                </span>
                <br />
                and growing every day!
              </div>
              <div className="social">
                <a href={"https://discord.gg/tSVtRkppnp"} rel="noreferrer">
                  <i className="fab fa-discord" />
                </a>
                <a
                  href="https://t.me/MobLandAnnouncements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram" />
                </a>
                <a
                  href="https://twitter.com/MoblandHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            className={"ranking"}
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   marginTop: "-2%",
            // }}
          >
            <div className={"centered"}>
              <div className={isMobileOnly ? "wrongMobile bottom" : "welcome"}>
                #1 Volume
              </div>
              <div
                className={"underWrong"}
                style={{
                  paddingTop: isMobileOnly ? null : "1%",
                }}
              >
                Ranked #1 of all time
                <br />
                for Binance NFT Volume
              </div>
            </div>
            <div className="social">
              <a href={"#"}> </a>
            </div>
          </Grid>
          {!isMobileOnly ? null : (
            <Grid
              item
              xs={12}
              sm={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                alt={"Gangster"}
                src={"/images/gangster-five.png"}
                style={{ width: "50%", marginRight: "-7%" }}
              />
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default SynrRank;

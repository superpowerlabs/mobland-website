import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { isMobile } from "react-device-detect";

class SynrRank extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("/images/grafiti-wall.png")',
        }}
      >
        <Grid container className={"stats"}>
          {isMobile ? null : (
            <Grid item xs={12} sm={6}>
              <img
                alt={"Gangster"}
                src={"/images/gangster-five.png"}
                style={{ width: "100%", marginTop: "-21%" }}
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: isMobile ? null : "-6%",
            }}
          >
            <div className={"Center"}>
              <div className={isMobile ? "wrongMobile top" : "wrong"}>
                500k+
              </div>
              <div
                className={"underWrong"}
                style={{
                  paddingLeft: isMobile ? null : "7%",
                  marginTop: isMobile ? null : "-13%",
                }}
              >
                SYNNERS in our community <br />
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
            sm={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-2%",
            }}
          >
            <div className={"Center"}>
              <div className={isMobile ? "wrongMobile bottom" : "wrong"}>
                #1 Volume
              </div>
              <div
                className={"underWrong"}
                style={{
                  paddingLeft: isMobile ? null : "27%",
                  paddingTop: isMobile ? null : "1%",
                }}
              >
                Ranked #1 of all time
                <br />
                for Binance NFT Volume
              </div>
            </div>{" "}
          </Grid>
          {!isMobile ? null : (
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

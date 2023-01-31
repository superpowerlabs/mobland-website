import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class SynrRank extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("/images/grafiti-wall.png")',
        }}
      >
        <Grid container className={"stats"}>
          <Grid item xs={4}>
            <img
              alt={"Gangster"}
              src={"/images/gangster-five.png"}
              style={{ width: "100%", marginTop: "-21%" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-6%",
            }}
          >
            <div className={"Center"}>
              <div className={"wrong"}>500k+</div>
              <div
                className={"underWrong"}
                style={{ paddingLeft: "7%", marginTop: "-13%" }}
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
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-2%",
            }}
          >
            <div className={"Center"}>
              <div className={"wrong"}>#1 Volume</div>
              <div
                className={"underWrong"}
                style={{ paddingLeft: "27%", paddingTop: "1%" }}
              >
                Ranked #1 of all time
                <br />
                for Binance NFT Volume
              </div>
            </div>{" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SynrRank;

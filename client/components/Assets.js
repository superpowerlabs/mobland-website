import React from "react";
import { Grid } from "@mui/material";
import AssetImages from "./AssetImages";
import { isMobileOnly } from "react-device-detect";
import { Link } from "react-router-dom";

import DarkCity from "../assets/images/dark-city.jpg.webp";
class Assets extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${DarkCity})`,
            backgroundSize: "cover",
            zIndex: "1",
            position: "relative",
            borderTop: "1px #3a3a3b solid",
            borderBottom: "1px #3a3a3b solid",
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            {isMobileOnly ? null : (
              <Grid item xs={12} sm={4}>
                <AssetImages />
              </Grid>
            )}

            <Grid item xs={12} sm={6} style={{ paddingBottom: "7%" }}>
              <Grid item xs={12} sm={12}>
                <div className="assetsTitle">Your Assets </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className="assetsSub">
                  As well as the token economy, there are many types of NFTs
                  that you can utilise on your path to becoming a MOBLAND
                  Kingpin. Hit the button below to learn all about these assets
                  and how you get put them to work!
                </div>
              </Grid>
              <br />
              <Grid item xs={12} sm={12}>
                <div
                  style={{
                    // paddingTop: isMobileOnly ? "10%" : "0%",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <Link className="button" to={"/assetsguide"}>
                    GUIDE
                  </Link>
                  <a
                    style={{
                      marginLeft: 24,
                      backgroundColor: "white !important",
                    }}
                    className="button"
                    href={"https://assets.mob.land"}
                  >
                    VIEW YOUR NFTs
                  </a>
                </div>
              </Grid>
              <br />
            </Grid>
            <Grid item xs={12} sm={1} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Assets;

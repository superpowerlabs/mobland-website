import React from "react";
import { Grid } from "@material-ui/core";
import AssetImages from "./AssetImages";
import { isMobile } from "react-device-detect";
class Assets extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/grafiti-wall.png")',
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            {isMobile ? null : (
              <Grid item xs={12} md={4}>
                <AssetImages />
              </Grid>
            )}

            <Grid item xs={12} md={6} style={{ paddingBottom: "7%" }}>
              <Grid item xs={12} md={12}>
                <div className="assetsTitle">Your Assets </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="assetsSub">
                  As well as the token economy, there are many types of NFTs
                  that you can utilise on your path to becoming a MOBLAND
                  Kingpin. Hit the button below to learn all about these assets
                  and how you get put them to work!
                </div>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={false} md={4} />
                <Grid item xs={12} md={5}>
                  <div className="assets">
                    <a
                      href={
                        "https://opensea.io/collection/mobland-genesis-synr-pass"
                      }
                    >
                      <img src={"/images/opensea.png"} alt={"OpenSea"} />
                    </a>
                    <a href={""}>
                      <img
                        src={"/images/mobland-white-icon.png"}
                        alt={"mobland"}
                      />
                    </a>
                    <a
                      href={"https://opensea.io/collection/mobland-blueprints"}
                    >
                      <img src={"/images/binance.png"} alt={"Binance"} />
                    </a>
                  </div>
                </Grid>
                <Grid container>
                  <Grid item xs={3} md={false} />
                  <Grid item xs={6} md={3}>
                    <div
                      style={{
                        paddingTop: "10%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <a
                        className="buttonAssets"
                        href="https://staking.mob.land/core/dashboard"
                      >
                        GUIDE
                      </a>{" "}
                    </div>
                  </Grid>
                  <Grid item xs={3} md={false} />
                </Grid>
              </Grid>

              <br />
            </Grid>
            <Grid item xs={false} md={1} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Assets;

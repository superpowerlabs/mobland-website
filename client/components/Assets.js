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
            zIndex: "1",
            position: "relative",
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            {isMobile ? null : (
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
              <Grid container>
                <Grid item xs={false} sm={4} />
                <Grid item xs={12} sm={5}>
                  <div className="assets">
                    <a
                      href={
                        "https://opensea.io/assets?search[query]=mobland%20"
                      }
                    >
                      <img src={"/images/opensea.png"} alt={"OpenSea"} />
                    </a>
                    {/* <a href={""}>
                      <img
                        src={"/images/mobland-white-icon.png"}
                        alt={"mobland"}
                      />
                    </a> */}
                    <a
                      href={
                        "https://www.binance.com/en/nft/header-search?keyword=mobland"
                      }
                    >
                      <img src={"/images/binance.png"} alt={"Binance"} />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Grid container>
                    <Grid item xs={3} sm={false} />
                    <Grid item xs={6} sm={12}>
                      <div
                        style={{
                          paddingTop: isMobile ? "10%" : "0%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <a className="buttonAssets">GUIDE</a>{" "}
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={false} />
                  </Grid>
                </Grid>
              </Grid>

              <br />
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Assets;

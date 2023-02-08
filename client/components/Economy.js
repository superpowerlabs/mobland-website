import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Coins from "./Coins";
import { isMobileOnly } from "react-device-detect";

class Economy extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url("/images/ml-city2.jpg")',
            backgroundSize: "cover",
            borderTop: "1px #3a3a3b solid",
            borderBottom: "1px #3a3a3b solid",
            zIndex: "1",
            position: "relative",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={7} style={{ paddingBottom: "2%" }}>
              <Grid item xs={12} sm={12}>
                <div
                  className="title"
                  // style={{ marginTop: "-5%" }}
                >
                  Game Economy
                </div>
              </Grid>
              <br />
              <Grid item xs={12} sm={12}>
                <div className="textSub">
                  Synthetic SYNR, SEED, BUD... MOBLAND boasts an intricate
                  economy with a range of commodities, but it all starts with
                  <span style={{ color: "#fae901" }}> SYNR</span>.
                </div>
              </Grid>
              <br />
              <Grid container style={{ marginTop: 20 }}>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  className={isMobileOnly ? "economyMobile" : ""}
                >
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    CORE POOL
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  className={isMobileOnly ? "economyMobile" : ""}
                >
                  <a
                    className="button buttonSeed"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    SEED FARM
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={isMobileOnly ? "mobileExchange" : null}
                >
                  <div className="exchanges">
                    <a
                      href={
                        "https://www.kucoin.com/trade/SYNR-USDT?spm=kcWeb.B5markets.tradeList.1"
                      }
                    >
                      <img src={"/images/kucoin.png"} alt={"Kucoin"} />
                    </a>
                    <a
                      href={"https://www.bybit.com/en-US/trade/spot/SYNR/USDT"}
                    >
                      <img src={"/images/bybit.png"} alt={"ByBit"} />
                    </a>
                    <a
                      href={
                        "https://www.bitmart.com/trade/en?layout=basic&symbol=SYNR_USDT"
                      }
                    >
                      <img src={"/images/some-b.png"} alt={"Bitmart"} />
                    </a>
                    <a
                      href={
                        "https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbc6e06778708177a18210181b073da747c88490a"
                      }
                    >
                      <img src={"/images/uniswap.png"} alt={"Uniswap"} />
                    </a>
                  </div>
                </Grid>
              </Grid>
              <br />
            </Grid>

            {isMobileOnly ? null : (
              <Grid item xs={12} sm={3} style={{ textAlign: "right" }}>
                <Coins />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Economy;

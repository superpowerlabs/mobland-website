import React, { Component } from "react";
import { Grid } from "@material-ui/core";

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
          }}
        >
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={6} style={{ paddingBottom: "6%" }}>
              <Grid item xs={12}>
                <div className="title">Game Economy</div>
              </Grid>
              <br />
              <Grid item xs={12}>
                <div className="textSub">
                  Synthetic SYNR, SEED, BUD... MOBLAND boasts an intricate
                  economy with a range of commodities, but it all starts with
                  <span style={{ color: "#fae901" }}> SYNR</span>.
                </div>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <a
                    className="button"
                    href="https://staking.mob.land/core/dashboard"
                  >
                    CORE POOL
                  </a>
                </Grid>
                <Grid item xs={3}>
                  <a
                    className="buttonSeed"
                    href="https://staking.mob.land/seed/dashboard"
                  >
                    SEED POOL
                  </a>
                </Grid>
                <Grid item xs={5}>
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
                    <a href={"https://app.uniswap.org/#/swap?chain=mainnet"}>
                      <img src={"/images/uniswap.png"} alt={"Uniswap"} />
                    </a>
                  </div>
                </Grid>
              </Grid>
              <br />
            </Grid>
            <Grid item xs={5}>
              <div className="coins">Coins (Suggested to be ANIMATED</div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Economy;

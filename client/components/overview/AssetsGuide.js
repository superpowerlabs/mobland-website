import React from "react";
import { Grid } from "@mui/material";
import InfoTileItem from "./InfoTileItem";

// icons
import SynrIcon from "../../images/synr_double.png";
import SsynrIcon from "../../images/ssynr_double.png";
import SeedIcon from "../../images/seed_double.png";
import SynrPassIcon from "../../images/genesispass.png";
import BlueprintIcon from "../../images/blueprint.png";
import TurfIcon from "../../images/turf_8x8.png";
import WeedFarmIcon from "../../images/weedfarm.png";
import UniswapIcon from "../../images/uniswapwhite.png";
import KucoinIcon from "../../images/kucoinicon_white.png";
import ByBitIcon from "../../images/bybit_white.png";
import BitmartIcon from "../../images/bitmart_white.png";
import bud from "../../images/bud_double.png";
import binance from "../../images/binance.png";
import opensea from "../../images/opensea.png";
import mobland from "../../images/mobland-white-icon.png";
import { isMobileOnly } from "react-device-detect";

function AssetsGuide() {
  const tiles = [
    {
      title: "SYNR",
      img: SynrIcon,
      important: true,
      description:
        "SYNR is the governance token of MOBLAND’s Mafia Metaverse. It can be obtained on a number of exchanges and can be staked either in the Core Pool to generate more SYNR or sSYNR, or in the SEED Farm to generate SEED",
      where: [
        {
          link: "https://www.kucoin.com/trade/SYNR-USDT?spm=kcWeb.B5markets.tradeList.1",
          src: KucoinIcon,
        },
        {
          link: "https://www.bybit.com/en-US/trade/spot/SYNR/USDT",
          src: ByBitIcon,
        },
        {
          link: "https://www.bitmart.com/trade/en?layout=basic&symbol=SYNR_USDT",
          src: BitmartIcon,
        },
        {
          link: "https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbc6e06778708177a18210181b073da747c88490a",
          src: UniswapIcon,
        },
        ,
      ],
      button: false,
    },
    {
      title: "sSYNR",
      img: SsynrIcon,
      important: true,
      description:
        "sSYNR, or Synthetic SYNR, is in-game synthetic currency that will be usable only in-game and in the MOBLAND marketplace. sSYNR can only be acquired by staking SYNR and can be swapped in the SEED Farm to generate SEED instead!",
      where: [
        {
          link: "https://staking.mob.land/core/dashboard",
          src: mobland,
        },
        ,
      ],
      button: false,
    },
    {
      title: "SEED",
      img: SeedIcon,
      important: true,
      description:
        "SEED fuels the cross-chain MOBLAND economy and is a key asset to generate revenue in the Mafia Metaverse. SEED can be obtained in the SEED Farm either by staking SYNR, SYNR Passes or Blueprints, or by swapping sSYNR.",
      where: [
        {
          link: "https://staking.mob.land/seed/dashboard",
          src: mobland,
        },
        ,
      ],
      button: false,
    },
    {
      title: "BUD",
      img: bud,
      important: true,
      description:
        "BUD is an in-game asset produced by Weed Farms. Consume BUD to upgrade farms, repair damaged farms, upgrade characters, heal injured characters and additional in-game utilities.",
      where: [
        {
          link: "https://shadowmarket.mob.land/",
          src: mobland,
        },
        ,
      ],
      button: false,
    },
    {
      title: "BLUEPRINTS",
      img: BlueprintIcon,
      important: true,
      description:
        "Blueprints are NFTs minted on the Binance network and represent in-game characters. They can be staked to generate SEED either as the equivalent of XXXX SYNR or as a multiplier to increase the yield of previously staked SYNR.",
      where: [
        {
          link: "https://opensea.io/collection/mobland-blueprints",
          src: opensea,
        },
        {
          link: "https://www.binance.com/en/nft/collection/syn-city-limited-blueprint-519022065384943617?isBack=1",
          src: binance,
        },
        ,
      ],
      button: false,
    },
    {
      title: "SYNR PASS",
      img: SynrPassIcon,
      important: true,
      description:
        "The SYNR Passes, minted on the Ethereum network, gives holders exclusive in-game benefits. They can be staked to generate SEED either as SYNR equivalent or as a multiplier to increase the yield of previously staked SYNR.",
      where: [
        {
          link: "https://opensea.io/collection/mobland-genesis-synr-pass",
          src: opensea,
        },
        ,
      ],
      button: false,
    },
    {
      title: "TURF",
      img: TurfIcon,
      important: true,
      description:
        "Turf is MOBLAND’s in-game land parcels that can be traded on-chain. There are 5 different Turf sizes, and each can be utilised to build and operate your own businesses and/or by leasing out your Turf to other businesses in MOBLAND.",
      where: [
        {
          link: "https://opensea.io/collection/mobland-turf",
          src: opensea,
        },
        {
          link: "https://shadowmarket.mob.land/",
          src: mobland,
        },
        ,
      ],
      button: false,
    },
    {
      title: "WEED FARM",
      img: WeedFarmIcon,
      important: true,
      description:
        "WEED Farms can be set up to plant (stake) SEED in order to grow WEED Tokens. WEED Farm owners oversee operations, defend and attack to grow their empires, upgrade features, and earn a share of the goods & services produced.",
      where: [
        {
          link: "https://opensea.io/collection/mobland-weed-farm",
          src: opensea,
        },
        {
          link: "https://shadowmarket.mob.land/",
          src: mobland,
        },
        ,
      ],
      button: false,
    },
  ];

  return (
    <div className="distanceHeader">
      <div align="center" className="overview-title">
        ASSETS
      </div>
      <Grid
        container
        spacing={4}
        alignItems="flex-end"
        justifyContent="center"
        className={"distanceFooter"}
      >
        {tiles.map((tile, index) => {
          return (
            <Grid item xs={11} sm={11} md={5} key={"tiles_" + index}>
              <InfoTileItem
                title={tile.title}
                titleUpperCase={true}
                img={tile.img}
                alt={tile.title}
                description={tile.description}
                where={tile.where}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AssetsGuide;

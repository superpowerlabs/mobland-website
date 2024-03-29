import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import InfoTileItem from "./InfoTileItem";

// icons
import SynrIcon from "../../assets/images/synr_double.png.webp";
import SsynrIcon from "../../assets/images/ssynr_double.png.webp";
import SeedIcon from "../../assets/images/seed_double.png.webp";
import SynrPassIcon from "../../assets/images/genesispass.jpg.webp";
import BlueprintIcon from "../../assets/images/blueprint.png.webp";
import TurfIcon from "../../assets/images/turf_8x8.png.webp";
import WeedFarmIcon from "../../assets/images/weedfarm.png.webp";
import UniswapIcon from "../../assets/images/uniswapwhite.png.webp";
import KucoinIcon from "../../assets/images/kucoinicon_white.png.webp";
import ByBitIcon from "../../assets/images/bybit_white.png.webp";
import BitmartIcon from "../../assets/images/bitmart_white.png.webp";
import bud from "../../assets/images/bud_double.png.webp";
import binance from "../../assets/images/binance.png.webp";
import opensea from "../../assets/images/opensea.png.webp";
import mobland from "../../assets/images/mobland-white-icon.png.webp";

function AssetsGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiles = [
    {
      title: "SYNR",
      img: SynrIcon,
      important: true,
      description:
        "SYNR is the governance token of MOBLAND’s Mafia Metaverse. It can be obtained on a number of exchanges and can be staked either in the Core Pool to generate more SYNR or sSYNR, or in the SEED Generator to generate SEED",
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
        "sSYNR, or Synthetic SYNR, is in-game synthetic currency that will be usable only in-game and in the MOBLAND marketplace. sSYNR can only be acquired by staking SYNR and can be swapped in the SEED Generator to generate SEED instead!",
      where: [
        {
          link: "https://staking.mob.land/core/dashboard",
          src: mobland,
          title: "Core Pool",
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
        "SEED fuels the cross-chain MOBLAND economy and is a key asset to generate revenue in the Mafia Metaverse. SEED can be obtained in the SEED Generator either by staking SYNR, SYNR Passes or Blueprints, or by swapping sSYNR.",
      where: [
        {
          link: "https://staking.mob.land/seed/dashboard",
          src: mobland,
          title: "SEED Generator",
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
          title: "Shadow Market",
        },
        ,
      ],
      button: false,
    },
    {
      title: "BLUEPRINTS",
      img: BlueprintIcon,
      important: true,
      description: (
        <span>
          <a href={"https://blueprints.mob.land"} target={"_blank"}>
            Blueprints
          </a>{" "}
          are NFTs minted on the Binance network and represent in-game
          characters. They{" "}
          <a href="https://staking.mob.land/seed/dashboard" target={"_blank"}>
            can be staked to generate SEED
          </a>{" "}
          either as SYNR equivalent or as a multiplier to increase the yield of
          previously staked SYNR.
        </span>
      ),
      where: [
        {
          link: "https://opensea.io/collection/mobland-blueprints",
          src: opensea,
        },
        {
          link: "https://www.binance.com/en/nft/collection/syn-city-limited-blueprint-519022065384943617?isBack=1",
          src: binance,
        },
        {
          link: "https://assets.mob.land/",
          src: mobland,
          title: "Safehouse",
        },
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
        {
          link: "https://assets.mob.land/",
          src: mobland,
          title: "Safehouse",
        },
      ],
      button: false,
    },
    {
      title: "TURF",
      img: TurfIcon,
      important: true,
      description: (
        <span>
          Turf is MOBLAND’s in-game land parcels that can be traded on-chain.
          There are 5 different Turf sizes, and each can be utilised to build
          and operate your own businesses and/or by leasing out your Turf to
          other businesses in MOBLAND.{" "}
          <a href={"https://sales.mob.land/yournfts"} target={"_blank"}>
            See yours here
          </a>
          .
        </span>
      ),
      where: [
        {
          link: "https://opensea.io/collection/mobland-turf",
          src: opensea,
        },
        {
          link: "https://shadowmarket.mob.land/",
          src: mobland,
          title: "Shadow Market",
        },
        {
          link: "https://assets.mob.land/",
          src: mobland,
          title: "Safehouse",
        },
      ],
      button: false,
    },
    {
      title: "WEED FARM",
      img: WeedFarmIcon,
      important: true,
      description: (
        <span>
          WEED Farms can be set up to plant (stake) SEED in order to grow BUD
          Tokens. WEED Farm owners oversee operations, defend and attack to grow
          their empires, upgrade features, and earn a share of the goods &
          services produced.{" "}
          <a href={"https://sales.mob.land/yournfts"} target={"_blank"}>
            See yours here
          </a>
        </span>
      ),
      where: [
        {
          link: "https://opensea.io/collection/mobland-weed-farm",
          src: opensea,
        },
        {
          link: "https://shadowmarket.mob.land/",
          src: mobland,
          title: "Shadow Market",
        },
        {
          link: "https://assets.mob.land/",
          src: mobland,
          title: "Safehouse",
        },
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
        className={"distanceFooter guides"}
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

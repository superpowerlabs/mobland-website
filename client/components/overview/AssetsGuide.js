import React from "react";
import { Grid } from "@mui/material";
import InfoTileItem from "./InfoTileItem";

// icons
import SynrIcon from "../../images/SYNR_Double.png";
import SsynrIcon from "../../images/sSYNR_Double.png";
import SeedIcon from "../../images/SEED_Double.png";
import SynrPassIcon from "../../images/GenesisPass.png";
import BlueprintIcon from "../../images/Blueprint.png";
import SeedFarmIcon from "../../images/Portal.png";
import TurfIcon from "../../images/Turf_8x8.png";
import WeedFarmIcon from "../../images/WeedFarm.png";
import Exchanges from "./Exchanges";

function AssetsGuide() {
  const tiles = [
    {
      title: "SYNR",
      img: SynrIcon,
      important: true,
      description:
        "SYNR is the governance token of MOBLAND’s Mafia Metaverse. It can be obtained on a number of exchanges and can be staked either in the Core Pool to generate more SYNR or sSYNR, or in the SEED Farm to generate SEED",
      button: false,
    },
    {
      title: "sSYNR",
      img: SsynrIcon,
      important: true,
      description:
        "sSYNR, or Synthetic SYNR, is in-game synthetic currency that will be usable only in-game and in the MOBLAND marketplace. sSYNR can only be acquired by staking SYNR and can be swapped in the SEED Farm to generate SEED instead!",
      button: false,
    },
    {
      title: "SEED",
      img: SeedIcon,
      important: true,
      description:
        "SEED fuels the cross-chain MOBLAND economy and is a key asset to generate revenue in the Mafia Metaverse. SEED can be obtained in the SEED Farm either by staking SYNR, SYNR Passes or Blueprints, or by swapping sSYNR.",
      button: false,
    },
    {
      title: "SYNR PASSES",
      img: SynrPassIcon,
      important: true,
      description:
        "The SYNR Passes, minted on the Ethereum network, gives holders exclusive in-game benefits. They can be staked to generate SEED either as the equivalent of XXXX SYNR or as a multiplier to increase the yield of previously staked SYNR.",
      button: false,
    },
    {
      title: "BLUEPRINTS",
      img: BlueprintIcon,
      important: true,
      description:
        "Blueprints are NFTs minted on the Binance network and represent in-game characters. They can be staked to generate SEED either as the equivalent of XXXX SYNR or as a multiplier to increase the yield of previously staked SYNR.",
      button: false,
    },
    {
      title: "SEED FARMS",
      img: SeedFarmIcon,
      important: true,
      description:
        "The SEED Farm is where you can generate SEED (BNB network) by staking SYNR,SYNR Passes, Blueprints, or by swapping sSYNR (Ethereum network). These cross-chain transactions are achieved by utilising Tesseract technology, developed by Superpower Labs.",
      button: false,
    },
    {
      title: "TURF",
      img: TurfIcon,
      important: true,
      description:
        "Turf is MOBLAND’s in-game land parcels that can be traded on-chain. There are 5 different Turf sizes, and each can be utilised to build and operate your own businesses and/or by leasing out your Turf to other businesses in MOBLAND.",
      button: false,
    },
    {
      title: "WEED FARM",
      img: WeedFarmIcon,
      important: true,
      description:
        "WEED Farms can be set up to plant (stake) SEED in order to grow WEED Tokens. WEED Farm owners oversee operations, defend and attack to grow their empires, upgrade features, and earn a share of the goods & services produced.",
      button: false,
    },
  ];

  return (
    <Grid container spacing={2} alignItems="flex-end">
      {tiles.map((tile, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} key={"tiles_" + index}>
            <InfoTileItem
              title={tile.title}
              titleUpperCase={true}
              img={tile.img}
              alt={tile.title}
              description={tile.description}
            />
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12} md={12}>
        <Exchanges title="No tokens? SYNR is available on these platforms:" />
      </Grid>
    </Grid>
  );
}

export default AssetsGuide;

import React from "react";
import { Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Exchanges from "./Exchanges";
import NftExchange from "./NftExchange";

import SeedPileImg from "../../images/seed_pile.png";
import InfoSection from "./InfoSection";

import SynrIcon from "../../images/synr_double.png";
import BothPortal from "../../images/bothportals.png";
import SsynrIcon from "../../images/ssynr_double.png";
import Genesis from "../../images/genesispass.png";
import BlueprintIcon from "../../images/blueprint.png";
import GrowBud from "../../images/growbud.png";
import Combat from "../../images/combat.png";
import RentIcon from "../../images/renticon.png";
import LendIcon from "../../images/lendicon.png";
import HireMercs from "../../images/hiremercs.png";
import UpgradeIconTwo from "../../images/upgradeicontwo.png";
import { isMobileOnly } from "react-device-detect";

// TODO dry this code (it's also in HowToPlay.js)
const LargeCard = styled(Card)(({ theme }) => ({
  background:
    "transparent linear-gradient(180deg, #FFFFFF27 0%, #0000004B 100%) 0% 0% no-repeat padding-box",
  border: "1px solid #8B8B8B90",
  borderRadius: "25px",
  opacity: 1,
  maxWidth: isMobileOnly ? "96%" : "60%",
  margin: "0 auto",
}));

function bullet() {
  return <span style={{ fontSize: "1.2rem" }}>•</span>;
}

function SeedFarmGuide() {
  const sections = [
    {
      title: "THE SEED TOKEN",
      img: SeedPileImg,
      display_img: "centered",
      description: [
        <span
          style={{
            width: "61%",
            textAlign: "center",
            display: "block",
            marginLeft: "22%",
          }}
        >
          MOBLAND’s in-game currency, a token that fuels the chain-agnostic
          #MafiaMetaverse It is a core asset to generate commodities & resources
        </span>,
      ],
    },
    {
      title: "HOW TO GENERATE SEED",
      subtitle:
        "The are four different methods to generate SEED in the SEED Farm:",
      icons: [
        { title: "STACK SYNR", src: SynrIcon },
        { title: "SWAP sSYNR", src: SsynrIcon },
        { title: "STAKE SYNR PASS*", src: Genesis },
        { title: "STAKE BLUEPRINT*", src: BlueprintIcon },
      ],
    },
    {
      title: "THE GENERATION PROCESS",
      description: [],
    },
    {
      title: "",
      description: [],
      img: BothPortal,
      display_img: "centered",
    },
    {
      title: "WHAT DO I USE SEED FOR?",
      description: [],
      icons: [
        { title: "GROW BUD", src: GrowBud },
        { title: "ENGAGE IN COMBAT", src: Combat },
        { title: "RENT ASSETS", src: RentIcon },
        { title: "LEND ASSETS", src: LendIcon },
        { title: "HORE MERCENARIES", src: HireMercs },
        { title: "UPGRADE ASSETS", src: UpgradeIconTwo },
      ],
    },
  ];

  let i = 0;

  return (
    <Grid container spacing={2} alignItems="flex-end">
      {sections.map((section) => {
        return (
          <Grid
            key={"section_" + i++}
            container
            spacing={0}
            alignItems="flex-end"
          >
            <Grid item xs={0} sm={1} md={1} />
            <Grid item xs={12} sm={10} md={10}>
              <InfoSection
                title={section.title}
                subtitle={section.subtitle}
                img={section.img}
                display_img={section.display_img}
                description={section.description}
                icons={section.icons}
                footer={section.footer}
              />
            </Grid>
            <Grid item xs={0} sm={1} md={1} />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={6} md={6}>
        <Exchanges title="No tokens? SYNR is available on these platforms:" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <NftExchange title="NFT's are available on these platforms:" />
      </Grid>
    </Grid>
  );
}

export default SeedFarmGuide;

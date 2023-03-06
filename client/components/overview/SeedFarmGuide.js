import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Exchanges from "./Exchanges";
import NftExchange from "./NftExchange";

import SeedImg from "../../assets/images/seed-single-coin.png.webp";
import InfoSection from "./InfoSection";

import SynrIcon from "../../assets/images/synr_double.png.webp";
import BothPortal from "../../assets/images/bothportals.png.webp";
import SsynrIcon from "../../assets/images/ssynr_double.png.webp";
import Genesis from "../../assets/images/genesispass.jpg.webp";
import BlueprintIcon from "../../assets/images/blueprint.png.webp";
import GrowBud from "../../assets/images/growbud.png.webp";
import Combat from "../../assets/images/combat.png.webp";
import RentIcon from "../../assets/images/renticon.png.webp";
import LendIcon from "../../assets/images/lendicon.png.webp";
import HireMercs from "../../assets/images/hiremercs.png.webp";
import UpgradeIconTwo from "../../assets/images/upgradeicontwo.png.webp";
import { isMobileOnly } from "react-device-detect";

function SeedFarmGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      title: "THE SEED TOKEN",
      img: SeedImg,
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
        "The are four different methods to generate SEED in the SEED Generator:",
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
        { title: "HIRE MERCENARIES", src: HireMercs },
        { title: "UPGRADE ASSETS", src: UpgradeIconTwo },
      ],
    },
  ];

  let i = 0;

  return (
    <div className="distanceHeader">
      <div
        align="center"
        className="overview-title"
        style={{ paddingBottom: 20 }}
      >
        SEED GENERATOR
      </div>
      <Grid container spacing={2} alignItems="flex-end">
        {sections.map((section) => {
          return (
            <Grid
              key={"section_" + i++}
              container
              spacing={0}
              alignItems="flex-end"
              justifyContent={isMobileOnly ? "center" : ""}
            >
              <Grid item xs={1} sm={1} md={1} />
              <Grid item xs={10} sm={10} md={10}>
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
              <Grid item xs={0.5} sm={1} md={1} />
            </Grid>
          );
        })}

        <Grid item xs={12} sm={6} md={6} className={"distanceFooter"}>
          <Exchanges
            title={
              <span>
                No tokens?{isMobileOnly ? <br /> : " "}SYNR is available on
                these platforms:
              </span>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={"distanceFooter"}>
          <NftExchange title="No NFT?" />
        </Grid>
      </Grid>
    </div>
  );
}

export default SeedFarmGuide;

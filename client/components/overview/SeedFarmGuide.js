import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "../tile/Title";
import Line from "../tile/Description";
import Exchanges from "./Exchanges";
import { conf } from "../../config";

import SeedPileImg from "../../images/Seed_Pile.png";
import PortalImg from "../../images/Portal.png";
import WeedFarmImg from "../../images/WeedFarm.png";
import InfoSection from "./InfoSection";

import SynrIcon from "../../images/SYNR_Double.png";
import SsynrIcon from "../../images/sSYNR_Double.png";
import SeedIcon from "../../images/SEED_Double.png";
import BlueprintIcon from "../../images/Blueprint.png";
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
      footer: (
        <span>
          *SYNR Passes and Blueprints can be staked in two different ways:
          <br />
          Either as the equivalent of 180000 SYNR (SYNR Passes) or 10000 SYNR
          (Blueprints), or as a multiplier to increase the yield of staked SYNR.
        </span>
      ),
      icons: [
        { title: "STACK SYNR", src: SynrIcon },
        { title: "SWAP sSYNR", src: SsynrIcon },
        { title: "STAKE SYNR PASS*", src: SeedIcon },
        { title: "STAKE BLUEPRINT*", src: BlueprintIcon },
      ],
    },
    {
      title: "THE GENERATION PROCESS",
      img: PortalImg,
      display_img: "floatLeft",
      description: [
        <span>
          Once you have chosen your desired method, you will be taken to the
          generator to complete the process. Generating SEED will require to
          have both Ethereum and BNB for gas (transaction) fees.
        </span>,
        <span>
          Due to the complex, cross-chain nature of the transactions, the whole
          process can take around 10 minutes to complete. The process will also
          require you to follow and accept several prompts from MetaMask, e.g.
          to allow the site to use your tokens and switch networks, so keep an
          eye out for those messages!
        </span>,
        <span>
          Once complete, your staked assets can be viewed and claimed in the
          Vesting section, and your SEED can be claimed in the Rewards section.
        </span>,
      ],
    },
    {
      title: "WHAT DO I USE SEED FOR?",
      img: WeedFarmImg,
      display_img: "right",
      description: [
        <span>
          SEED token will be heavily consumed in the production of in-game
          assets, operating businesses on-chain, maintaining Real Estate and
          businesses, hiring mercenaries to attack and raid other Synners’
          assets, defending your own valuable assets from enemies, utilizing
          in-game services, and participating in combat and upgradeability
          across the ecosystem.
        </span>,
        <span>
          For more detailed information on how to use your SEED tokens on your
          path to becoming a Kingpin of theMafia Metaverse, head to the How To
          Play tab here!
        </span>,
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

      <Grid item xs={12} sm={12} md={12}>
        <Exchanges title="No tokens? SYNR is available on these platforms:" />
      </Grid>
    </Grid>
  );
}

export default SeedFarmGuide;

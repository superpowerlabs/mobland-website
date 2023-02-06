import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Title from "../tile/Title";
import Line from "../tile/Description";
import Exchanges from "./Exchanges";
import NftExchange from "./NftExchange";

import SeedPileImg from "../../../_sullof/images/Seed_Pile.png";
import SynrPileImg from "../../../_sullof/images/SYNR_Pile.png";
import PortalImg from "../../../_sullof/images/Portal.png";
import YellowArrowImg from "../../../_sullof/images/YellowArrow.png";
import { isMobileOnly } from "react-device-detect";

// TODO dry this code (it's also in HowToPlay.js)
const LargeCard = styled(Card)(({ theme }) => ({
  background:
    "transparent linear-gradient(180deg, #FFFFFF27 0%, #0000004B 100%) 0% 0% no-repeat padding-box",
  border: "1px solid #8B8B8B90",
  borderRadius: "25px",
  opacity: 1,
  maxWidth: isMobileOnly ? "96%" : "80%",
  margin: "0 auto",
}));

function HowToPlay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack spacing={2} alignItems="center">
      {/* stack item one */}
      <Box
        sx={{
          maxWidth: isMobileOnly ? "96%" : "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ width: "76%" }}>
          <Typography
            variant="subtitle1"
            align="center"
            className={"tile-description light"}
          >
            Welcome to the MOBLAND! Here we’ll give you a quick overview of how
            to start your path to becoming Kingpin of the Mafia Metaverse! If
            you’re not sure what a specific item is, head to the assets guide
            above for a handy list of definitions for all the items you’ll come
            across.
          </Typography>
        </ul>
      </Box>
      {/* stack item two */}
      <LargeCard>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            alt="Seed Pile Image"
            image={SynrPileImg}
            style={{
              width: "auto",
              verticalAlign: "center",
              maxHeight: "94px",
              paddingTop: "2%",
            }}
          />
        </Box>
        <CardContent>
          <Title
            navigateTo={null}
            title="GET STARTED WITH SYNR"
            upperCase={true}
          />
          <Line
            description={[
              "For most Synners, the first thing you’ll need to do is get your hands on some SYNR tokens! SYNR is the governance token for MOBLAND and you can stake it to earn more SYNR, sSYNR, or SEED.",
              "You can also get started with just sSYNR, a SYNR Pass, or a Blueprint, but if you don’t have any of those yet, grab some SYNR from one of the exchanges below… ",
            ]}
          />
          <Exchanges style={{ marginTop: 2, marginBottom: 4 }} />
          <Line description="Don’t forget, you’ll also need some Ethereum and BNB in your wallet for gas (transaction) fees!" />
        </CardContent>
      </LargeCard>
      {/* stack item three */}
      <CardMedia
        component="img"
        alt="Yellow Arrow"
        image={YellowArrowImg}
        style={{
          width: "auto",
          verticalAlign: "center",
          height: "80px",
        }}
      />
      {/* stack item four */}
      <LargeCard>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            alt="Portal Image"
            image={PortalImg}
            style={{
              width: "auto",
              verticalAlign: "center",
              height: "130px",
              paddingTop: "1.5%",
            }}
          />
        </Box>
        <CardContent>
          <Title
            navigateTo={null}
            title="POWER UP THE SEED FARM"
            upperCase={true}
          />
          <Line
            description={[
              "SEED fuels the MOBLAND economy so you’re gonna want to load up. Take your SYNR and head over to the SEED Farm section of the staking app to stake it in a sweet cross-chain transaction made possible with Superpower’s Tesseract technology.",
              "Head over to this guide for a breakdown of this process.",
            ]}
          />
        </CardContent>
      </LargeCard>
      {/* stack item five */}
      <CardMedia
        component="img"
        alt="Yellow Arrow"
        image={YellowArrowImg}
        style={{
          width: "auto",
          verticalAlign: "center",
          height: "80px",
        }}
      />
      {/* stack item six */}
      <LargeCard>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            alt="SYNR Pile Image"
            image={SeedPileImg}
            style={{
              width: "auto",
              verticalAlign: "center",
              height: "94px",
              paddingTop: "1.5%",
            }}
          />
        </Box>
        <CardContent>
          <Title
            navigateTo={null}
            title="PUT YOUR SEED TO WORK"
            upperCase={true}
          />
          <Line
            description={[
              "Now that you’ve stacked your wallet with SEED tokens, you can utilize them in many different ways. Use the interactive guide below to learn more about the various ways you can start your climb to becoming Kingpin of the Mafia Metaverse.",
            ]}
          />
        </CardContent>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
        ></Box>
      </LargeCard>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Exchanges title="No tokens? SYNR is available on these platforms:" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <NftExchange title="NFT's are available on these platforms:" />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default HowToPlay;

import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// the three main components
import HowToPlay from "./HowToPlay";
import SeedFarmGuide from "./SeedFarmGuide";
import AssetsGuide from "./AssetsGuide";
import { isMobileOnly } from "react-device-detect";

function Overview({ subsection }) {
  const [currentView, setCurrentView] = useState(subsection || "howtoplay");

  useEffect(() => {
    setCurrentView(subsection);
  }, [subsection]);

  return (
    <div>
      <Container disableGutters component="main" style={{ paddingTop: isMobileOnly ? 0 : 100 }}>
        <div align="center" className="overview-title">
          HOW TO PLAY
        </div>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          pb: 4,
          borderRadius: 1,
        }}
        className={"infoButtons" + (isMobileOnly ? " mobile" : "")}
      >
        <Stack direction={"row"} spacing={isMobileOnly ? 1 : 5}>
          <Button
            component={RouterLink}
            to={"/overview/howtoplay"}
            className={
              "button " + (currentView === "howtoplay" ? "selected" : "")
            }
          >
            Overview
          </Button>
          <Button
            component={RouterLink}
            to={"/overview/seedfarmguide"}
            className={
              "button " +
              (currentView === "seedfarmguide" ? "selected" : "")
            }
          >
            {isMobileOnly ? <span>SEED<br/>farm<br/>guide</span> : <span>SEED farm guide</span>}
          </Button>
          <Button
            component={RouterLink}
            to={"/overview/assetsguide"}
            className={
              "button " + (currentView === "assetsguide" ? "selected" : "")
            }
          >
            {isMobileOnly ? <span>asset<br/>guide</span> : <span>assets guide</span>}
          </Button>
        </Stack>
      </Box>

      <Container
        maxWidth="lg"
        component="main"
        style={{ display: currentView === "howtoplay" ? "block" : "none" }}
      >
        <HowToPlay />
      </Container>

      <Container
        maxWidth="lg"
        component="main"
        style={{ display: currentView === "seedfarmguide" ? "block" : "none" }}
      >
        <SeedFarmGuide />
      </Container>

      <Container
        maxWidth="lg"
        component="main"
        style={{ display: currentView === "assetsguide" ? "block" : "none" }}
      >
        <AssetsGuide />
      </Container>
      <div style={{ paddingTop: 100 }}>
        <span className={"transparent"}>-</span>
      </div>
    </div>
  );
}

export default Overview;

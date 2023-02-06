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
      <Container disableGutters component="main" style={{ paddingTop: 100 }}>
        <div align="center" className="overview-title">
          how to play
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
        className={"infoButtons"}
      >
        <Stack direction="row" spacing={5}>
          <Button
            component={RouterLink}
            to={"/overview/howtoplay"}
            className={
              "infoButton " + (currentView === "howtoplay" ? "selected" : "")
            }
          >
            how to play
          </Button>
          {isMobileOnly ? null : (
            <Button
              component={RouterLink}
              to={"/overview/seedfarmguide"}
              className={
                "infoButton " +
                (currentView === "seedfarmguide" ? "selected" : "")
              }
            >
              SEED farm guide
            </Button>
          )}
          <Button
            component={RouterLink}
            to={"/overview/assetsguide"}
            className={
              "infoButton " + (currentView === "assetsguide" ? "selected" : "")
            }
          >
            assets guide
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
      <div style={{ height: 100 }}>
        <span className={"transparent"}>-</span>{" "}
      </div>
    </div>
  );
}

export default Overview;

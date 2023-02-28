import React from "react";
import { Grid } from "@mui/material";
import Base from "../Base";
import Box from "./Box";
import { isMobileOnly } from "react-device-detect";

import GrafitiWall from "../../assets/images/grafiti-wall.jpg";
import GangsterFiveTall from "../../assets/images/gangster-five-tall.png";

class RoadMap extends Base {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let feb8 = {
      week: "WEEK OF",
      date: "FEBRUARY 8th",
      title: (
        <span>
          ENTER THE
          <br />
          SHADOW MARKET
        </span>
      ),
      content: [
        "SEED Consumption",
        "BUD Production",
        "Operate BUD-Producing Weed Farms on Turf",
        "MOBLAND Real-Estate Leasing: Turf and Farms",
        "Digital Weed Farm Upgradeability",
      ],
    };
    let feb15 = {
      week: "WEEK OF",
      date: "FEBRUARY 15th",
      title: (
        <span>
          WELCOME TO
          <br />
          THE HOOD
        </span>
      ),
      content: [
        "Enter the #MafiaMetaverse and Explore Phase 01 of the Mafia’s Playground",
        "Bring your Genesis Blueprints to Life in the City",
        "Communicate with other Synners through real-time text and voice chat",
        "Scavenge Around the City and Unlock Rewards",
      ],
    };
    let feb21 = {
      week: "WEEK OF",
      date: "FEBRUARY 21th",
      title: (
        <span>
          REAL-TIME PVP:
          <br />
          ALPHA STAGE
        </span>
      ),
      content: [
        "BUD-Looting Minigame",
        " Use Blueprints to Play Against Other Synners",
        "Participate in Brawls to Loot the Opponent’s BUD",
        "Introducing Multiple Brawl Locations in the City",
        "Alpha Environments of the PVP Beta Launch in April",
      ],
    };
    let april = {
      week: "",
      date: "APRIL",
      title: (
        <span>
          REAL-TIME PVP:
          <br />
          ALPHA STAGE
        </span>
      ),
      content: ["Fight It Out in Royale Mode", "Survival Battle Map"],
    };

    return (
      <div style={{ marginTop: this.isMobile() ? 0 : 78 }}>
        <div
          style={{
            backgroundImage: `url(${GrafitiWall})`,
            backgroundSize: "cover",
            borderBottom: "1px #3a3a3b solid",
            position: "relative",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12}>
              <div
                className="roadmapTitle"
                // style={{ marginTop: "-5%" }}
              >
                Road Map
              </div>
            </Grid>
            <Grid style={{ paddingRight: "5%", paddingLeft: "5%" }} container>
              <Grid
                style={{
                  paddingBottom: isMobileOnly ? 0 : 50,
                  marginBottom: isMobileOnly ? "5%" : 0,
                }}
                item
                xs={12}
                sm={3}
              >
                <Box
                  title={feb8.title}
                  week={feb8.week}
                  date={feb8.date}
                  content={feb8.content}
                />{" "}
              </Grid>
              <Grid
                style={{
                  paddingBottom: isMobileOnly ? 0 : 50,
                  marginBottom: isMobileOnly ? "5%" : 0,
                }}
                item
                xs={12}
                sm={3}
              >
                <Box
                  title={feb15.title}
                  week={feb15.week}
                  date={feb15.date}
                  content={feb15.content}
                />{" "}
              </Grid>
              <Grid
                style={{
                  paddingBottom: isMobileOnly ? 0 : 50,
                  marginBottom: isMobileOnly ? "5%" : 0,
                }}
                item
                xs={12}
                sm={3}
              >
                <Box
                  title={feb21.title}
                  week={feb21.week}
                  date={feb21.date}
                  content={feb21.content}
                />{" "}
              </Grid>{" "}
              <Grid
                style={{
                  paddingBottom: isMobileOnly ? 0 : 50,
                  marginBottom: isMobileOnly ? "5%" : 0,
                }}
                item
                xs={12}
                sm={3}
              >
                <Box
                  title={april.title}
                  week={april.week}
                  date={april.date}
                  content={april.content}
                />{" "}
              </Grid>
            </Grid>
            <Grid
              style={{ marginTop: "-10px", borderTop: "#ffee03 10px solid" }}
              item
              xs={12}
              sm={12}
            >
              <br />
              <Grid container>
                <Grid item xs={1} />
                <Grid item xs={8}>
                  <div style={{ fontWeight: "bold" }} className="mulish">
                    BE THE FIRST IN THE KNOW!
                  </div>
                  <br />
                  <div className="mulish">
                    Follow us on our socials to keep up-to-date with all of the
                    latest MOBLAND updates!
                  </div>
                  <div className="socialLarge">
                    <a
                      href={"https://discord.gg/tSVtRkppnp"}
                      rel="noreferrer"
                      className={"bottomSocialLink"}
                    >
                      <i className="fab fa-discord" />
                    </a>
                    <a
                      href="https://t.me/MobLandAnnouncements"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"bottomSocialLink"}
                    >
                      <i className="fab fa-telegram" />
                    </a>
                    <a
                      href="https://twitter.com/MoblandHQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"bottomSocialLink"}
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </Grid>
                <Grid style={{ position: "relative" }} item xs={false} sm={3}>
                  <img
                    className="tallGangster"
                    alt={"Gangster"}
                    src={GangsterFiveTall}
                  />{" "}
                </Grid>{" "}
                <br />
              </Grid>{" "}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default RoadMap;

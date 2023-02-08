import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Link from "@mui/material/Link";

class Footer extends Component {
  render() {
    return (
      <div className="footerBg">
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={5} md={5}>
            <Grid item xs={12} sm={12}>
              <img
                style={{ width: 231, padding: "0 0 16px" }}
                src={"/images/mobland-horizontal.png"}
                alt={"Mobland"}
              />
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container>
                <Grid item xs={12} sm={12} lg={3}>
                  <div className="bold mulish">About</div>
                  <span className={"light"}>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://mobland.gitbook.io/mobland/"}
                    >
                      WhitePaper
                    </Link>
                  </span>
                  <br />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                  <div className="bold mulish">Be a SYNNER</div>
                  <span className={"light"}>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://shadowmarket.mob.land"}
                    >
                      Shadow Marketplace
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://staking.mob.land/core/dashboard"}
                    >
                      Core Pool
                    </Link>

                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://staking.mob.land/seed/dashboard"}
                    >
                      SEED Farm
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://blueprints.mob.land/"}
                    >
                      Blueprint Showcase
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://avatar.mob.land/"}
                    >
                      Reveal App
                    </Link>
                    <br />
                  </span>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                  <div className="bold mulish">Guides</div>
                  <span className={"light"}>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"/howtoplay"}
                    >
                      How to play
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"/seedfarmguide"}
                    >
                      SEED Farm Guide
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"/assetsguide"}
                    >
                      Assets
                    </Link>
                  </span>
                  <br />
                </Grid>
                <Grid item xs={false} sm={1} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={5}>
            <div className="footerJoin">
              <div style={{ color: "#fe0" }}>
                <span className={"bitSmaller mulish bottomSocialLink white"}>
                  Join us
                </span>
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
            </div>
          </Grid>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={12}>
            <div className={"footerNote centered"}>
              <Link color="#e0e0e0" href={"https://mob.land"}>
                MOBLAND © 2023, All rights reserved
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;

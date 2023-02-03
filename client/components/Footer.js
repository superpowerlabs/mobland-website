/* eslint-disable react/prop-types */
import React from "react";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import TwoColumns from "./TwoColumns";
import Link from "@mui/material/Link";

import { isMobileOnly } from "react-device-detect";

function Footer({ setShowTerms }) {
  return (
    <div className="footer">
      {isMobileOnly ? (
        <Container
          maxWidth="lg"
          component="footer"
          sx={{
            mt: 3,
            paddingBottom: 20,
          }}
        >
          <Copyright sx={{ mt: 5 }}>
            <div
              style={{
                color: "#fe0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className={"bitSmaller bold"}
                style={{
                  display: "inline",
                  position: "relative",
                }}
              >
                <div className="joinUs">Join Us</div>
                <Link
                  display="inline"
                  underline="none"
                  color="inherit"
                  href={"https://discord.gg/tSVtRkppnp"}
                  style={{ color: "yellow" }}
                  rel="noreferrer"
                >
                  <img
                    src={"/images/white-discord.png"}
                    alt={"Discord"}
                    style={{ height: 22, paddingRight: 12, display: "inline" }}
                  />
                </Link>
                <Link
                  display="inline"
                  underline="none"
                  color="inherit"
                  href="https://t.me/MobLandAnnouncements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/white-telegram.png"}
                    alt={"Telegram"}
                    style={{ height: 15, paddingRight: 12, display: "inline" }}
                  />
                </Link>
                <Link
                  display="inline"
                  underline="none"
                  color="inherit"
                  href="https://twitter.com/MoblandHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/white-twitter.png"}
                    alt={"Twitter"}
                    style={{ height: 15, display: "inline" }}
                  />
                </Link>
              </div>
            </div>

            <TwoColumns
              style={{ paddingTop: 10 }}
              left={
                <div>
                  <div className="bold">About</div>
                  <span className={"light"}>
                    {/*<Link*/}
                    {/*  display="block"*/}
                    {/*  underline="hover"*/}
                    {/*  color="inherit"*/}
                    {/*  href={"https://mob.land/team"}*/}
                    {/*>*/}
                    {/*  Team*/}
                    {/*</Link>*/}
                    {/*<Link*/}
                    {/*  style={{ paddingRight: "20px" }}*/}
                    {/*  underline="hover"*/}
                    {/*  display="block"*/}
                    {/*  color="inherit"*/}
                    {/*  href={"https://leaderboard.mob.land"}*/}
                    {/*>*/}
                    {/*  Leaderboard*/}
                    {/*</Link>*/}
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://leaderboard.mob.land"}
                    >
                      Leaderboard
                    </Link>
                    <Link
                      display="block"
                      underline="hover"
                      color="inherit"
                      href={"https://mobland.gitbook.io/mobland/"}
                    >
                      WhitePaper
                    </Link>
                  </span>
                </div>
              }
              right={
                <span className={"light"}>
                  <span
                    className={"command"}
                    onClick={() => setShowTerms(true)}
                  >
                    Terms of Use{" "}
                  </span>
                  <Link
                    display="block"
                    underline="hover"
                    color="inherit"
                    href={"https://mob.land/privacy"}
                  >
                    Privacy Policy{" "}
                  </Link>
                  <div style={{ visibility: "hidden" }}> {"."}</div>
                  <div style={{ visibility: "hidden" }}> {"."}</div>
                </span>
              }
            />
            <div style={{ fontSize: "0.9rem" }}>
              <div className="bold">Be a SYNNER</div>
              <span className={"light"}>
                {/*<Link*/}
                {/*  display="block"*/}
                {/*  underline="hover"*/}
                {/*  color="inherit"*/}
                {/*  href={"https://marketplace.mob.land"}*/}
                {/*  target={"_blank"}*/}
                {/*>*/}
                {/*  Marketplace*/}
                {/*</Link>*/}
                <Link
                  display="block"
                  underline="hover"
                  color="inherit"
                  href={"/core/dashboard"}
                >
                  Core Pool
                </Link>

                <Link
                  display="block"
                  underline="hover"
                  color="inherit"
                  href={"/seed/dashboard"}
                >
                  SEED Farm
                </Link>
              </span>
            </div>
          </Copyright>
        </Container>
      ) : (
        <div>
          <Container
            maxWidth="lg"
            component="footer"
            sx={{
              mt: 3,
              paddingBottom: 20,
            }}
          >
            <TwoColumns
              left={
                <div>
                  <img
                    style={{ width: "70%", paddingLeft: "5%" }}
                    src={"/images/mobland-horizontal.png"}
                    alt={"Mobland"}
                  />
                  <TwoColumns
                    left={
                      <TwoColumns
                        left={
                          <div style={{ paddingRight: 24, paddingTop: 20 }}>
                            <div className="bold">About</div>
                            <span className={"light"}>
                              {/*<Link*/}
                              {/*  display="block"*/}
                              {/*  underline="hover"*/}
                              {/*  color="inherit"*/}
                              {/*  href={"https://leaderboard.mob.land"}*/}
                              {/*>*/}
                              {/*  Leaderboard*/}
                              {/*</Link>*/}
                              <Link
                                display="block"
                                underline="hover"
                                color="inherit"
                                href={"https://mobland.gitbook.io/mobland/"}
                              >
                                WhitePaper
                              </Link>
                            </span>
                          </div>
                        }
                        right={
                          <div style={{ padding: "20px 12px 0 32px" }}>
                            <div className="bold">Be a SYNNER</div>
                            <span className={"light"}>
                              <Link
                                display="block"
                                underline="hover"
                                color="inherit"
                                href={"/core/dashboard"}
                              >
                                Core Pool
                              </Link>

                              <Link
                                display="block"
                                underline="hover"
                                color="inherit"
                                href={"/seed/dashboard"}
                              >
                                SEED Farm
                              </Link>
                            </span>
                          </div>
                        }
                      />
                    }
                    right={<div />}
                  />
                </div>
              }
              right={
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#fe0" }}>
                    <span
                      className={"bitSmaller mulish bottomSocialLink white"}
                    >
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
                  <span className={"light"}>
                    {/*<span*/}
                    {/*  className={"command underlineHover"}*/}
                    {/*  onClick={() => setShowTerms(true)}*/}
                    {/*  href={undefined}*/}
                    {/*>*/}
                    {/*  Privacy Policy*/}
                    {/*</span>*/}
                    {/*<Link*/}
                    {/*  display="block"*/}
                    {/*  underline="hover"*/}
                    {/*  color="inherit"*/}
                    {/*  href={"https://mob.land/privacy"}*/}
                    {/*>*/}
                    {/*  Terms of Use{" "}*/}
                    {/*</Link>*/}
                  </span>
                </div>
              }
            />
          </Container>
          <Copyright sx={{ mt: 5 }} />
        </div>
      )}
    </div>
  );
}

export default Footer;

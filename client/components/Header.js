// import { isMobile } from "react-device-detect";
import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { isMobileOnly } from "react-device-detect";
import { Link } from "react-router-dom";

import Base from "./Base";
import MoblandLogo from "../assets/images/Mobland_Logo_Stylized300.png.webp";
export default class Header extends Base {
  constructor(props) {
    super(props);

    this.state = {
      addressExpanded: false,
      expanded: "",
      pathname: window.location.pathname,
      showBg: true,
    };

    this.bindMany(["expandAddress", "checkPathname", "setExpanded"]);
  }

  setExpanded() {
    this.setState({
      expanded: this.state.expanded ? "" : "expanded",
    });
  }

  componentDidMount() {
    this.checkPathname();
    this.checkIfOperator();
  }

  expandAddress() {
    this.setState({
      addressExpanded: !this.state.addressExpanded,
    });
  }

  checkPathname() {
    let { pathname } = window.location;
    if (pathname !== this.state.pathname) {
      this.setState({
        pathname,
      });
    }
    setTimeout(this.checkPathname, 500);
  }

  render() {
    const { expanded, showBg } = this.state;

    return (
      <Navbar
        expanded={expanded}
        fixed={this.isMobile() ? undefined : "top"}
        bg={showBg ? "dark" : "transparent"}
        expand="sm"
        className={this.state.expanded ? "expanded" : ""}
        onToggle={this.setExpanded}
      >
        {isMobileOnly ? (
          <img
            src={MoblandLogo}
            style={{
              width: 40,
              // marginRight: "5%",
            }}
          />
        ) : (
          <Link to={"/"} className={"navbar-brand"}>
            <img
              src={MoblandLogo}
              style={{
                width: 40,
                // marginRight: "5%",
              }}
            />
          </Link>
        )}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={this.setExpanded}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            {isMobileOnly ? (
              <Navbar.Text
                className={"yellowHover"}
                as={Link}
                to={"/"}
                onClick={this.setExpanded}
              >
                Home
              </Navbar.Text>
            ) : null}
            <Navbar.Text
              className={"yellowHover"}
              as={Link}
              to={"/howtoplay"}
              onClick={this.setExpanded}
            >
              How to play
            </Navbar.Text>
            <Navbar.Text className={""}>
              <a
                className={"yellowHover"}
                href={"https://shadowmarket.mob.land"}
                target={"_blank"}
                onClick={this.setExpanded}
              >
                Shadow Market
              </a>
            </Navbar.Text>
            <Navbar.Text
              className={"yellowHover"}
              as={Link}
              to={"/seedfarmguide"}
              onClick={this.setExpanded}
            >
              SEED Generator
            </Navbar.Text>
            <Navbar.Text
              className={"yellowHover"}
              as={Link}
              to={"/assetsguide"}
              onClick={this.setExpanded}
            >
              Assets
            </Navbar.Text>
            {/*<Navbar.Text*/}
            {/*  as={Link}*/}
            {/*  className={"yellowHover"}*/}
            {/*  to={"/roadmap"}*/}
            {/*  onClick={this.setExpanded}*/}
            {/*>*/}
            {/*  Roadmap*/}
            {/*</Navbar.Text>*/}
            <Navbar.Text className={"yellowHover"} onClick={this.setExpanded}>
              <a
                href={"https://data.mob.land/assets/mobland-whitepaper.pdf"}
                target={"whitepaper"}
                alt={"White paper"}
              >
                White paper
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a
                className={"yellowHover"}
                target={"_blank"}
                href={
                  "https://coinmarketcap.com/community/profile/MOBLAND/?type=Articles"
                }
                onClick={this.setExpanded}
              >
                Blog
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>

        {this.isMobile() ? null : (
          <Navbar.Collapse
            className="justify-content-end"
            style={{ display: "block" }}
          >
            <Navbar.Text className={"socialLinks"}>
              <span className={"bitSmaller mulish white"}>Join us</span>

              <a href={"https://discord.gg/tSVtRkppnp"} rel="noreferrer">
                <i className="fab fa-discord" />
              </a>
              <a
                href="https://t.me/MobLandAnnouncements"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram" />
              </a>
              <a
                href="https://twitter.com/MoblandHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
  }
}

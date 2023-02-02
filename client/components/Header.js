// import { isMobile } from "react-device-detect";
import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import Base from "./Base";
import { addToken } from "../utils/Wallet";


export default class Header extends Base {
  constructor(props) {
    super(props);

    this.state = {
      addressExpanded: false,
      expanded: "",
      pathname: window.location.pathname,
      showBg: false
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

    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        this.setState({showBg: true});
      } else {
        this.setState({showBg: false});
      }
    });

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

    // let address
    // let shortAddress;
    // if (this.Store.connectedWallet) {
    //   let fullAddress = this.Store.connectedWallet;
    //   shortAddress = this.ellipseAddress(fullAddress);
    //   if (this.state.addressExpanded) {
    //     address = (
    //       <span>
    //         {this.Store.connectedWallet}
    //         {/*  <i onClick={this.expandAddress}*/}
    //         {/*                                                className="command fa fa-minus-circle"*/}
    //         {/*/>*/}
    //       </span>
    //     );
    //   } else {
    //     address = (
    //       <span>
    //         {shortAddress}
    //         {/*{isPhone ? null :*/}
    //         {/*  <i style={{marginLeft: 5}} onClick={this.expandAddress}*/}
    //         {/*     className="command fa fa-plus-circle"*/}
    //         {/*  />*/}
    //         {/*}*/}
    //       </span>
    //     );
    //   }
    // }

    // let connectedTo = "";
    //   =
    //   (
    //   <span className={"connected"}>
    //     {this.Store.connectedWallet ? (
    //       <span className={"notConnected"}>Switch to Ethereum Mainnet</span>
    //     ) : null}
    //   </span>
    // );
    // let { connectedNetwork } = this.Store;

    // if (connectedNetwork) {
    //   connectedTo = "";
    // }

    return (
      <Navbar
        expanded={expanded}
        fixed={this.isMobile() ? undefined : "top"}
        bg={showBg ? "dark" : "transparent"}
        expand="lg"
        className={"roboto"}
      >
        {/*<i className="fa-solid fa-bars" style={{fontSize: '2rem'}}></i>*/}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={this.setExpanded}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            <img
              src={"https://s3.mob.land/assets/Mobland_Logo_Stylized300.png"}
              style={{
                width: "5%",
                marginRight: "5%",
              }}
            />
            <Navbar.Text className={"links"} as={Link} to={"/"}>
              Home
            </Navbar.Text>
            <Navbar.Text className={"links"}>
              <a
                className={"menucmd yellowHover"}
                href={"https://staking.mob.land"}
                target={"_blank"}
              >
                Staking
              </a>
            </Navbar.Text>
            <Navbar.Text className={"links"}>
              <a
                className={"menucmd yellowHover"}
                href={"https://marketplace.mob.land"}
                target={"_blank"}
              >
                Market
              </a>
            </Navbar.Text>
            <Navbar.Text className={"links"}>
              <a
                className={"menucmd yellowHover"}
                href={"https://marketplace.mob.land"}
                target={"_blank"}
              >
                How To Play
              </a>
            </Navbar.Text>
            <Navbar.Text className={"links"}>
              <a
                className={"menucmd yellowHover"}
                href={"https://marketplace.mob.land"}
                target={"_blank"}
              >
                Roadmap
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>

        {/*{this.isMobile() ? (*/}
        {/*  this.Store.connectedWallet ? (*/}
        {/*    <div className={"aqua floatRightAbsolute"}>*/}
        {/*      <i*/}
        {/*        className="fas fa-user-astronaut"*/}
        {/*        style={{ marginRight: 10 }}*/}
        {/*      />*/}
        {/*      {address}*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <Button*/}
        {/*      className={"floatRightAbsolute"}*/}
        {/*      size={"sm"}*/}
        {/*      onClick={this.props.connect}*/}
        {/*    >*/}
        {/*      Connect your wallet*/}
        {/*    </Button>*/}
        {/*  )*/}
        {/*) : null}*/}

        <Navbar.Collapse>
          {this.Store.chainId === 1 && !this.isMobile() ? (
            <Nav className={"addSynr"} onClick={() => addToken()}>
              Click here to add SYNR to your wallet
            </Nav>
          ) : null}
        </Navbar.Collapse>
        {/*<Navbar.Brand href="/">*/}
        {/*  <img*/}
        {/*    src={"/images/syncity-full-horizontal.png"}*/}
        {/*    style={{ height: 40 }}*/}
        {/*  />*/}
        {/*</Navbar.Brand>*/}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll></Nav>
        </Navbar.Collapse>

        {this.isMobile() ? null : (
          <Navbar.Collapse
            className="justify-content-end"
            style={{ display: "block" }}
          >
            <Navbar.Text className={"socialLinks"}>
              <a href={"https://discord.gg/tSVtRkppnp"} rel="noreferrer">
                <span className={"bitSmaller mulish"}>JOIN US</span>
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
        {/*{*/}
        {/*  this.state.isOperator*/}
        {/*    ? <Navbar.Text>*/}
        {/*      <Link to="/admin" className={'gold'}><i className="fas fa-tools"/> Admin</Link>*/}
        {/*    </Navbar.Text>*/}
        {/*    : null*/}
        {/*}*/}
      </Navbar>
    );
  }
}

// eslint-disable-next-line no-undef
import React from "react";
import Base from "./Base";
// import Ab from "./lib/Ab";
import VideoBg from "./VideoBg";

import investors from "../data/investors.json";
import partners from "../data/partners.json";
import InvestorsAndPartners from "./InvestorsAndPartners";
import Modal from "./Modal";
// import InvestorsAndPartners from "./InfiniteInvestorsAndPartners";

// eslint-disable-next-line no-undef
import { Row, Col } from "react-bootstrap";

// eslint-disable-next-line no-undef

export default class Home extends Base {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      openModal: true,
      // loaded: false,
    };

    // this.bindMany(["onImageLoad"]);
  }
  // function for closing modal
  closeModal() {
    this.setState({ openModal: false });
  }

  // onImageLoad() {
  //   this.setTimeout(() => {
  //     this.setState({
  //       loaded: true,
  //     });
  //   }, 1000); //7000);
  // }

  componentDidMount() {}

  render() {
    // const { loaded } = this.state;

    return (
      <div>
        <div style={{ marginTop: this.isMobile() ? 0 : 78 }}>
          <VideoBg />
          <Row className={"stats"}>
            <Col xs={12} lg={4}>
              <div className={"centered" + (this.isMobile() ? " mb22" : "")}>
                <div className={"wrong"}>497k+</div>
                <div className={"underWrong"}>
                  Existing community
                  <br />
                  and growing
                </div>
              </div>{" "}
            </Col>
            <Col xs={12} lg={4}>
              <div className={"centered" + (this.isMobile() ? " mb22" : "")}>
                <div className={"wrong"}>$3M USD+</div>
                <div className={"underWrong"}>
                  8000 NFTS
                  <br />
                  sold out in 18 minutes
                </div>
              </div>{" "}
            </Col>

            <Col xs={12} lg={4}>
              <div className={"centered" + (this.isMobile() ? " mb22" : "")}>
                <div className={"wrong"}>#1 IN Vol</div>
                <div className={"underWrong"}>
                  Ranked #1 on Binance NFT
                  <br />
                  all-time volume
                </div>
              </div>{" "}
            </Col>
          </Row>
          <Row>
            <Col className={"investor"}>INVESTORS</Col>
          </Row>
          <Row>
            <Col className={"list"}>
              <InvestorsAndPartners
                store={this.Store}
                setStore={this.setStore}
                set={investors}
                start={0}
              />
            </Col>
          </Row>

          <Row>
            <Col className={"investor"}>PARTNERS</Col>
          </Row>
          <Row>
            <Col className={"list"}>
              <InvestorsAndPartners
                store={this.Store}
                setStore={this.setStore}
                set={partners}
                start={100}
              />
            </Col>
          </Row>
        </div>
        <Modal open={this.state.openModal} onClose={this.closeModal} />
      </div>
    );
  }
}

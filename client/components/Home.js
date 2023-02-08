import React from "react";
import Base from "./Base";
import investors from "../data/investors.json";
import partners from "../data/partners.json";
import InvestorsAndPartners from "./InvestorsAndPartners";
import StakingPools from "./StakingPools";
// import InvestorsAndPartners from "./InfiniteInvestorsAndPartners";

import { Row, Col } from "react-bootstrap";
import SynrRank from "./SynrRank";
import BuildYourEmpire from "./BuildYourEmpire";
import Browse from "./Browse";
import Economy from "./Economy";
import Assets from "./Assets";
import Leaks from "./Leaks";

export default class Home extends Base {
  constructor(props) {
    super(props);

    this.state = {
      // loaded: false,
    };

    // this.bindMany(["onImageLoad"]);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ marginTop: this.isMobile() ? 0 : 78 }}>
        <StakingPools />
        <BuildYourEmpire />
        <SynrRank />
        <Economy />
        <Browse />
        <Leaks />
        <Assets />
        <Row
          style={{
            paddingTop: this.isMobile() ? 40 : 0,
          }}
        >
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
            <div style={{ height: 60 }} ><span className={"transparent"}>-</span></div>
          </Col>
        </Row>
      </div>
    );
  }
}

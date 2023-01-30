// eslint-disable-next-line no-undef
import React from "react";
import Base from "./Base";
// import Ab from "./lib/Ab";
import investors from "../data/investors.json";
import partners from "../data/partners.json";
import InvestorsAndPartners from "./InvestorsAndPartners";
import StakingPools from "./StakingPools";
// import InvestorsAndPartners from "./InfiniteInvestorsAndPartners";

// eslint-disable-next-line no-undef
import { Row, Col } from "react-bootstrap";
import Blueprints from "./Blueprints";
import SynrRank from "./SynrRank";

// eslint-disable-next-line no-undef

export default class Home extends Base {
  constructor(props) {
    super(props);

    this.state = {
      // loaded: false,
    };

    // this.bindMany(["onImageLoad"]);
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
      <div style={{ marginTop: this.isMobile() ? 0 : 78 }}>
        <StakingPools />
        <SynrRank />
        <Blueprints />

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
    );
  }
}

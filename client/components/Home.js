// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
import VideoBg from "./VideoBg";

import investors from "../data/investors.json";
import partners from "../data/partners.json";
import HorizontalScroll from "./HorizontalScroll";

// eslint-disable-next-line no-undef
const { Row, Col } = ReactBootstrap;

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
      <div style={{ marginTop: 78 }}>
        <div className={"videoBg"}>
          <VideoBg />
        </div>
        <Row className={"stats"}>
          <Col>
            <div className={"centered"}>
              <div className={"wrong"}>497k+</div>
              <div className={"underWrong"}>
                Existing community
                <br />
                and growing
              </div>
            </div>{" "}
          </Col>
          <Col>
            <div className={"centered"}>
              <div className={"wrong"}>$3M USD+</div>
              <div className={"underWrong"}>
                8000 NFTS
                <br />
                sold out 18 min
              </div>
            </div>{" "}
          </Col>

          <Col>
            <div className={"centered"}>
              <div className={"wrong"}>#1 IN Vol</div>
              <div className={"underWrong"}>
                Binance NFT
                <br />
                All-time #1 volume
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col className={"investor"}>INVESTORS</Col>
        </Row>
        <Row>
          <Col className={"list"}>
            <HorizontalScroll
              store={this.Store}
              setStore={this.setStore}
              set={investors}
            />
          </Col>
        </Row>

        <Row>
          <Col className={"investor"}>PARTNERS</Col>
        </Row>
        <Row>
          <Col className={"list"}>
            <HorizontalScroll
              store={this.Store}
              setStore={this.setStore}
              set={partners}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

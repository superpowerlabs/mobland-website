// eslint-disable-next-line no-undef
import React from "react";
import Base from "./Base";
// import Ab from "./lib/Ab";
import Home from "./Home";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } from "react-bootstrap";

// eslint-disable-next-line no-undef

export default class LandingPage extends Base {
  constructor(props) {
    super(props);

    this.bindMany(["onImageLoad", "skip"]);
  }

  onImageLoad() {
    this.setTimeout(
      () => {
        this.setStore({
          loaded: true,
        });
      },
      window.location.hostname === "localhost" ? 7000 : 7000
    );
  }

  componentDidMount() {
    if (/skip/.test(window.location.search)) {
      this.setStore({
        loaded: true,
      });
    }
  }
  skip() {
    this.setStore({
      loaded: true,
    });
  }

  render() {
    const { loaded } = this.Store;
    // const loaded = true;

    return (
      <div style={{ width: "100%" }}>
        <div className={"wrongPreload"}>#</div>
        {loaded ? (
          <Home />
        ) : (
          <div
            className={"allPage"}
            style={{
              height: window.innerHeight,
              zIndex: 10000,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <img
              src={"https://data.mob.land/assets/MoblandSitePreloader.gif"}
              alt={"Loading animation"}
              style={{ width: "100%" }}
              onLoad={this.onImageLoad}
            />
            <img
              src={"https://data.mob.land/assets/VideoCover.jpg"}
              className={"offScreen"}
            />
            <button onClick={this.skip} className="skip">
              <div>Skip the intro</div>
            </button>
          </div>
        )}
      </div>
    );
  }
}

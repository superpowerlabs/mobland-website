// eslint-disable-next-line no-undef
import React from "react";
import Base from "./Base";
import { Grid } from "@mui/material";

import "../assets/css/glitch.css";

async function sleep(millis) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => setTimeout(resolve, millis));
}

export default class InvestorsAndPartners extends Base {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      direction: 1,
    };

    // eslint-disable-next-line no-undef
    this.scrollContainerRef = React.createRef();

    this.bindMany(["magicScroll", "scrollLeftNow"]);
    this.count = 0;
  }

  componentDidMount() {}

  async scrollLeftNow(zero) {
    let { left, direction } = this.state;
    if (!zero && !(left % 225)) {
      return;
    }
    this.scrollContainerRef.current.scrollLeft = left;
    left += direction;
    this.setState({
      left,
    });
    await sleep(1);
    await this.scrollLeftNow();
  }

  async magicScroll() {
    let { left, direction } = this.state;
    const { clientWidth } = this.scrollContainerRef.current;
    const len = this.props.set.length;
    if (direction === 1 && left + clientWidth >= 255 * (len - 3)) {
      this.setState({ direction: -1 });
    } else if (direction === -1 && left <= 0) {
      this.setState({ direction: 1 });
    }

    await sleep(1000);
    this.setState({
      cls: "fade-out",
    });
    await this.scrollLeftNow(true);
    this.setState({
      cls: "fade-in",
    });
    await sleep(300);
    this.magicScroll();
  }

  render() {
    let i = this.props.start;
    return (
      <div ref={this.scrollContainerRef}>
        <Grid container>
          <Grid item xs={1} />

          <Grid item xs={10}>
            <Grid container>
              {this.props.set.map((item) => {
                if (item.skip) {
                  return null;
                }
                let key = "entity" + i++;
                let style = Math.ceil(5 * Math.random());
                if (style === 6) {
                  style = 5;
                }
                return (
                  <Grid key={key} item xs={4} sm={3} md={2}>
                    <div className={"tile"}>
                      <div className={"grid-item"}>
                        <a href={item.href} target={"_blank"}>
                          <div
                            className={
                              "hcard  glitch glitch--style-" +
                              style +
                              " " +
                              (Math.random() > 0.5 ? "glitch--vertical" : "")
                            }
                          >
                            <div
                              className="nonglitch__img"
                              style={{
                                backgroundImage: `url(${item.img})`,
                              }}
                            />
                            <div
                              className="glitch__img"
                              style={{
                                backgroundImage: `url(${item.img})`,
                              }}
                            />
                            <div
                              className="glitch__img"
                              style={{
                                backgroundImage: `url(${item.img})`,
                              }}
                            />
                            <div
                              className="glitch__img"
                              style={{
                                backgroundImage: `url(${item.img})`,
                              }}
                            />
                            <div
                              className="glitch__img"
                              style={{
                                backgroundImage: `url(${item.img})`,
                              }}
                            />
                          </div>
                        </a>
                        <div className={"centered"} style={{ paddingTop: 6 }}>
                          <a className={"grey666 yellowHover"} href={item.href}>
                            {item.name}
                          </a>
                        </div>
                        {item.company ? (
                          <div
                            style={{ paddingBottom: 10 }}
                            className={
                              this.isMobile()
                                ? "grey999 centered"
                                : "wrapped grey999 centered"
                            }
                          >
                            {item.company}
                          </div>
                        ) : (
                          <div style={{ color: "transparent" }}>
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}

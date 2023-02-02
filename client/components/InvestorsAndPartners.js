// eslint-disable-next-line no-undef
import React from "react";
import Base from "./Base";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default class InvestorsAndPartners extends Base {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      direction: 1,
    };

    // eslint-disable-next-line no-undef
    this.scrollContainerRef = React.createRef();

    this.count = 0;
  }


  render() {
    let i = this.props.start;
    return (
      <div className="scrollingWrapper">
        <div style={{display: "inline-flex"}}
          // className={"hcontainer grid " + (this.state.cls || "")}
          ref={this.scrollContainerRef}
        >
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
                <div
                  key={key}
                  className={this.isMobile() ? "mobileImages" : ""}
                >
                  <div className={"grid-item"}>
                    <a href={item.href} target={"_blank"}>
                      {/*<div className="grid__item">*/}
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
                            backgroundImage: `url(/images/investors/${item.img})`,
                          }}
                        />
                        <div
                          className="glitch__img"
                          style={{
                            backgroundImage: `url(/images/investors/${item.img})`,
                          }}
                        />
                        <div
                          className="glitch__img"
                          style={{
                            backgroundImage: `url(/images/investors/${item.img})`,
                          }}
                        />
                        <div
                          className="glitch__img"
                          style={{
                            backgroundImage: `url(/images/investors/${item.img})`,
                          }}
                        />
                        <div
                          className="glitch__img"
                          style={{
                            backgroundImage: `url(/images/investors/${item.img})`,
                          }}
                        />
                      </div>
                      {/*</div>*/}
                    </a>
                    <div className={"centered"} style={{ paddingTop: 6 }}>
                      <a className={"grey666 yellowHover"} href={item.href}>
                        {item.name}
                      </a>
                    </div>
                    {item.company ? (
                      <div
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
                        <br />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
